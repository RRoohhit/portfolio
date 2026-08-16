import type { ContentType, SearchIntent } from "../../types/seo-analyzer";

export interface AIIntelligenceRequest {
  pages: Array<{
    url: string;
    title?: string;
    content?: string;
    headings?: string[];
  }>;
  businessContext?: string;
  industry?: string;
}

export interface Topic {
  id: string;
  name: string;
  type: "main" | "sub" | "cluster";
  coverage: number;
  existingPages: number;
  recommendedPages: number;
  relatedKeywords: string[];
}

export interface RecommendedContent {
  title: string;
  suggestedUrl: string;
  contentType: ContentType;
  searchIntent: "informational" | "commercial" | "transactional";
  primaryKeyword: string;
  priority: "low" | "medium" | "high";
}

export interface ContentGap {
  id: string;
  topic: string;
  currentCoverage: number;
  coverage: "weak" | "moderate" | "strong";
  recommendedContent: RecommendedContent[];
  priority: "low" | "medium" | "high";
}

export interface KeywordOpportunity {
  id: string;
  keyword: string;
  searchVolume?: number;
  difficulty?: number;
  opportunity: "low" | "medium" | "high";
  recommendedContentType: ContentType;
  suggestedUrl?: string;
  relatedTerms: string[];
}

export interface SearchIntentResult {
  url: string;
  intent: SearchIntent;
  confidence: number;
  primaryKeyword?: string;
}

export interface AIIntelligenceResponse {
  topics: Topic[];
  contentGaps: ContentGap[];
  keywordOpportunities: KeywordOpportunity[];
  searchIntents: SearchIntentResult[];
}

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "up", "about", "into", "over", "after",
  "your", "you", "our", "this", "that", "with", "how", "what", "why",
  "best", "top", "guide", "complete", "ultimate", "using",
]);

const GENERIC_SEGMENTS = new Set([
  "index", "home", "default", "html", "aspx", "php", "jsp", "page",
  "main", "web", "site", "www", "blog", "news", "docs", "documentation",
  "about", "contact", "faq", "help", "support", "privacy", "terms",
  "legal", "policy", "login", "signin", "register", "signup", "search",
  "sitemap", "feed", "api", "admin", "download", "downloads", "media",
  "assets", "static", "content", "section", "category", "tag", "tags",
  "shop", "store", "cart", "checkout", "account", "user", "users",
]);

/** Extracts clean path segments from a page URL (protocol/host excluded). */
export function urlPathParts(rawUrl: string): string[] {
  try {
    return new URL(rawUrl)
      .pathname.split("/")
      .filter(Boolean)
      .map((part) => part.replace(/\.(html?|aspx?|php|jsp)$/i, ""))
      .map((part) => part.replace(/[-_]/g, " "))
      .map((part) => part.replace(/\d+/g, "").trim())
      .filter((part) => part.length > 2 && !GENERIC_SEGMENTS.has(part.toLowerCase()));
  } catch {
    return [];
  }
}

function titleKeywords(title?: string): string[] {
  if (!title) return [];
  return title
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3 && !STOP_WORDS.has(word));
}

export function performRuleBasedAnalysis(body: AIIntelligenceRequest): AIIntelligenceResponse {
  const topics: Topic[] = [];
  const contentGaps: ContentGap[] = [];
  const keywordOpportunities: KeywordOpportunity[] = [];
  const searchIntents: SearchIntentResult[] = [];

  const topicMap = new Map<string, { count: number; pages: string[]; keywords: Set<string> }>();

  for (const page of body.pages) {
    const urlParts = urlPathParts(page.url);

    for (const part of urlParts) {
      const topicName = part.charAt(0).toUpperCase() + part.slice(1);
      if (!topicMap.has(topicName)) {
        topicMap.set(topicName, { count: 0, pages: [], keywords: new Set() });
      }
      const topic = topicMap.get(topicName)!;
      topic.count++;
      topic.pages.push(page.url);

      if (page.title) {
        titleKeywords(page.title).forEach((word) => topic.keywords.add(word));
      }
      if (page.headings) {
        page.headings.forEach((heading) => {
          titleKeywords(heading).forEach((word) => topic.keywords.add(word));
        });
      }
    }
  }

  let topicIndex = 0;
  for (const [name, data] of topicMap.entries()) {
    if (data.count >= 1) {
      topics.push({
        id: `topic:${topicIndex++}`,
        name,
        type: "main",
        coverage: Math.min(100, data.count * 20),
        existingPages: data.count,
        recommendedPages: Math.max(0, 5 - data.count),
        relatedKeywords: Array.from(data.keywords).slice(0, 5),
      });
    }
  }

  let gapIndex = 0;
  for (const topic of topics) {
    if (topic.coverage < 60) {
      const recommendedContent: RecommendedContent[] = [];
      const contentTypes: Array<{ type: ContentType; intent: "informational" | "commercial" }> = [
        { type: "guide", intent: "informational" },
        { type: "tutorial", intent: "informational" },
        { type: "blog", intent: "informational" },
        { type: "service", intent: "commercial" },
      ];

      contentTypes.forEach(({ type, intent }, i) => {
        recommendedContent.push({
          title: `${topic.name} ${type.charAt(0).toUpperCase() + type.slice(1)}`,
          suggestedUrl: `/${topic.name.toLowerCase().replace(/\s+/g, "-")}-${type}`,
          contentType: type,
          searchIntent: intent,
          primaryKeyword: topic.name.toLowerCase(),
          priority: i === 0 ? "high" : "medium",
        });
      });

      contentGaps.push({
        id: `gap:${gapIndex++}`,
        topic: topic.name,
        currentCoverage: topic.coverage,
        coverage: topic.coverage < 40 ? "weak" : "moderate",
        recommendedContent,
        priority: topic.coverage < 40 ? "high" : "medium",
      });
    }
  }

  let keywordIndex = 0;
  for (const topic of topics) {
    for (const keyword of topic.relatedKeywords) {
      keywordOpportunities.push({
        id: `keyword:${keywordIndex++}`,
        keyword,
        opportunity: "medium",
        recommendedContentType: "blog",
        suggestedUrl: `/${keyword.replace(/\s+/g, "-")}`,
        relatedTerms: [topic.name],
      });
    }
  }

  for (const page of body.pages) {
    let intent: SearchIntent = "informational";
    let confidence = 70;

    const urlLower = page.url.toLowerCase();
    if (/(\/service|\/services|\/pricing|\/product|\/packages|\/plans)/.test(urlLower)) {
      intent = "commercial";
      confidence = 85;
    } else if (/(\/contact|\/hire|\/quote|\/book|\/buy|\/order|\/checkout)/.test(urlLower)) {
      intent = "transactional";
      confidence = 90;
    } else if (urlLower === "/" || /\/home\/?$/.test(urlLower)) {
      intent = "navigational";
      confidence = 95;
    } else if (/(\/blog|\/guide|\/tutorial|\/news|\/article|\/faq)/.test(urlLower)) {
      intent = "informational";
      confidence = 85;
    }

    searchIntents.push({
      url: page.url,
      intent,
      confidence,
      primaryKeyword: extractPrimaryKeyword(page.url, page.title),
    });
  }

  return { topics, contentGaps, keywordOpportunities, searchIntents };
}

export function extractPrimaryKeyword(url: string, title?: string): string {
  const parts = urlPathParts(url);
  if (parts.length > 0) {
    return parts[parts.length - 1].toLowerCase();
  }
  if (title) {
    const words = titleKeywords(title);
    return words.slice(0, 3).join(" ");
  }
  return "";
}
