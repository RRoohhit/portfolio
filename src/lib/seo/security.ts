// Shared security & networking helpers for SEO analyzer API routes.

export const DEFAULT_USER_AGENT =
  "Mozilla/5.0 (compatible; SEO-Analyzer/1.0; +https://rohit-gupta-seo.dev)";

const PRIVATE_HOST_PATTERNS: RegExp[] = [
  /^localhost$/i,
  /^127\./,
  /^10\./,
  /^169\.254\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
  /^0\./,
  /^::1$/,
  /^[fF][cCdD][0-9a-fA-F]{2}:/, // IPv6 ULA
  /^[fF][eE][89aAbB]../, // IPv6 link-local
];

/** True when the hostname resolves to a private/internal address. */
export function isPrivateHostname(hostname: string): boolean {
  const clean = hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (PRIVATE_HOST_PATTERNS.some((pattern) => pattern.test(clean))) return true;

  // Reserved internal hostnames
  const reserved = [
    "metadata.google.internal",
    "metadata",
    "instance-data",
    "169.254.169.254",
  ];
  if (reserved.includes(clean)) return true;

  // Bare numeric IPs that are not valid dotted quad (e.g. "2130706433")
  if (/^\d+$/.test(clean)) return true;

  return false;
}

/** Parses + validates a user-supplied URL. Throws with a user-safe message. */
export function assertPublicUrl(rawUrl: string): URL {
  const trimmed = (rawUrl || "").trim();
  if (!trimmed) throw new Error("URL is required");

  let target: URL;
  try {
    target = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
  } catch {
    throw new Error("Invalid URL format");
  }

  if (!["http:", "https:"].includes(target.protocol)) {
    throw new Error("Only http/https URLs are supported");
  }

  const hostname = target.hostname.toLowerCase();
  if (isPrivateHostname(hostname)) {
    throw new Error("Fetching internal/private hosts is not allowed");
  }

  return target;
}

export interface LimitedFetchOptions {
  timeoutMs?: number;
  maxBytes?: number;
  headers?: Record<string, string>;
}

export interface LimitedFetchResult {
  ok: boolean;
  status: number;
  headers: Headers;
  text: string;
  /** Final URL after following redirects. */
  url: string;
}

/**
 * Fetches a URL with a hard timeout, manual redirect loop that re-validates
 * every hop against SSRF (private IP) rules, and a response body size cap.
 */
export async function fetchWithLimit(
  url: string | URL,
  options: LimitedFetchOptions = {}
): Promise<LimitedFetchResult> {
  const { timeoutMs = 15000, maxBytes = 3 * 1024 * 1024, headers = {} } = options;
  const target = typeof url === "string" ? new URL(url) : url;
  assertPublicUrl(target.toString());

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    let current = target.toString();
    let response: Response | undefined;

    // Manual redirect loop so every hop is validated against SSRF rules.
    for (let hop = 0; hop < 6; hop++) {
      const res = await fetch(current, {
        signal: controller.signal,
        redirect: "manual",
        headers: {
          "user-agent": DEFAULT_USER_AGENT,
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          ...headers,
        },
      });

      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get("location");
        if (!location) {
          response = res;
          break;
        }
        try {
          const next = new URL(location, current);
          assertPublicUrl(next.toString()); // throws if private/internal
          current = next.toString();
          // Drain the redirect body so the socket is reusable.
          if (res.body) await res.body.cancel();
        } catch {
          if (res.body) await res.body.cancel();
          throw new Error("Redirected to a disallowed URL");
        }
        continue;
      }

      response = res;
      break;
    }

    if (!response) throw new Error("Too many redirects");

    const contentLength = Number(response.headers.get("content-length") || 0);
    if (contentLength > maxBytes) {
      throw new Error(`Response too large (${contentLength} bytes exceeds ${maxBytes} byte limit)`);
    }

    let text = "";
    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8", { fatal: false });
      let received = 0;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        received += value.byteLength;
        if (received > maxBytes) {
          await reader.cancel();
          throw new Error(`Response exceeded ${maxBytes} byte limit`);
        }
        text += decoder.decode(value, { stream: true });
      }
      text += decoder.decode();
    }

    return {
      ok: response.ok,
      status: response.status,
      headers: response.headers,
      text,
      url: response.url || current,
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
