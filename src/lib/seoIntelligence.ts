import { PageAnalysis, SEOIssue, InternalLink, Recommendation, Topic, TopicCluster } from "../types/seo-analyzer";
import { urlPathParts } from "./seo/aiIntelligence";

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "up", "about", "into", "over", "after",
  "your", "you", "our", "this", "that", "how", "what", "why", "are",
  "was", "can", "will", "all", "new", "web", "page", "site",
]);

export function detectCannibalization(pages: PageAnalysis[]): SEOIssue[] {
  const issues: SEOIssue[] = [];

  // Group pages by primary keywords/topics
  const keywordGroups = new Map<string, PageAnalysis[]>();

  for (const page of pages) {
    const keywords = extractKeywords(page);
    for (const keyword of keywords) {
      if (!keywordGroups.has(keyword)) {
        keywordGroups.set(keyword, []);
      }
      keywordGroups.get(keyword)!.push(page);
    }
  }

  // Find potential cannibalization (multiple pages targeting same keyword)
  for (const [keyword, relatedPages] of keywordGroups.entries()) {
    if (relatedPages.length > 1) {
      // Check if pages have similar search intent
      const intents = new Set(relatedPages.map((p) => p.searchIntent).filter(Boolean));

      if (intents.size === 1 || intents.size === 0) {
        // Same or unclear intent - potential cannibalization
        issues.push({
          id: `cannibalization-${keyword.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-${relatedPages.length}`,
          type: "content",
          severity: "medium",
          confidence: 75,
          problem: `Potential keyword cannibalization for "${keyword}"`,
          evidence: relatedPages.map((p) => `- ${p.url} (intent: ${p.searchIntent || "unknown"})`),
          whyItMatters: "Multiple pages targeting the same keyword can confuse search engines and dilute ranking potential",
          recommended: "Consider consolidating pages, differentiating content intent, or using canonical tags",
          affectedEntity: relatedPages.map((p) => p.id).join(", "),
        });
      }
    }
  }

  return issues;
}

/** Shared keyword overlap used to find related pages. */
function keywordOverlap(a: string[], b: string[]): number {
  if (a.length === 0 || b.length === 0) return 0;
  const setB = new Set(b);
  const shared = a.filter((k) => setB.has(k)).length;
  return shared / Math.min(a.length, b.length);
}

export function generateInternalLinkRecommendations(
  pages: PageAnalysis[],
  existingLinks: InternalLink[]
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Create a map of existing links for quick lookup
  const existingLinkMap = new Map<string, Set<string>>();
  for (const link of existingLinks) {
    if (!existingLinkMap.has(link.from)) {
      existingLinkMap.set(link.from, new Set());
    }
    existingLinkMap.get(link.from)!.add(link.to);
  }

  // Pre-compute keywords per page once
  const pageKeywords = new Map<string, string[]>();
  for (const page of pages) {
    pageKeywords.set(page.id, extractKeywords(page));
  }

  const homepage = pages.find((p) => p.pageDepth === 0)?.url;

  // Find orphan pages and recommend links
  const orphanPages = pages.filter((p) => p.incomingLinks === 0 && p.url !== homepage);
  for (const orphan of orphanPages) {
    const orphanKeywords = pageKeywords.get(orphan.id) || [];

    // Find relevant pages to link from (shared keywords / topic overlap)
    const potentialSources = pages
      .map((p) => ({
        page: p,
        overlap:
          p.id !== orphan.id && p.url !== orphan.url
            ? keywordOverlap(orphanKeywords, pageKeywords.get(p.id) || [])
            : 0,
      }))
      .filter((x) => x.overlap > 0)
      .sort((a, b) => b.overlap - a.overlap);

    const source = potentialSources[0]?.page;
    if (source) {
      recommendations.push({
        id: `rec-link-orphan-${orphan.id}`,
        type: "internal-link",
        what: `Add internal link from ${source.url} to ${orphan.url}`,
        where: source.url,
        why: `${orphan.url} is an orphan page with no incoming links`,
        how: `Add a contextual link with descriptive anchor text pointing to ${orphan.url}`,
        priority: "high",
        effort: "low",
        confidence: 90,
        evidence: [`Orphan page: ${orphan.url}`, `Potential source: ${source.url}`],
      });
    }
  }

  // Find pages with weak internal linking
  const weakLinkPages = pages.filter((p) => p.internalLinks < 3 && p.url !== homepage);
  for (const page of weakLinkPages) {
    const currentKeywords = pageKeywords.get(page.id) || [];

    // Find related pages to link to
    const relatedPages = pages
      .map((p) => ({
        page: p,
        overlap:
          p.id !== page.id && p.url !== page.url
            ? keywordOverlap(currentKeywords, pageKeywords.get(p.id) || [])
            : 0,
      }))
      .filter((x) => x.overlap > 0)
      .sort((a, b) => b.overlap - a.overlap);

    const target = relatedPages[0]?.page;
    if (target) {
      recommendations.push({
        id: `rec-link-weak-${page.id}`,
        type: "internal-link",
        what: `Add internal link from ${page.url} to ${target.url}`,
        where: page.url,
        why: `${page.url} has weak internal linking (${page.internalLinks} links)`,
        how: `Add a contextual link pointing to ${target.url} to improve navigation and authority distribution`,
        priority: "medium",
        effort: "low",
        confidence: 75,
        evidence: [`Weak linking: ${page.internalLinks} links`, `Related target: ${target.url}`],
      });
    }
  }

  return recommendations;
}

