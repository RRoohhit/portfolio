import { NextRequest, NextResponse } from "next/server";
import { assertPublicUrl } from "../../../../lib/seo/security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const USER_AGENT = "Mozilla/5.0 (compatible; SEO-RedirectChecker/1.0; +https://rohit-gupta-seo.dev)";

export interface RedirectHop {
  hop: number;
  url: string;
  status: number;
  location: string;
  contentType: string;
  isRedirect: boolean;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const rawUrl: string = typeof body?.url === "string" ? body.url.trim() : "";

  if (!rawUrl) {
    return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 });
  }

  let target: URL;
  try {
    target = assertPublicUrl(rawUrl);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Invalid URL format" },
      { status: 400 }
    );
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  const chain: RedirectHop[] = [];
  let current = target.toString();
  let stopped = "";

  try {
    for (let hop = 0; hop < 10; hop++) {
      let res: Response;
      let location = "";
      let contentType = "";
      let isRedirect = false;

      try {
        res = await fetch(current, {
          signal: controller.signal,
          redirect: "manual",
          headers: {
            "user-agent": USER_AGENT,
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "accept-language": "en-US,en;q=0.9",
          },
        });
        const status = res.status;
        isRedirect = status >= 300 && status < 400;
        location = isRedirect ? (res.headers.get("location") || "") : "";
        contentType = res.headers.get("content-type") || "";
        if (res.body) await res.body.cancel();

        if (isRedirect && location) {
          const next = new URL(location, current);
          try {
            assertPublicUrl(next.toString());
          } catch {
            stopped = "Redirected to a disallowed/private URL";
            chain.push({ hop: hop + 1, url: current, status, location, contentType, isRedirect });
            return NextResponse.json({ success: true, requestedUrl: target.toString(), finalUrl: current, chain, stopped });
          }
          chain.push({ hop: hop + 1, url: current, status, location, contentType, isRedirect });
          current = next.toString();
          continue;
        }

        chain.push({ hop: hop + 1, url: current, status, location, contentType, isRedirect });
        break;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          throw new Error("Request timed out after 20s");
        }
        throw err;
      }
    }

    if (chain.length >= 10 && chain[chain.length - 1].isRedirect) {
      stopped = "Too many redirects (10 hop limit reached)";
    }

    return NextResponse.json({
      success: true,
      requestedUrl: target.toString(),
      finalUrl: current,
      chain,
      stopped,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: `Redirect check failed: ${message}` }, { status: 502 });
  } finally {
    clearTimeout(timer);
  }
}