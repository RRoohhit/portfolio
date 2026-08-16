import { fetchWithLimit, assertPublicUrl } from "./security";

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}

export interface SitemapResult {
  urls: SitemapUrl[];
  totalUrls: number;
  sitemapUrl: string;
}

const COMMON_PATHS = [
  "/sitemap.xml",
  "/sitemap_index.xml",
  "/sitemap/sitemap.xml",
  "/sitemaps/sitemap.xml",
  "/wp-sitemap.xml",
  "/sitemap-index.xml",
];

/** Normalizes a URL for comparison (lowercase host, no trailing slash/hash). */
export function normalizeUrlForComparison(raw: string): string {
  try {
    const url = new URL(raw);
    url.hash = "";
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return url.toString().replace(/\/$/, "");
  } catch {
    return raw;
  }
}

/**
 * Discovers sitemap locations: checks robots.txt first, then common paths
 * (GET based, since many servers reject HEAD).
 */
export async function discoverSitemaps(baseUrl: string): Promise<string[]> {
  const sitemapUrls: string[] = [];
  const urlObj = assertPublicUrl(baseUrl);

  const robotsTxtUrl = `${urlObj.origin}/robots.txt`;
  try {
    const res = await fetchWithLimit(robotsTxtUrl, { timeoutMs: 8000, maxBytes: 256 * 1024 });
    if (res.ok) {
      const matches = res.text.match(/Sitemap:\s*(https?:\/\/[^\s]+)/gi) || [];
      for (const match of matches) {
        const sitemapUrl = match.replace(/Sitemap:\s*/i, "").trim();
        try {
          assertPublicUrl(sitemapUrl);
          if (sitemapUrl && !sitemapUrls.includes(sitemapUrl)) {
            sitemapUrls.push(sitemapUrl);
          }
        } catch {
          // Skip invalid sitemap references
        }
      }
    }
  } catch {
    // robots.txt unavailable; continue with common paths
  }

  if (sitemapUrls.length === 0) {
    for (const path of COMMON_PATHS) {
      const candidate = `${urlObj.origin}${path}`;
      try {
        const res = await fetchWithLimit(candidate, { timeoutMs: 8000, maxBytes: 512 * 1024 });
        if (res.ok) sitemapUrls.push(candidate);
      } catch {
        // Path doesn't exist or timed out; skip
      }
    }
  }

  return sitemapUrls;
}

/** Fetches and parses a sitemap (including sitemap indexes, recursively). */
export async function parseSitemap(sitemapUrl: string): Promise<SitemapResult> {
  assertPublicUrl(sitemapUrl);
  const res = await fetchWithLimit(sitemapUrl, { timeoutMs: 15000, maxBytes: 5 * 1024 * 1024 });

  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: HTTP ${res.status}`);
  }

  const content = res.text;

  if (content.includes("<sitemapindex")) {
    return parseSitemapIndex(content, sitemapUrl);
  }

  const urls = parseSitemapXML(content);
  return { urls, totalUrls: urls.length, sitemapUrl };
}

async function parseSitemapIndex(content: string, sitemapUrl: string): Promise<SitemapResult> {
  const urls: SitemapUrl[] = [];
  const sitemapIndexRegex = /<sitemap[^>]*>[\s\S]*?<\/sitemap>/gi;
  const errors: string[] = [];

  let match: RegExpExecArray | null;
  while ((match = sitemapIndexRegex.exec(content)) !== null) {
    const locMatch = match[0].match(/<loc>(.*?)<\/loc>/i);
    if (!locMatch) continue;
    const childSitemapUrl = locMatch[1].trim();
    try {
      const childResult = await parseSitemap(childSitemapUrl);
      urls.push(...childResult.urls);
    } catch (error) {
      errors.push(
        `Failed to parse child sitemap ${childSitemapUrl}: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  if (errors.length > 0) {
    console.warn(`[sitemap] ${sitemapUrl} index errors:`, errors.join(" | "));
  }

  return { urls, totalUrls: urls.length, sitemapUrl };
}

export function parseSitemapXML(content: string): SitemapUrl[] {
  const urls: SitemapUrl[] = [];
  const urlRegex = /<url[^>]*>[\s\S]*?<\/url>/gi;

  let match: RegExpExecArray | null;
  while ((match = urlRegex.exec(content)) !== null) {
    const urlBlock = match[0];

    const locMatch = urlBlock.match(/<loc>(.*?)<\/loc>/i);
    if (!locMatch) continue;

    const lastmodMatch = urlBlock.match(/<lastmod>(.*?)<\/lastmod>/i);
    const changefreqMatch = urlBlock.match(/<changefreq>(.*?)<\/changefreq>/i);
    const priorityMatch = urlBlock.match(/<priority>(.*?)<\/priority>/i);

    urls.push({
      loc: locMatch[1].trim(),
      lastmod: lastmodMatch ? lastmodMatch[1].trim() : undefined,
      changefreq: changefreqMatch ? changefreqMatch[1].trim() : undefined,
      priority: priorityMatch ? parseFloat(priorityMatch[1].trim()) : undefined,
    });
  }

  return urls;
}
