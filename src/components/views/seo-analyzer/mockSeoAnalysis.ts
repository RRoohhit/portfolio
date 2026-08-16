import { WebsiteAnalysis, MindMapNode, MindMapEdge, MapMode } from "@/types/seo-analyzer";

// Rich Mock data for testing the SEO Analyzer UI & Mind Map
export const mockWebsiteAnalysis: WebsiteAnalysis = {
  project: {
    name: "Rohit Gupta Technical SEO & Web Platform",
    framework: "Next.js 16 (App Router)",
    version: "16.3.1",
    routes: [
      "/",
      "/services",
      "/services/technical-seo",
      "/services/web-development",
      "/services/local-seo",
      "/seo-tools",
      "/seo-analyzer",
      "/blog",
      "/blog/core-web-vitals-guide",
      "/blog/json-ld-schema-guide",
      "/blog/technical-seo-audit-checklist",
      "/contact",
    ],
    totalFiles: 64,
    totalComponents: 38,
  },
  pages: [
    {
      id: "page:/",
      type: "page",
      url: "/",
      title: "Rohit Gupta - Technical SEO Specialist & Full Stack Developer",
      metaDescription: "Expert Technical SEO Specialist ranking 200+ websites #1 on Google. Core Web Vitals, JSON-LD Schema, White-Hat SEO & Next.js engineering.",
      h1: "Technical SEO & Full Stack Engineering",
      indexable: true,
      internalLinks: 12,
      externalLinks: 4,
      incomingLinks: 0,
      pageDepth: 0,
      seoScore: 92,
      contentScore: 90,
      internalLinkingScore: 88,
      status: "strong",
      contentType: "landing",
    },
    {
      id: "page:/services",
      type: "page",
      url: "/services",
      title: "Technical SEO & Web Engineering Services",
      metaDescription: "Comprehensive Technical SEO audits, Core Web Vitals optimization, and custom Next.js development for businesses.",
      h1: "SEO & Web Development Services",
      indexable: true,
      internalLinks: 8,
      externalLinks: 2,
      incomingLinks: 6,
      pageDepth: 1,
      seoScore: 82,
      contentScore: 80,
      internalLinkingScore: 78,
      status: "healthy",
      contentType: "category",
    },
    {
      id: "page:/services/technical-seo",
      type: "page",
      url: "/services/technical-seo",
      title: "Technical SEO Specialist Services in Noida, Delhi NCR & India",
      metaDescription: "White-hat Technical SEO services: Crawlability, Indexability, Schema Markup, Log File Analysis & Site Speed Optimization.",
      h1: "Technical SEO Services",
      indexable: true,
      internalLinks: 7,
      externalLinks: 3,
      incomingLinks: 4,
      pageDepth: 2,
      topic: "Technical SEO",
      searchIntent: "commercial",
      primaryKeyword: "technical seo specialist",
      secondaryKeywords: ["technical seo audit", "site speed optimization", "crawlability audit"],
      seoScore: 71,
      contentScore: 72,
      internalLinkingScore: 65,
      status: "weak",
      contentType: "service",
    },
    {
      id: "page:/services/web-development",
      type: "page",
      url: "/services/web-development",
      title: "Full Stack Next.js & React Web Development",
      metaDescription: "Custom Next.js web application development built with modern typography, glassmorphism UI, and lightning fast performance.",
      h1: "Full Stack Web Development",
      indexable: true,
      internalLinks: 6,
      externalLinks: 1,
      incomingLinks: 3,
      pageDepth: 2,
      topic: "Web Development",
      searchIntent: "commercial",
      primaryKeyword: "nextjs developer india",
      seoScore: 85,
      contentScore: 84,
      internalLinkingScore: 80,
      status: "healthy",
      contentType: "service",
    },
    {
      id: "page:/services/local-seo",
      type: "page",
      url: "/services/local-seo",
      title: "Local SEO Specialist Noida, Delhi NCR & Ayodhya",
      metaDescription: "Rank #1 in Google Map Pack & Local Search results with Google Business Profile optimization & local citation building.",
      h1: "Local SEO Optimization Services",
      indexable: true,
      internalLinks: 3,
      externalLinks: 1,
      incomingLinks: 1,
      pageDepth: 2,
      topic: "Local SEO",
      searchIntent: "commercial",
      primaryKeyword: "local seo specialist noida",
      seoScore: 62,
      contentScore: 60,
      internalLinkingScore: 45,
      status: "weak",
      contentType: "service",
    },
    {
      id: "page:/seo-tools",
      type: "page",
      url: "/seo-tools",
      title: "Free Developer SEO Tools & Directives Suite 2026",
      metaDescription: "24+ production web crawler directives, live URL analyzer, keyword research generator, and schema generators.",
      h1: "Developer SEO Tools & Directives Suite",
      indexable: true,
      internalLinks: 14,
      externalLinks: 2,
      incomingLinks: 8,
      pageDepth: 1,
      seoScore: 94,
      contentScore: 92,
      internalLinkingScore: 90,
      status: "strong",
      contentType: "tool",
    },
    {
      id: "page:/seo-analyzer",
      type: "page",
      url: "/seo-analyzer",
      title: "Interactive Website SEO Analyzer & Visual Mind Map",
      metaDescription: "Crawl any site URL or upload source code ZIP to generate an interactive visual mind map highlighting technical bottlenecks.",
      h1: "AI SEO Mind Map & Architecture Analyzer",
      indexable: true,
      internalLinks: 10,
      externalLinks: 1,
      incomingLinks: 7,
      pageDepth: 1,
      seoScore: 96,
      contentScore: 95,
      internalLinkingScore: 92,
      status: "strong",
      contentType: "tool",
    },
    {
      id: "page:/blog",
      type: "page",
      url: "/blog",
      title: "Technical SEO & Full Stack Engineering Knowledge Base",
      metaDescription: "In-depth technical SEO articles, Core Web Vitals optimization playbooks, and Next.js performance guides.",
      h1: "Technical SEO & Web Engineering Blog",
      indexable: true,
      internalLinks: 15,
      externalLinks: 6,
      incomingLinks: 9,
      pageDepth: 1,
      seoScore: 88,
      contentScore: 89,
      internalLinkingScore: 84,
      status: "strong",
      contentType: "blog",
    },
    {
      id: "page:/blog/core-web-vitals-guide",
      type: "page",
      url: "/blog/core-web-vitals-guide",
      title: "How to Pass Core Web Vitals in Next.js 16 (LCP, INP, CLS)",
      metaDescription: "Step-by-step guide to achieving 100/100 Lighthouse performance score with Next.js image optimization and font subsetting.",
      h1: "Passing Core Web Vitals in Next.js",
      indexable: true,
      internalLinks: 6,
      externalLinks: 4,
      incomingLinks: 5,
      pageDepth: 2,
      topic: "Core Web Vitals",
      searchIntent: "informational",
      primaryKeyword: "core web vitals nextjs",
      seoScore: 89,
      contentScore: 92,
      internalLinkingScore: 85,
      status: "strong",
      contentType: "guide",
    },
    {
      id: "page:/blog/json-ld-schema-guide",
      type: "page",
      url: "/blog/json-ld-schema-guide",
      title: "JSON-LD Structured Data Schema Guide for Rich Snippets",
      metaDescription: "Master Article, LocalBusiness, FAQPage and Product JSON-LD schema markup for Google Search rich results.",
      h1: "JSON-LD Structured Data Guide",
      indexable: true,
      internalLinks: 5,
      externalLinks: 3,
      incomingLinks: 4,
      pageDepth: 2,
      topic: "Schema Markup",
      searchIntent: "informational",
      primaryKeyword: "json ld schema guide",
      seoScore: 86,
      contentScore: 88,
      internalLinkingScore: 82,
      status: "strong",
      contentType: "guide",
    },
    {
      id: "page:/blog/technical-seo-audit-checklist",
      type: "page",
      url: "/blog/technical-seo-audit-checklist",
      title: "Complete Technical SEO Audit Checklist for 2026",
      metaDescription: "45-point technical SEO audit checklist covering crawl budget, indexability, canonicalization, and XML sitemaps.",
      h1: "Technical SEO Audit Checklist",
      indexable: true,
      internalLinks: 4,
      externalLinks: 2,
      incomingLinks: 0,
      pageDepth: 2,
      topic: "Technical SEO",
      searchIntent: "informational",
      primaryKeyword: "technical seo checklist",
      seoScore: 54,
      contentScore: 60,
      internalLinkingScore: 35,
      status: "critical",
      contentType: "guide",
    },
    {
      id: "page:/contact",
      type: "page",
      url: "/contact",
      title: "Hire Technical SEO Specialist & Web Developer | Rohit Gupta",
      metaDescription: "Schedule a 1-on-1 technical SEO audit or hire Rohit Gupta for full stack web development projects.",
      h1: "Get In Touch with Rohit Gupta",
      indexable: true,
      internalLinks: 4,
      externalLinks: 1,
      incomingLinks: 8,
      pageDepth: 1,
      searchIntent: "navigational",
      seoScore: 88,
      contentScore: 85,
      internalLinkingScore: 90,
      status: "strong",
      contentType: "contact",
    },
  ],

  files: [
    {
      id: "file:src/components/layout/Navbar.tsx",
      type: "file",
      path: "src/components/layout/Navbar.tsx",
      fileType: "tsx",
      lines: 320,
      imports: 10,
      importedBy: 1,
      complexity: "medium",
      usedBy: "Root Layout",
      architectureStatus: "healthy",
    },
    {
      id: "file:src/components/layout/Footer.tsx",
      type: "file",
      path: "src/components/layout/Footer.tsx",
      fileType: "tsx",
      lines: 240,
      imports: 6,
      importedBy: 1,
      complexity: "low",
      usedBy: "Root Layout",
      architectureStatus: "healthy",
    },
    {
      id: "file:src/components/views/seo-analyzer/SeoAnalyzerPage.tsx",
      type: "file",
      path: "src/components/views/seo-analyzer/SeoAnalyzerPage.tsx",
      fileType: "tsx",
      lines: 1510,
      imports: 18,
      importedBy: 1,
      complexity: "high",
      usedBy: "/seo-analyzer Route",
      architectureStatus: "warning",
    },
    {
      id: "file:src/components/views/seo-tools/SeoToolsPage.tsx",
      type: "file",
      path: "src/components/views/seo-tools/SeoToolsPage.tsx",
      fileType: "tsx",
      lines: 210,
      imports: 14,
      importedBy: 1,
      complexity: "low",
      usedBy: "/seo-tools Route",
      architectureStatus: "healthy",
    },
  ],

  folders: [
    {
      id: "folder:src/components/views/seo-analyzer",
      type: "folder",
      path: "src/components/views/seo-analyzer",
      files: 3,
      reusableComponents: 2,
      pageSpecificComponents: 1,
      utilities: 1,
      architectureScore: 78,
    },
    {
      id: "folder:src/components/views/seo-tools",
      type: "folder",
      path: "src/components/views/seo-tools",
      files: 16,
      reusableComponents: 14,
      pageSpecificComponents: 2,
      utilities: 3,
      architectureScore: 92,
    },
    {
      id: "folder:src/components/layout",
      type: "folder",
      path: "src/components/layout",
      files: 4,
      reusableComponents: 4,
      pageSpecificComponents: 0,
      utilities: 0,
      architectureScore: 95,
    },
  ],

  routes: [
    {
      id: "route:/",
      path: "/",
      type: "static",
      children: ["/services", "/seo-tools", "/seo-analyzer", "/blog", "/contact"],
    },
    {
      id: "route:/services",
      path: "/services",
      type: "static",
      parent: "/",
      children: ["/services/technical-seo", "/services/web-development", "/services/local-seo"],
    },
    {
      id: "route:/blog",
      path: "/blog",
      type: "static",
      parent: "/",
      children: [
        "/blog/core-web-vitals-guide",
        "/blog/json-ld-schema-guide",
        "/blog/technical-seo-audit-checklist",
      ],
    },
  ],

  internalLinks: [
    {
      id: "link:1",
      from: "page:/",
      to: "page:/services",
      status: "existing",
      anchorText: "Our Services",
    },
    {
      id: "link:2",
      from: "page:/",
      to: "page:/services/technical-seo",
      status: "existing",
      anchorText: "Technical SEO",
    },
    {
      id: "link:3",
      from: "page:/",
      to: "page:/seo-tools",
      status: "existing",
      anchorText: "SEO Tools",
    },
    {
      id: "link:4",
      from: "page:/services",
      to: "page:/services/technical-seo",
      status: "existing",
      anchorText: "Technical SEO Audit",
    },
    {
      id: "link:5",
      from: "page:/services/technical-seo",
      to: "page:/blog/technical-seo-audit-checklist",
      status: "recommended",
      anchorText: "Technical SEO Checklist",
      priority: "high",
    },
    {
      id: "link:6",
      from: "page:/services/local-seo",
      to: "page:/contact",
      status: "recommended",
      anchorText: "Hire Local SEO Specialist",
      priority: "high",
    },
    {
      id: "link:7",
      from: "page:/blog/core-web-vitals-guide",
      to: "page:/services/web-development",
      status: "existing",
      anchorText: "Next.js Web Development",
    },
    {
      id: "link:8",
      from: "page:/blog/technical-seo-audit-checklist",
      to: "page:/services/technical-seo",
      status: "missing",
      anchorText: "Hire Technical SEO Specialist",
      priority: "high",
    },
  ],

  dependencies: [],

  seoIssues: [
    {
      id: "issue:1",
      type: "internal-link",
      severity: "high",
      confidence: 96,
      problem: "Orphan Article Route: /blog/technical-seo-audit-checklist has 0 incoming internal links!",
      evidence: [
        "Incoming internal links count: 0",
        "Page depth is 2 but not linked from /blog or /services/technical-seo",
      ],
      whyItMatters: "Google web crawlers struggle to discover and pass PageRank to unlinked orphan pages, resulting in poor indexation & rank loss.",
      recommended: "Add contextual internal links from /blog index page and /services/technical-seo landing page with anchor text 'Technical SEO Checklist'.",
      affectedEntity: "page:/blog/technical-seo-audit-checklist",
    },
    {
      id: "issue:2",
      type: "on-page",
      severity: "medium",
      confidence: 88,
      problem: "Low Internal Link Density on /services/local-seo",
      evidence: [
        "Only 1 incoming internal link",
        "Missing call-to-action link to /contact page",
      ],
      whyItMatters: "Commercial landing pages require strong internal link flow to convert visitors and pass topical authority.",
      recommended: "Link to /services/local-seo from homepage footer and services overview page.",
      affectedEntity: "page:/services/local-seo",
    },
    {
      id: "issue:3",
      type: "technical",
      severity: "medium",
      confidence: 90,
      problem: "Missing BreadcrumbList JSON-LD Schema on Service Deep Pages",
      evidence: [
        "No BreadcrumbList schema found on /services/technical-seo",
        "Google Search SERP snippet lacks breadcrumb path hierarchy",
      ],
      whyItMatters: "Structured breadcrumbs improve SERP click-through rates by up to 15% and clarify site hierarchy for search engines.",
      recommended: "Inject BreadcrumbList JSON-LD schema into the <head> of all service subpages.",
      affectedEntity: "page:/services/technical-seo",
    },
  ],

  architectureIssues: [
    {
      id: "arch:1",
      severity: "medium",
      confidence: 85,
      problem: "Large Single-File Component in SeoAnalyzerPage.tsx (1500+ lines)",
      evidence: [
        "File size exceeds 1500 lines of code",
        "Contains node layout math, ReactFlow canvas, and drawer modals in single file",
      ],
      whyItMatters: "Heavy components increase bundle parsing cost and lower maintainability for future features.",
      recommended: "Split mind map canvas, node details drawer, and action plan modal into separate modular component files.",
      affectedEntity: "file:src/components/views/seo-analyzer/SeoAnalyzerPage.tsx",
    },
  ],

  topics: [
    {
      id: "topic:technical-seo",
      name: "Technical SEO",
      type: "main",
      coverage: 85,
      existingPages: 4,
      recommendedPages: 2,
      status: "strong",
    },
    {
      id: "topic:core-web-vitals",
      name: "Core Web Vitals",
      type: "sub",
      coverage: 75,
      existingPages: 2,
      recommendedPages: 2,
      status: "healthy",
    },
    {
      id: "topic:local-seo",
      name: "Local SEO",
      type: "sub",
      coverage: 40,
      existingPages: 1,
      recommendedPages: 3,
      status: "weak",
    },
    {
      id: "topic:ai-search-aeo",
      name: "AI Search & AEO",
      type: "main",
      coverage: 15,
      existingPages: 0,
      recommendedPages: 4,
      status: "missing",
    },
  ],

  clusters: [
    {
      id: "cluster:technical-seo",
      pillar: "Technical SEO",
      pillarUrl: "/services/technical-seo",
      clusters: [
        {
          id: "cluster:1",
          title: "Technical SEO Audit Checklist",
          url: "/blog/technical-seo-audit-checklist",
          status: "existing",
          searchIntent: "informational",
          primaryKeyword: "technical seo checklist",
          priority: "high",
        },
        {
          id: "cluster:2",
          title: "Core Web Vitals Next.js Guide",
          url: "/blog/core-web-vitals-guide",
          status: "existing",
          searchIntent: "informational",
          primaryKeyword: "core web vitals nextjs",
          priority: "high",
        },
        {
          id: "cluster:3",
          title: "Log File Analysis for Web Crawlers",
          suggestedUrl: "/blog/log-file-analysis-guide",
          status: "missing",
          searchIntent: "informational",
          primaryKeyword: "log file analysis seo",
          priority: "high",
        },
      ],
      coverage: 67,
    },
    {
      id: "cluster:local-seo",
      pillar: "Local SEO",
      pillarUrl: "/services/local-seo",
      clusters: [
        {
          id: "cluster:4",
          title: "Google Business Profile Rank Blueprint",
          suggestedUrl: "/blog/google-business-profile-guide",
          status: "missing",
          searchIntent: "informational",
          primaryKeyword: "google business profile optimization",
          priority: "high",
        },
        {
          id: "cluster:5",
          title: "Local SEO Citation Building Guide",
          suggestedUrl: "/blog/local-seo-citations-guide",
          status: "missing",
          searchIntent: "informational",
          primaryKeyword: "local citations india",
          priority: "medium",
        },
      ],
      coverage: 0,
    },
  ],

  contentGaps: [
    {
      id: "gap:1",
      topic: "AI Search Engine Optimization (AEO / GEO)",
      currentCoverage: 15,
      coverage: "weak",
      recommendedPillar: "AI Search Optimization Guide for ChatGPT & Perplexity",
      recommendedClusterPages: [
        {
          id: "gap:1:1",
          title: "How to Rank in ChatGPT Search & Perplexity AI",
          suggestedUrl: "/blog/chatgpt-perplexity-aeo-guide",
          status: "missing",
          searchIntent: "informational",
          primaryKeyword: "aeo search optimization",
          priority: "high",
        },
        {
          id: "gap:1:2",
          title: "LLM Citation Optimization Blueprint",
          suggestedUrl: "/blog/llm-citation-seo",
          status: "missing",
          searchIntent: "informational",
          primaryKeyword: "llm search engine optimization",
          priority: "high",
        },
      ],
      priority: "high",
    },
  ],

  keywordOpportunities: [
    {
      id: "kw:1",
      keyword: "technical seo specialist noida",
      opportunity: "high",
      recommendedContentType: "service",
      suggestedUrl: "/services/technical-seo",
      relatedTerms: ["seo specialist Delhi NCR", "technical seo consultant India", "crawlability audit"],
    },
    {
      id: "kw:2",
      keyword: "how to pass INP score nextjs",
      opportunity: "high",
      recommendedContentType: "guide",
      suggestedUrl: "/blog/core-web-vitals-guide",
      relatedTerms: ["nextjs performance tuning", "interaction to next paint", "cls fix"],
    },
  ],

  recommendations: [
    {
      id: "rec:1",
      type: "internal-link",
      what: "Fix Orphan Route: Link /blog/technical-seo-audit-checklist from /services/technical-seo",
      where: "page:/services/technical-seo",
      why: "The technical audit checklist guide has 0 incoming internal links, hurting indexation and rank potential.",
      how: "Add a contextual link block 'Complete Technical SEO Audit Checklist' inside the services page.",
      priority: "high",
      effort: "low",
      confidence: 98,
      evidence: ["0 incoming internal links", "Page depth is 2"],
    },
    {
      id: "rec:2",
      type: "content",
      what: "Publish AI Search (AEO/GEO) Optimization Guide",
      where: "/blog/chatgpt-perplexity-aeo-guide",
      why: "Zero existing content for AI search queries despite high emerging search interest in 2026.",
      how: "Author a comprehensive 2,500-word guide on AEO, structured data for LLMs, and entity grounding.",
      priority: "high",
      effort: "medium",
      confidence: 90,
      evidence: ["High search interest in ChatGPT/Perplexity SEO", "Content gap coverage is 15%"],
    },
    {
      id: "rec:3",
      type: "technical",
      what: "Inject BreadcrumbList & WebSite JSON-LD Schema",
      where: "page:/services/technical-seo",
      why: "Rich snippets are missing for service routes on Google SERPs.",
      how: "Add valid JSON-LD schema script block in page head using Next.js Metadata API.",
      priority: "high",
      effort: "low",
      confidence: 94,
      evidence: ["Missing BreadcrumbList schema", "SERP snippet lacks hierarchy"],
    },
  ],

  scores: {
    seoHealth: 81,
    technicalSEO: 88,
    onPageSEO: 82,
    internalLinking: 72,
    contentCoverage: 68,
    topicAuthority: 65,
    architecture: 85,
  },
};