export function extractKeywords(page: PageAnalysis): string[] {
  const keywords: Set<string> = new Set();

  // Extract from URL path only (protocol + host excluded)
  urlPathParts(page.url).forEach((part) => {
    keywords.add(part.toLowerCase());
  });

  // Extract from title
  if (page.title) {
    page.title
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length > 3 && !isStopWord(word))
      .forEach((word) => keywords.add(word));
  }

  // Extract from primary keyword
  if (page.primaryKeyword) {
    keywords.add(page.primaryKeyword.toLowerCase());
  }

  // Extract from secondary keywords
  if (page.secondaryKeywords) {
    page.secondaryKeywords.forEach((kw) => {
      keywords.add(kw.toLowerCase());
    });
  }

  return Array.from(keywords);
}

function isStopWord(word: string): boolean {
  return STOP_WORDS.has(word);
}

export function generateTopicClusters(topics: Topic[], pages: PageAnalysis[]): TopicCluster[] {
  const clusters: TopicCluster[] = [];

  const mainTopics = topics.filter((t) => t.type === "main");
  const pageKeywords = new Map<string, string[]>();
  for (const page of pages) {
    pageKeywords.set(page.id, extractKeywords(page));
  }

  for (const mainTopic of mainTopics) {
    const mainTerms = mainTopic.name.toLowerCase().split(/\s+/).filter((w) => w.length > 2);

    // Sub-topics: other topics sharing at least one significant term
    const relatedSubtopics = topics.filter(
      (t) => t.id !== mainTopic.id && t.name.toLowerCase() !== mainTopic.name.toLowerCase()
    );

    // Pages related to this topic via keyword overlap
    const relatedPages = pages.filter((p) => {
      const keywords = pageKeywords.get(p.id) || [];
      return mainTerms.some((term) => keywords.includes(term));
    });

    const pillarPage = relatedPages.find((p) => p.pageDepth === 0) || relatedPages[0];

    clusters.push({
      id: `cluster-${mainTopic.id}`,
      pillar: mainTopic.name,
      pillarUrl: pillarPage?.url,
      clusters: relatedSubtopics.slice(0, 5).map((sub) => {
        const subTerms = sub.name.toLowerCase().split(/\s+/).filter((w) => w.length > 2);
        const matchingPage = pages.find((p) => {
          const keywords = pageKeywords.get(p.id) || [];
          return subTerms.some((term) => keywords.includes(term));
        });
        return {
          id: sub.id,
          title: sub.name,
          url: matchingPage?.url,
          suggestedUrl: matchingPage
            ? undefined
            : `/${sub.name.toLowerCase().replace(/\s+/g, "-")}`,
          status: matchingPage ? "existing" : "recommended",
          searchIntent: "informational",
          primaryKeyword: sub.name.toLowerCase(),
          priority: "medium",
        };
      }),
      coverage: mainTopic.coverage,
    });
  }

  return clusters;
}
