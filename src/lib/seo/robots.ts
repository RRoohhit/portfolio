import { fetchWithLimit, assertPublicUrl } from "./security";

export interface UserAgentGroup {
  userAgent: string;
  allow: string[];
  disallow: string[];
}

export interface RobotsIssue {
  type: "warning" | "error";
  message: string;
  severity: "low" | "medium" | "high";
}

export interface RobotsTxtResult {
  url: string;
  exists: boolean;
  content?: string;
  userAgentGroups: UserAgentGroup[];
  sitemapUrls: string[];
  crawlDelay?: number;
  issues: RobotsIssue[];
}

export interface ParsedRobots {
  userAgentGroups: UserAgentGroup[];
  sitemapUrls: string[];
  crawlDelay?: number;
  issues: RobotsIssue[];
}

export function parseRobotsContent(content: string): ParsedRobots {
  const lines = content.split(/\r?\n/).map((line) => line.trim());
  const userAgentGroups: UserAgentGroup[] = [];
  const sitemapUrls: string[] = [];
  const issues: RobotsIssue[] = [];

  let currentGroup: UserAgentGroup | null = null;
  let crawlDelay: number | undefined;

  for (const line of lines) {
    if (line.startsWith("#") || line === "") continue;

    const userAgentMatch = line.match(/^user-agent:\s*(.+)$/i);
    if (userAgentMatch) {
      if (currentGroup) userAgentGroups.push(currentGroup);
      currentGroup = {
        userAgent: userAgentMatch[1].trim(),
        allow: [],
        disallow: [],
      };
      continue;
    }

    const allowMatch = line.match(/^allow:\s*(.+)$/i);
    if (allowMatch && currentGroup) {
      currentGroup.allow.push(allowMatch[1].trim());
      continue;
    }

    const disallowMatch = line.match(/^disallow:\s*(.+)$/i);
    if (disallowMatch && currentGroup) {
      currentGroup.disallow.push(disallowMatch[1].trim());
      continue;
    }

    const crawlDelayMatch = line.match(/^crawl-delay:\s*(\d+\.?\d*)\s*(?:\.\s*(\d+))?$/i);
    if (crawlDelayMatch && currentGroup) {
      crawlDelay = parseFloat(crawlDelayMatch[1]);
      continue;
    }

    const sitemapMatch = line.match(/^sitemap:\s*(.+)$/i);
    if (sitemapMatch) {
      sitemapUrls.push(sitemapMatch[1].trim());
      continue;
    }
  }

  if (currentGroup) userAgentGroups.push(currentGroup);

  if (userAgentGroups.length === 0) {
    issues.push({
      type: "warning",
      message: "No user-agent groups found in robots.txt",
      severity: "low",
    });
  }

  for (const group of userAgentGroups) {
    if (group.userAgent === "*" && group.disallow.includes("/")) {
      issues.push({
        type: "error",
        message:
          "Wildcard user-agent disallows all paths (/), which may prevent search engine crawling",
        severity: "high",
      });
    }

    for (const allowPath of group.allow) {
      if (group.disallow.includes(allowPath)) {
        issues.push({
          type: "warning",
          message: `Conflicting rule: ${allowPath} is both allowed and disallowed for ${group.userAgent}`,
          severity: "medium",
        });
      }
    }
  }

  if (crawlDelay !== undefined && crawlDelay > 10) {
    issues.push({
      type: "warning",
      message: `Crawl delay of ${crawlDelay} seconds may slow down search engine crawling`,
      severity: "medium",
    });
  }

  if (sitemapUrls.length === 0) {
    issues.push({
      type: "warning",
      message: "No sitemap referenced in robots.txt",
      severity: "low",
    });
  }

  return { userAgentGroups, sitemapUrls, crawlDelay, issues };
}

/** Fetches and parses /robots.txt for a user-supplied website URL. */
export async function fetchRobotsTxt(rawUrl: string): Promise<RobotsTxtResult> {
  const target = assertPublicUrl(rawUrl);
  const robotsTxtUrl = `${target.origin}/robots.txt`;

  try {
    const res = await fetchWithLimit(robotsTxtUrl, {
      timeoutMs: 10000,
      maxBytes: 256 * 1024,
    });

    if (!res.ok) {
      return {
        url: robotsTxtUrl,
        exists: false,
        userAgentGroups: [],
        sitemapUrls: [],
        issues: [
          {
            type: "warning",
            message: `robots.txt not found (HTTP ${res.status})`,
            severity: "medium",
          },
        ],
      };
    }

    const parsed = parseRobotsContent(res.text);
    return {
      url: robotsTxtUrl,
      exists: true,
      content: res.text,
      ...parsed,
    };
  } catch (error) {
    return {
      url: robotsTxtUrl,
      exists: false,
      userAgentGroups: [],
      sitemapUrls: [],
      issues: [
        {
          type: "error",
          message: `Failed to fetch robots.txt: ${error instanceof Error ? error.message : "Unknown error"}`,
          severity: "medium",
        },
      ],
    };
  }
}

/**
 * Applies the robots.txt rules for a given user agent + path (RFC 9309).
 * Longest matching rule wins; on ties, Allow wins over Disallow.
 */
export function isAllowedByRobots(
  parsed: ParsedRobots,
  userAgent: string,
  path: string
): boolean {
  const groups = parsed.userAgentGroups;
  if (groups.length === 0) return true;

  const ua = userAgent.toLowerCase();
  let group = groups.find((g) => g.userAgent.toLowerCase() === ua);
  if (!group) group = groups.find((g) => g.userAgent === "*");
  if (!group) return true;

  const rules: Array<{ kind: "allow" | "disallow"; prefix: string }> = [
    ...group.disallow.map((p) => ({ kind: "disallow" as const, prefix: p })),
    ...group.allow.map((p) => ({ kind: "allow" as const, prefix: p })),
  ].filter((r) => r.prefix !== "");

  if (rules.length === 0) return true;

  const normalizedPath = path.split("?")[0] || "/";

  let bestMatch = -1;
  let best: { kind: "allow" | "disallow" } | null = null;

  for (const rule of rules) {
    let prefix = rule.prefix;
    if (!prefix.startsWith("/")) prefix = `/${prefix}`;

    const matched =
      normalizedPath === prefix
        ? prefix.length
        : normalizedPath.startsWith(prefix)
          ? prefix.length
          : -1;

    if (matched > bestMatch || (matched === bestMatch && bestMatch >= 0 && rule.kind === "allow")) {
      bestMatch = matched;
      best = rule;
    }
  }

  if (bestMatch < 0 || !best) return true;
  return best.kind === "allow";
}