// Helper function to generate mind map nodes from analysis
export function generateMindMapNodes(analysis: WebsiteAnalysis, mode: MapMode): MindMapNode[] {
  const nodes: MindMapNode[] = [];

  // Handle code analysis mode (no pages, only files/folders)
  const isCodeAnalysisMode = !analysis.pages || analysis.pages.length === 0;

  // Central website node
  nodes.push({
    id: "website",
    type: "website",
    label: analysis.project.name,
    status: "healthy",
    data: isCodeAnalysisMode 
      ? analysis.files[0] || { path: analysis.project.name, type: "file" }
      : analysis.pages[0],
    position: { x: 400, y: 300 },
  });

  if (mode === "seo-mind-map" || mode === "website-architecture" || mode === "internal-linking") {
    // Add pages (if available)
    if (analysis.pages && analysis.pages.length > 0) {
      analysis.pages.forEach((page, index) => {
        const angle = (index / analysis.pages.length) * 2 * Math.PI;
        const radius = 220;
        nodes.push({
          id: page.id,
          type: page.type === "page" && page.contentType === "blog" ? "blog" : "page",
          label: page.url,
          status: page.status,
          data: page,
          position: {
            x: 400 + Math.cos(angle) * radius,
            y: 300 + Math.sin(angle) * radius,
          },
        });
      });
    }

    // Add topics (only if available)
    if (analysis.topics && analysis.topics.length > 0) {
      analysis.topics.forEach((topic, index) => {
        const angle = (index / analysis.topics.length) * 2 * Math.PI + Math.PI / 4;
        const radius = 160;
        nodes.push({
          id: topic.id,
          type: "topic",
          label: topic.name,
          status: topic.status,
          data: topic,
          position: {
            x: 400 + Math.cos(angle) * radius,
            y: 300 + Math.sin(angle) * radius,
          },
        });
      });
    }

    // If no pages, show files as alternative
    if (isCodeAnalysisMode && analysis.files && analysis.files.length > 0) {
      analysis.files.slice(0, 10).forEach((file, index) => {
        const angle = (index / Math.min(analysis.files.length, 10)) * 2 * Math.PI;
        const radius = 220;
        nodes.push({
          id: file.id,
          type: "file",
          label: file.path.split("/").pop() || file.path,
          status: file.architectureStatus === "healthy" ? "healthy" : "weak",
          data: file,
          position: {
            x: 400 + Math.cos(angle) * radius,
            y: 300 + Math.sin(angle) * radius,
          },
        });
      });
    }
  }

  if (mode === "code-architecture") {
    // Add folders (only if available)
    if (analysis.folders && analysis.folders.length > 0) {
      analysis.folders.forEach((folder, index) => {
        const angle = (index / analysis.folders.length) * 2 * Math.PI;
        const radius = 180;
        nodes.push({
          id: folder.id,
          type: "folder",
          label: folder.path,
          status: folder.architectureScore > 70 ? "healthy" : "weak",
          data: folder,
          position: {
            x: 400 + Math.cos(angle) * radius,
            y: 300 + Math.sin(angle) * radius,
          },
        });
      });
    }

    // Add files (only if available)
    if (analysis.files && analysis.files.length > 0) {
      analysis.files.forEach((file, index) => {
        const angle = (index / analysis.files.length) * 2 * Math.PI + Math.PI / 2;
        const radius = 260;
        nodes.push({
          id: file.id,
          type: "file",
          label: file.path.split("/").pop() || file.path,
          status: file.architectureStatus === "healthy" ? "healthy" : "weak",
          data: file,
          position: {
            x: 400 + Math.cos(angle) * radius,
            y: 300 + Math.sin(angle) * radius,
          },
        });
      });
    }
  }

  if (mode === "topic-clusters") {
    // Add cluster nodes (only if available)
    if (analysis.clusters && analysis.clusters.length > 0) {
      analysis.clusters.forEach((cluster, index) => {
        const angle = (index / analysis.clusters.length) * 2 * Math.PI;
        const radius = 220;
        nodes.push({
          id: cluster.id,
          type: "pillar",
          label: cluster.pillar,
          status: "healthy",
          data: analysis.pages.find(p => p.url === cluster.pillarUrl) || analysis.pages[0],
          position: {
            x: 400 + Math.cos(angle) * radius,
            y: 300 + Math.sin(angle) * radius,
          },
        });

        // Add cluster pages
        cluster.clusters.forEach((clusterPage, cIndex) => {
          const cAngle = angle + (cIndex / cluster.clusters.length) * 0.5;
          const cRadius = 140;
          nodes.push({
            id: clusterPage.id,
            type: clusterPage.status === "existing" ? "blog" : "recommended",
            label: clusterPage.title,
            status: clusterPage.status === "missing" ? "missing" : "healthy",
            data: clusterPage,
            position: {
              x: 400 + Math.cos(cAngle) * cRadius,
              y: 300 + Math.sin(cAngle) * cRadius,
            },
          });
        });
      });
    }
  }

  // Add issues for all modes (only if available)
  if (analysis.seoIssues && analysis.seoIssues.length > 0) {
    analysis.seoIssues.forEach((issue, index) => {
      const angle = (index / analysis.seoIssues.length) * 2 * Math.PI + Math.PI;
      const radius = 300;
      nodes.push({
        id: issue.id,
        type: "issue",
        label: issue.problem.length > 25 ? issue.problem.substring(0, 25) + "..." : issue.problem,
        status: issue.severity === "high" ? "critical" : "weak",
        data: issue,
        position: {
          x: 400 + Math.cos(angle) * radius,
          y: 300 + Math.sin(angle) * radius,
        },
      });
    });
  }

  return nodes;
}

