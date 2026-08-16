import { NextRequest, NextResponse } from "next/server";
import { WebsiteAnalysis, PageAnalysis, SEOIssue, WebsiteScores, Recommendation, ArchitectureIssue, FileAnalysis, FolderAnalysis, RouteInfo } from "../../../../types/seo-analyzer";
import { detectCannibalization, generateInternalLinkRecommendations, generateTopicClusters } from "../../../../lib/seoIntelligence";
import { crawlWebsite, CrawlResult, normalizeUrl, isSameDomain } from "../../../../lib/seo/crawler";
import { parseSitemap, discoverSitemaps, normalizeUrlForComparison } from "../../../../lib/seo/sitemap";
import { fetchRobotsTxt } from "../../../../lib/seo/robots";
import { performRuleBasedAnalysis } from "../../../../lib/seo/aiIntelligence";
import { assertPublicUrl } from "../../../../lib/seo/security";

export const runtime = "nodejs";
export const maxDuration = 120; // 2 minutes for comprehensive analysis

interface AnalyzeOptions {
  url: string;
  includeCrawling?: boolean;
  includeSitemap?: boolean;
  includeRobotsTxt?: boolean;
  maxPages?: number;
}

export async function POST(request: NextRequest) {
  try {
    const options: AnalyzeOptions = await request.json();

    if (!options.url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    let baseUrl: string;
    try {
      baseUrl = assertPublicUrl(options.url).toString();
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Invalid URL" },
        { status: 400 }
      );
    }

    const analysis: Partial<WebsiteAnalysis> = {
      project: {
        name: new URL(baseUrl).hostname,
        framework: "Unknown",
        routes: [],
        totalFiles: 0,
        totalComponents: 0,
      },
      pages: [],
      files: [],
      folders: [],
      routes: [],
      internalLinks: [],
      dependencies: [],
      seoIssues: [],
      architectureIssues: [],
      topics: [],
      clusters: [],
      contentGaps: [],
      keywordOpportunities: [],
      recommendations: [],
      scores: {
        seoHealth: 0,
        technicalSEO: 0,
        onPageSEO: 0,
        internalLinking: 0,
        contentCoverage: 0,
        topicAuthority: 0,
        architecture: 0,
      },
    };

    const issues: SEOIssue[] = [];

    // 1. Crawl website if requested
    if (options.includeCrawling !== false) {
      try {
        const crawlResults = await crawlWebsite({
          url: baseUrl,
          maxPages: options.maxPages || 20,
          followLinks: true,
          respectRobotsTxt: true,
        });

        // Convert crawl results to PageAnalysis
        analysis.pages = crawlResults.map((result: CrawlResult) => {
          const pageUrl = normalizeUrl(result.url);
          return {
            id: `page:${pageUrl}`,
            type: "page" as const,
            url: pageUrl,
            title: result.title,
            metaDescription: result.metaDescription,
            h1: result.h1,
            canonical: result.canonical,
            indexable: result.indexable,
            httpStatus: result.status,
            wordCount: result.wordCount,
            internalLinks: (result.internalLinks || []).length,
            externalLinks: (result.externalLinks || []).length,
            incomingLinks: 0, // Will be calculated later
            pageDepth: 0, // Will be calculated later
            seoScore: 0, // Will be calculated
            contentScore: 0, // Will be calculated
            internalLinkingScore: 0, // Will be calculated
            status:
              result.status >= 200 && result.status < 300
                ? "healthy"
                : result.status === 403
                  ? "missing"
                  : "critical",
          };
        });

        // Extract internal links
        analysis.internalLinks = extractInternalLinks(crawlResults, baseUrl);

        // Calculate incoming links and page depth
        if (analysis.pages) {
          calculateLinkMetrics(analysis.pages, analysis.internalLinks);
        }
      } catch (error) {
        issues.push({
          id: "issue:crawl-failed",
          type: "technical",
          severity: "high",
          confidence: 100,
          problem: "Website crawling failed",
          evidence: [`Error: ${error instanceof Error ? error.message : "Unknown error"}`],
          whyItMatters: "Unable to analyze website structure and content",
          recommended: "Check if the website is accessible and not blocking crawlers",
          affectedEntity: baseUrl,
        });
      }
    }

    // 2. Parse sitemap if requested
    if (options.includeSitemap !== false) {
      try {
        const sitemapUrls = await discoverSitemaps(baseUrl);
        const allRoutes: string[] = [];
        let sitemapTotal = 0;

        for (const sitemapUrl of sitemapUrls) {
          const parsed = await parseSitemap(sitemapUrl);
          allRoutes.push(...parsed.urls.map((u) => u.loc));
          sitemapTotal += parsed.totalUrls;
        }

        analysis.project!.routes = allRoutes;

        // Check for pages in sitemap but not crawled
        if (analysis.pages) {
          const crawledUrls = new Set(
            analysis.pages.map((p) => normalizeUrlForComparison(p.url))
          );
          const sitemapSet = new Set(
            allRoutes.map((loc) => normalizeUrlForComparison(loc))
          );

          const missingInCrawl = [...sitemapSet].filter((url) => !crawledUrls.has(url));
          if (missingInCrawl.length > 0) {
            issues.push({
              id: "issue:sitemap-crawl-mismatch",
              type: "technical",
              severity: "medium",
              confidence: 90,
              problem: `${missingInCrawl.length} URLs in sitemap not found during crawling`,
              evidence: [
                `Sitemap contains ${sitemapTotal} URLs`,
                `Crawl found ${analysis.pages.length} pages`,
              ],
              whyItMatters: "May indicate orphan pages or crawling issues",
              recommended: "Review sitemap and ensure all important pages are accessible",
              affectedEntity: baseUrl,
            });
          }
        }
      } catch (error) {
        issues.push({
          id: "issue:sitemap-failed",
          type: "technical",
          severity: "low",
          confidence: 75,
          problem: "Sitemap parsing failed",
          evidence: [`Error: ${error instanceof Error ? error.message : "Unknown error"}`],
          whyItMatters: "Sitemap helps search engines discover and index pages",
          recommended: "Ensure sitemap.xml exists and is accessible",
          affectedEntity: baseUrl,
        });
      }
    }

    // 3. Parse robots.txt if requested
    if (options.includeRobotsTxt !== false) {
      try {
        const robotsResult = await fetchRobotsTxt(baseUrl);
        if (robotsResult.exists && robotsResult.issues) {
          issues.push(
            ...robotsResult.issues.map(
              (issue, index): SEOIssue => ({
                id: `issue:robots-${issue.type}-${index}`,
                type: "technical",
                severity: issue.severity,
                confidence: 85,
                problem: issue.message,
                evidence: ["Found in robots.txt analysis"],
                whyItMatters: "Robots.txt controls search engine crawling behavior",
                recommended: "Review and fix robots.txt configuration",
                affectedEntity: baseUrl,
              })
            )
          );
        }
      } catch {
        // Non-critical, continue without robots.txt analysis
      }
    }

    // 4. Detect SEO issues from crawled data
    const detectedIssues = detectSEOIssues(analysis.pages || [], baseUrl);
    issues.push(...detectedIssues);

    // 5. Calculate SEO scores
    analysis.scores = calculateSEOScores(analysis.pages || [], issues);

    // 6. Derive website architecture from crawled pages + sitemap routes
    {
      const derived = deriveArchitecture(analysis.pages || [], analysis.project?.routes || []);
      analysis.files = derived.files;
      analysis.folders = derived.folders;
      analysis.routes = derived.routes;
      analysis.architectureIssues = derived.issues;
      if (analysis.scores) {
        analysis.scores.architecture = derived.architectureScore;
      }
    }

    // 7. AI Intelligence for topics and content gaps
    try {
      const aiData = performRuleBasedAnalysis({
        pages:
          analysis.pages?.map((p) => ({
            url: p.url,
            title: p.title,
            headings: p.h1 ? [p.h1] : [],
          })) || [],
        businessContext: "SEO and web services",
        industry: "Technology",
      });

      // Adapt AI output to the shared data model
      const adaptedTopics = aiData.topics.map((t) => ({
        id: t.id,
        name: t.name,
        type: t.type,
        coverage: t.coverage,
        existingPages: t.existingPages,
        recommendedPages: t.recommendedPages,
        status: (t.coverage >= 60 ? "healthy" : t.coverage >= 40 ? "weak" : "missing") as
          | "healthy"
          | "strong"
          | "weak"
          | "critical"
          | "recommended"
          | "missing",
      }));

      const adaptedContentGaps = aiData.contentGaps.map((g) => ({
        id: g.id,
        topic: g.topic,
        currentCoverage: g.currentCoverage,
        coverage: g.coverage,
        recommendedPillar: g.topic,
        recommendedClusterPages: g.recommendedContent.map((c, i) => ({
          id: `${g.id}-content-${i}`,
          title: c.title,
          url: c.suggestedUrl,
          suggestedUrl: c.suggestedUrl,
          status: "recommended" as const,
          searchIntent: c.searchIntent,
          primaryKeyword: c.primaryKeyword,
          priority: c.priority,
        })),
        recommendedContent: g.recommendedContent.map((c, i) => ({
          id: `${g.id}-content-${i}`,
          title: c.title,
          url: c.suggestedUrl,
          suggestedUrl: c.suggestedUrl,
          status: "recommended" as const,
          searchIntent: c.searchIntent,
          primaryKeyword: c.primaryKeyword,
          priority: c.priority,
        })),
        priority: g.priority,
      }));

      analysis.topics = adaptedTopics;
      analysis.contentGaps = adaptedContentGaps;
      analysis.keywordOpportunities = aiData.keywordOpportunities;

      // Update page search intents from AI
      if (aiData.searchIntents && analysis.pages) {
        aiData.searchIntents.forEach((intent) => {
          const page = analysis.pages!.find((p) => p.url === intent.url);
          if (page) {
            page.searchIntent = intent.intent;
            page.primaryKeyword = intent.primaryKeyword;
          }
        });
      }

      // Generate topic clusters from AI topics
      analysis.clusters = generateTopicClusters(adaptedTopics, analysis.pages || []);
    } catch (error) {
      console.error("AI intelligence failed:", error);
      // Continue without AI data
    }

    // 7. Detect cannibalization
    if (analysis.pages) {
      const cannibalizationIssues = detectCannibalization(analysis.pages);
      issues.push(...cannibalizationIssues);
    }

    // 8. Generate internal link recommendations
    if (analysis.pages && analysis.internalLinks) {
      analysis.recommendations = generateInternalLinkRecommendations(
        analysis.pages,
        analysis.internalLinks
      );
    } else {
      analysis.recommendations = [];
    }

    // 9. Assign issues to analysis
    analysis.seoIssues = issues;

    // 10. Score each page for accurate per-page metrics
    if (analysis.pages) {
      scorePages(analysis.pages, issues);
    }

    // 11. Generate basic recommendations
    const basicRecommendations = generateRecommendations(issues, analysis.pages || []);
    analysis.recommendations.push(...basicRecommendations);

    return NextResponse.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      { error: "Failed to analyze website", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

function deriveArchitecture(pages: PageAnalysis[], sitemapRoutes: string[]) {
  const issues: ArchitectureIssue[] = [];
  const routeSet = new Set<string>();
  const folderMap = new Map<string, { files: number; pageSpecific: number; paths: string[] }>();
  const fileMap = new Map<string, FileAnalysis>();

  const urlToPath = (url: string) => {
    try {
      const pathname = new URL(url).pathname;
      return pathname.endsWith("/") ? pathname : `${pathname}/`;
    } catch {
      return "/";
    }
  };

  for (const page of pages) {
    const path = urlToPath(page.url);
    routeSet.add(path);

    const segments = path.split("/").filter(Boolean);
    for (let i = 1; i <= segments.length; i++) {
      const folderPath = `/${segments.slice(0, i).join("/")}`;
      const entry = folderMap.get(folderPath) || { files: 0, pageSpecific: 0, paths: [] };
      entry.files += 1;
      entry.paths.push(path);
      folderMap.set(folderPath, entry);
    }

    const fileName = segments.length > 0 ? segments[segments.length - 1] : "index";
    const fileId = `file:${path}`;
    fileMap.set(fileId, {
      id: fileId,
      type: "file",
      path,
      fileType: "route",
      lines: 0,
      imports: 0,
      importedBy: page.incomingLinks || 0,
      complexity: "low",
      architectureStatus: "healthy",
    });
  }

  for (const route of sitemapRoutes) {
    const path = urlToPath(route);
    if (!routeSet.has(path)) {
      routeSet.add(path);
      const segments = path.split("/").filter(Boolean);
      const fileName = segments.length > 0 ? segments[segments.length - 1] : "index";
      fileMap.set(`file:${path}`, {
        id: `file:${path}`,
        type: "file",
        path,
        fileType: "route",
        lines: 0,
        imports: 0,
        importedBy: 0,
        complexity: "low",
        architectureStatus: "warning",
      });
    }
  }

  const routes: RouteInfo[] = [];
  const parentMap = new Map<string, string[]>();
  for (const path of routeSet) {
    const segments = path.split("/").filter(Boolean);
    const id = `route:${path}`;
    routes.push({
      id,
      path,
      type: "static",
      children: [],
    });
    if (segments.length > 1) {
      const parentPath = `/${segments.slice(0, -1).join("/")}`;
      const children = parentMap.get(parentPath) || [];
      children.push(id);
      parentMap.set(parentPath, children);
    }
  }
  for (const route of routes) {
    route.children = parentMap.get(route.path) || [];
  }

  const folders: FolderAnalysis[] = [...folderMap.entries()].map(([path, data]) => {
    const depth = path.split("/").filter(Boolean).length;
    const architectureScore = Math.max(
      0,
      Math.min(100, 100 - (depth > 3 ? 20 : 0) - (data.pageSpecific > 5 ? 15 : 0))
    );
    return {
      id: `folder:${path}`,
      type: "folder",
      path,
      files: data.files,
      reusableComponents: 0,
      pageSpecificComponents: data.pageSpecific,
      utilities: 0,
      architectureScore,
    };
  });

  if (pages.length > 0) {
    const orphanRoutes = routes.filter((r) => {
      const isLeaf = r.children.length === 0;
      const parent = routes.find(
        (p) => p.path !== r.path && r.path.startsWith(p.path.endsWith("/") ? p.path : `${p.path}/`)
      );
      return isLeaf && parent && pages.find((p) => p.pageDepth === 0)?.url && r.path !== "/";
    });
    if (orphanRoutes.length > 0) {
      issues.push({
        id: "architecture:orphan-routes",
        severity: "medium",
        confidence: 70,
        problem: `${orphanRoutes.length} routes have no interlinking in the crawl`,
        evidence: orphanRoutes.slice(0, 5).map((r) => r.path),
        whyItMatters: "Orphan routes reduce crawlability and authority distribution",
        recommended: "Add internal links from related pages to these routes",
        affectedEntity: orphanRoutes.map((r) => r.path).join(", "),
        type: "deep-import",
      });
    }
  }

  const folderValues = [...folderMap.values()];
  const deepFolders = [...folderMap.keys()].filter((p) => p.split("/").filter(Boolean).length > 3);
  if (deepFolders.length > 0) {
    issues.push({
      id: "architecture:deep-nesting",
      severity: "low",
      confidence: 75,
      problem: `${deepFolders.length} URL paths are more than 3 levels deep`,
      evidence: deepFolders.slice(0, 5),
      whyItMatters: "Deeply nested URLs dilute keyword relevance and complicate navigation",
      recommended: "Flatten URL structure where possible",
      affectedEntity: deepFolders.slice(0, 5).join(", "),
      type: "deep-import",
    });
  }

  if (folderValues.length > 0 && folderValues.some((f) => f.files === 1)) {
    const singleFileFolders = [...folderMap.entries()].filter(([, v]) => v.files === 1);
    issues.push({
      id: "architecture:single-file-folders",
      severity: "low",
      confidence: 60,
      problem: `${singleFileFolders.length} folders contain only a single page`,
      evidence: singleFileFolders.slice(0, 5).map(([p]) => p),
      whyItMatters: "Folders with a single page often indicate unnecessary hierarchy",
      recommended: "Consider consolidating routes or grouping related pages",
      affectedEntity: singleFileFolders.slice(0, 5).map(([p]) => p).join(", "),
      type: "duplicate-code",
    });
  }

  const architectureScore = Math.max(
    0,
    100 - issues.reduce((acc, i) => acc + (i.severity === "high" ? 25 : i.severity === "medium" ? 12 : 5), 0)
  );

  return {
    files: [...fileMap.values()],
    folders,
    routes,
    issues,
    architectureScore,
  };
}

function extractInternalLinks(crawlResults: CrawlResult[], baseUrl: string): any[] {  const links: any[] = [];
  const normalizedBase = normalizeUrl(baseUrl);

  for (const result of crawlResults) {
    const fromUrl = normalizeUrl(result.url);
    for (const internalLink of result.internalLinks || []) {
      if (isSameDomain(internalLink, normalizedBase)) {
        links.push({
          id: `link:${fromUrl}-${internalLink}`,
          from: `page:${fromUrl}`,
          to: `page:${normalizeUrl(internalLink)}`,
          status: "existing",
          anchorText: undefined, // Would need more sophisticated parsing
        });
      }
    }
  }

  return links;
}

function calculateLinkMetrics(pages: PageAnalysis[], internalLinks: any[]) {
  // Calculate incoming links for each page
  const incomingLinkCount = new Map<string, number>();

  for (const link of internalLinks || []) {
    const to = link.to as string;
    const count = incomingLinkCount.get(to) || 0;
    incomingLinkCount.set(to, count + 1);
  }

  for (const page of pages) {
    page.incomingLinks = incomingLinkCount.get(page.id) || 0;

    // Calculate page depth from path segments
    try {
      page.pageDepth = new URL(page.url).pathname.split("/").filter(Boolean).length;
    } catch {
      page.pageDepth = 0;
    }
  }
}

function detectSEOIssues(pages: PageAnalysis[], baseUrl: string): SEOIssue[] {
  const issues: SEOIssue[] = [];
  const homepage = normalizeUrl(baseUrl);

  // Check for orphan pages
  const orphanPages = pages.filter((p) => p.incomingLinks === 0 && p.url !== homepage);
  if (orphanPages.length > 0) {
    issues.push({
      id: "issue:orphan-pages",
      type: "content",
      severity: "medium",
      confidence: 100,
      problem: `${orphanPages.length} orphan pages detected`,
      evidence: orphanPages.map((p) => p.url),
      whyItMatters: "Orphan pages are difficult for users and search engines to discover",
      recommended: "Add internal links to these pages from relevant content",
      affectedEntity: orphanPages.map((p) => p.id).join(", "),
    });
  }

  // Check for missing titles
  const pagesWithoutTitle = pages.filter((p) => !p.title || p.title.trim() === "");
  if (pagesWithoutTitle.length > 0) {
    issues.push({
      id: "issue:missing-titles",
      type: "on-page",
      severity: "high",
      confidence: 100,
      problem: `${pagesWithoutTitle.length} pages missing title tags`,
      evidence: pagesWithoutTitle.map((p) => p.url),
      whyItMatters: "Title tags are crucial for SEO and search engine rankings",
      recommended: "Add descriptive title tags to all pages",
      affectedEntity: pagesWithoutTitle.map((p) => p.id).join(", "),
    });
  }

  // Check for missing meta descriptions
  const pagesWithoutMetaDesc = pages.filter(
    (p) => !p.metaDescription || p.metaDescription.trim() === ""
  );
  if (pagesWithoutMetaDesc.length > 0) {
    issues.push({
      id: "issue:missing-meta-descriptions",
      type: "on-page",
      severity: "medium",
      confidence: 100,
      problem: `${pagesWithoutMetaDesc.length} pages missing meta descriptions`,
      evidence: pagesWithoutMetaDesc.map((p) => p.url),
      whyItMatters: "Meta descriptions improve click-through rates from search results",
      recommended: "Add compelling meta descriptions to all pages",
      affectedEntity: pagesWithoutMetaDesc.map((p) => p.id).join(", "),
    });
  }

  // Check for missing H1
  const pagesWithoutH1 = pages.filter((p) => !p.h1 || p.h1.trim() === "");
  if (pagesWithoutH1.length > 0) {
    issues.push({
      id: "issue:missing-h1",
      type: "on-page",
      severity: "high",
      confidence: 100,
      problem: `${pagesWithoutH1.length} pages missing H1 tags`,
      evidence: pagesWithoutH1.map((p) => p.url),
      whyItMatters: "H1 tags help search engines understand page content hierarchy",
      recommended: "Add descriptive H1 tags to all pages",
      affectedEntity: pagesWithoutH1.map((p) => p.id).join(", "),
    });
  }

  // Check for non-indexable pages
  const nonIndexablePages = pages.filter((p) => !p.indexable);
  if (nonIndexablePages.length > 0) {
    issues.push({
      id: "issue:non-indexable-pages",
      type: "technical",
      severity: "low",
      confidence: 100,
      problem: `${nonIndexablePages.length} pages are set to noindex`,
      evidence: nonIndexablePages.map((p) => p.url),
      whyItMatters: "Non-indexable pages won't appear in search results",
      recommended: "Review if these pages should be indexed",
      affectedEntity: nonIndexablePages.map((p) => p.id).join(", "),
    });
  }

  // Check for weak internal linking
  const pagesWithWeakLinks = pages.filter((p) => p.internalLinks < 3);
  if (pagesWithWeakLinks.length > 0) {
    issues.push({
      id: "issue:weak-internal-linking",
      type: "on-page",
      severity: "low",
      confidence: 75,
      problem: `${pagesWithWeakLinks.length} pages have weak internal linking`,
      evidence: pagesWithWeakLinks.map((p) => `${p.url}: ${p.internalLinks} links`),
      whyItMatters: "Internal linking helps distribute page authority and improve navigation",
      recommended: "Add more relevant internal links to these pages",
      affectedEntity: pagesWithWeakLinks.map((p) => p.id).join(", "),
    });
  }

  return issues;
}

function calculateSEOScores(pages: PageAnalysis[], issues: SEOIssue[]): WebsiteScores {
  const scores: WebsiteScores = {
    seoHealth: 0,
    technicalSEO: 0,
    onPageSEO: 0,
    internalLinking: 0,
    contentCoverage: 0,
    topicAuthority: 0,
    architecture: 50, // Default score since we're not analyzing architecture
  };

  if (pages.length === 0) return scores;

  // Technical SEO score
  const technicalIssues = issues.filter((i) => i.type === "technical");
  const criticalTechnical = technicalIssues.filter((i) => i.severity === "high").length;
  scores.technicalSEO = Math.max(
    0,
    100 - criticalTechnical * 20 - technicalIssues.length * 5
  );

  // On-page SEO score
  const onPageIssues = issues.filter((i) => i.type === "on-page");
  const criticalOnPage = onPageIssues.filter((i) => i.severity === "high").length;
  scores.onPageSEO = Math.max(0, 100 - criticalOnPage * 15 - onPageIssues.length * 3);

  // Internal linking score
  const avgInternalLinks =
    pages.reduce((sum, p) => sum + p.internalLinks, 0) / pages.length;
  const avgIncomingLinks =
    pages.reduce((sum, p) => sum + p.incomingLinks, 0) / pages.length;
  scores.internalLinking = Math.min(100, avgInternalLinks * 10 + avgIncomingLinks * 15);

  // Content coverage (based on real page content depth)
  const pagesWithContent = pages.filter((p) => (p.wordCount || 0) >= 300).length;
  scores.contentCoverage = Math.min(100, (pagesWithContent / pages.length) * 100);

  // Topic authority (placeholder - would need content analysis)
  scores.topicAuthority = 50;

  // Overall SEO health
  scores.seoHealth = Math.round(
    scores.technicalSEO * 0.25 +
      scores.onPageSEO * 0.25 +
      scores.internalLinking * 0.2 +
      scores.contentCoverage * 0.15 +
      scores.topicAuthority * 0.15
  );

  return scores;
}

function scorePages(pages: PageAnalysis[], issues: SEOIssue[]) {
  for (const page of pages) {
    // On-page score: penalize issues affecting this page
    const pageIssues = issues.filter(
      (i) => i.affectedEntity.includes(page.id) || i.affectedEntity.includes(page.url)
    );
    const high = pageIssues.filter((i) => i.severity === "high").length;
    const medium = pageIssues.filter((i) => i.severity === "medium").length;
    const low = pageIssues.filter((i) => i.severity === "low").length;
    page.seoScore = Math.max(10, 100 - high * 20 - medium * 10 - low * 5);

    // Content score based on word count
    const words = page.wordCount || 0;
    page.contentScore = Math.min(100, Math.round((words / 1000) * 100));

    // Internal linking score
    page.internalLinkingScore = Math.min(
      100,
      page.internalLinks * 8 + page.incomingLinks * 10
    );
  }
}

function generateRecommendations(issues: SEOIssue[], pages: PageAnalysis[]): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Generate recommendations based on issues
  for (const issue of issues) {
    if (issue.severity === "high" || issue.severity === "medium") {
      recommendations.push({
        id: `rec:${issue.id}`,
        type: issue.type === "on-page" ? "content" : issue.type,
        what: `Fix: ${issue.problem}`,
        where: issue.affectedEntity,
        why: issue.whyItMatters,
        how: issue.recommended,
        priority: issue.severity === "high" ? "high" : "medium",
        effort: issue.type === "technical" ? "medium" : "low",
        confidence: issue.confidence,
        evidence: issue.evidence,
      });
    }
  }

  // Add specific recommendations for common issues
  const homepage = pages.find((p) => p.pageDepth === 0)?.url;
  const orphanPages = pages.filter((p) => p.incomingLinks === 0 && p.url !== homepage);
  if (orphanPages.length > 0) {
    recommendations.push({
      id: "rec:add-internal-links",
      type: "internal-link",
      what: "Add internal links to orphan pages",
      where: orphanPages.map((p) => p.url).join(", "),
      why: "Orphan pages are difficult to discover",
      how: "Add contextual links from relevant pages to these orphan pages",
      priority: "medium",
      effort: "low",
      confidence: 95,
      evidence: [`${orphanPages.length} orphan pages found`],
    });
  }

  return recommendations.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return (
      priorityOrder[a.priority as keyof typeof priorityOrder] -
      priorityOrder[b.priority as keyof typeof priorityOrder]
    );
  });
}
