import { fetchWithLimit, assertPublicUrl } from "./security";
import { fetchRobotsTxt, isAllowedByRobots, ParsedRobots } from "./robots";

export interface CrawlOptions {
  url: string;
  maxPages?: number;
  followLinks?: boolean;
  respectRobotsTxt?: boolean;
}

export interface CrawlResult {
  url: string;
  status: number;
  title?: string;
  metaDescription?: string;
  h1?: string;
  canonical?: string;
  indexable: boolean;
  wordCount?: number;
  internalLinks: string[];
  externalLinks: string[];
  headings: {
    h1: string[];
    h2: string[];
    h3: string[];
  };
  error?: string;
}

const CRAWL_USER_AGENT = "Googlebot/2.1 (+http://www.google.com/bot.html)";

export function normalizeUrl(raw: string): string {
  try {
    const url = new URL(raw);
    url.hash = "";
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return url.toString();
  } catch {
    return raw;
  }
}

export function isSameDomain(url1: string, url2: string): boolean {
  try {
    return new URL(url1).hostname === new URL(url2).hostname;
  } catch {
    return false;
  }
}

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();
}

function metaContent(html: string, name: string): string | undefined {
  const re = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]*content=["']([^"']*)["']`,
    "i"
  );
  const reReverse = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]*(?:name|property)=["']${name}["']`,
    "i"
  );
  const m = html.match(re) || html.match(reReverse);
  return m ? m[1].trim() : undefined;
}

function extractHeadings(html: string): { h1: string[]; h2: string[]; h3: string[] } {
  const extract = (tag: string): string[] => {
    const out: string[] = [];
    const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null) {
      const text = stripTags(m[1]);
      if (text) out.push(text);
    }
    return out;
  };
  return { h1: extract("h1"), h2: extract("h2"), h3: extract("h3") };
}

function extractLinks(html: string, baseUrl: string): { internal: string[]; external: string[] } {
  const internal: string[] = [];
  const external: string[] = [];
  const linkRegex = /<a\b[^>]*href=["']([^"']*)["'][^>]*>/gi;
  let m: RegExpExecArray | null;

  while ((m = linkRegex.exec(html)) !== null) {
    const href = m[1].trim();
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) continue;
    try {
      const absoluteUrl = new URL(href, baseUrl).href;
      if (isSameDomain(absoluteUrl, baseUrl)) {
        internal.push(normalizeUrl(absoluteUrl));
      } else {
        external.push(absoluteUrl);
      }
    } catch {
      // Invalid URL, skip
    }
  }

  return { internal: [...new Set(internal)], external: [...new Set(external)] };
}

async function crawlPage(url: string, robotsRules: ParsedRobots | null): Promise<CrawlResult> {
  const res = await fetchWithLimit(url, {
    timeoutMs: 10000,
    maxBytes: 3 * 1024 * 1024,
    headers: { "user-agent": CRAWL_USER_AGENT },
  });

  if (!res.ok) {
    return {
      url,
      status: res.status,
      indexable: false,
      internalLinks: [],
      externalLinks: [],
      headings: { h1: [], h2: [], h3: [] },
    };
  }

  const html = res.text;

  // Robots meta directive overrides robots.txt for indexing
  const robotsMeta = metaContent(html, "robots") || "";
  const indexable = !/noindex/i.test(robotsMeta);

  const headings = extractHeadings(html);
  const bodyText = stripTags(
    html.replace(/<body[^>]*>([\s\S]*?)<\/body>/i, "$1")
  );
  const wordCount = bodyText ? bodyText.split(/\s+/).filter(Boolean).length : 0;

  const { internal, external } = extractLinks(html, url);
  const isDisallowed =
    robotsRules !== null && !isAllowedByRobots(robotsRules, "Googlebot", new URL(url).pathname);

  return {
    url,
    status: res.status,
    title: extractTitle(html) || undefined,
    metaDescription: metaContent(html, "description"),
    h1: headings.h1[0],
    canonical: extractCanonical(html),
    indexable,
    wordCount,
    internalLinks: isDisallowed ? [] : internal,
    externalLinks: external,
    headings,
  };
}

function extractTitle(html: string): string {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? m[1].trim() : "";
}

function extractCanonical(html: string): string | undefined {
  const m = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  if (m) return m[1];
  const reverse = html.match(/<link\b[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
  return reverse ? reverse[1] : undefined;
}

export async function crawlWebsite(options: CrawlOptions): Promise<CrawlResult[]> {
  const results: CrawlResult[] = [];
  const requestedMax = Number(options.maxPages);
  const maxPages = Math.min(
    Math.max(Number.isFinite(requestedMax) ? Math.floor(requestedMax) : 50, 1),
    100
  );
  const visited = new Set<string>();

  const baseUrl = assertPublicUrl(options.url).toString();
  const queue: string[] = [normalizeUrl(baseUrl)];

  // Fetch robots.txt once when requested
  let robotsRules: ParsedRobots | null = null;
  if (options.respectRobotsTxt) {
    try {
      const robots = await fetchRobotsTxt(baseUrl);
      if (robots.exists) robotsRules = robots;
    } catch {
      robotsRules = null;
    }
  }

  while (queue.length > 0 && results.length < maxPages) {
    const url = queue.shift()!;
    if (visited.has(url)) continue;
    visited.add(url);

    try {
      // Respect robots.txt for uncrawled URLs
      if (robotsRules && !isAllowedByRobots(robotsRules, "Googlebot", new URL(url).pathname)) {
        results.push({
          url,
          status: 403,
          indexable: false,
          internalLinks: [],
          externalLinks: [],
          headings: { h1: [], h2: [], h3: [] },
          error: "Blocked by robots.txt",
        });
        continue;
      }

      const result = await crawlPage(url, robotsRules);
      results.push(result);

      if (options.followLinks && result.status >= 200 && result.status < 300) {
        for (const link of result.internalLinks) {
          if (!visited.has(link) && isSameDomain(link, baseUrl)) {
            queue.push(link);
          }
        }
      }
    } catch (error) {
      results.push({
        url,
        status: 0,
        indexable: false,
        internalLinks: [],
        externalLinks: [],
        headings: { h1: [], h2: [], h3: [] },
        error: error instanceof Error ? error.message : "Failed to crawl page",
      });
    }
  }

  return results;
}