// Helper function to generate mind map edges from analysis
export function generateMindMapEdges(analysis: WebsiteAnalysis, mode: MapMode): MindMapEdge[] {
  const edges: MindMapEdge[] = [];

  if (!analysis.pages || analysis.pages.length === 0) {
    return edges;
  }

  if (mode === "seo-mind-map" || mode === "website-architecture" || mode === "internal-linking") {
    // Connect website to pages
    analysis.pages.forEach((page) => {
      edges.push({
        id: `edge-website-${page.id}`,
        source: "website",
        target: page.id,
        type: "existing",
      });
    });

    // Add internal links (only if available)
    if (analysis.internalLinks && analysis.internalLinks.length > 0) {
      analysis.internalLinks.forEach((link) => {
        edges.push({
          id: link.id,
          source: link.from,
          target: link.to,
          type: link.status === "missing" ? "recommended" : link.status as "existing" | "broken" | "recommended" | "problem",
          label: link.anchorText,
          animated: link.status === "recommended" || link.status === "missing",
        });
      });
    }
  }

  if (mode === "code-architecture") {
    // Connect folders to files (only if available)
    if (analysis.files && analysis.files.length > 0) {
      analysis.files.forEach((file) => {
        const folderPath = file.path.split("/").slice(0, -1).join("/");
        const folderId = folderPath ? `folder:${folderPath}` : "";
        if (!folderId) return;
        edges.push({
          id: `edge-${folderPath}-${file.id}`,
          source: folderId,
          target: file.id,
          type: "existing",
        });
      });
    }
  }

  if (mode === "topic-clusters") {
    // Connect pillars to cluster pages (only if available)
    if (analysis.clusters && analysis.clusters.length > 0) {
      analysis.clusters.forEach((cluster) => {
        cluster.clusters.forEach((clusterPage) => {
          edges.push({
            id: `edge-${cluster.id}-${clusterPage.id}`,
            source: cluster.id,
            target: clusterPage.id,
            type: clusterPage.status === "existing" ? "existing" : "recommended",
            animated: clusterPage.status === "recommended",
          });
        });
      });
    }
  }

  // Add problem edges (only if available)
  if (analysis.architectureIssues && analysis.architectureIssues.length > 0) {
    analysis.architectureIssues.forEach((issue) => {
      edges.push({
        id: `edge-problem-${issue.id}`,
        source: "website",
        target: issue.affectedEntity,
        type: "problem",
        animated: true,
      });
    });
  }

  return edges;
}
