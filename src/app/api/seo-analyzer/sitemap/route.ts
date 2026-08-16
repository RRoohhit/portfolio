import { NextRequest, NextResponse } from "next/server";
import { discoverSitemaps, parseSitemap } from "../../../../lib/seo/sitemap";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { url } = body || {};

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    // Try to find sitemap at common locations + robots.txt references
    const sitemapUrls = await discoverSitemaps(url);

    if (sitemapUrls.length === 0) {
      return NextResponse.json({
        success: false,
        error: "No sitemap found at common locations",
        searchedLocations: [
          `${url}/sitemap.xml`,
          `${url}/sitemap_index.xml`,
          `${url}/sitemap/sitemap.xml`,
          `${url}/robots.txt`,
        ],
      });
    }

    // Parse all discovered sitemaps
    const allUrls: Array<{ loc: string; lastmod?: string; changefreq?: string; priority?: number }> = [];
    const errors: string[] = [];

    for (const sitemapUrl of sitemapUrls) {
      try {
        const result = await parseSitemap(sitemapUrl);
        allUrls.push(...result.urls);
      } catch (error) {
        errors.push(
          `Failed to parse ${sitemapUrl}: ${error instanceof Error ? error.message : "Unknown error"}`
        );
      }
    }

    // Remove duplicates (case-insensitive comparison)
    const seen = new Map<string, (typeof allUrls)[number]>();
    for (const entry of allUrls) {
      const key = entry.loc.toLowerCase();
      if (!seen.has(key)) seen.set(key, entry);
    }
    const uniqueUrls = Array.from(seen.values());

    return NextResponse.json({
      success: uniqueUrls.length > 0,
      sitemaps: sitemapUrls,
      urls: uniqueUrls,
      totalUrls: uniqueUrls.length,
      errors: errors.length > 0 ? errors : undefined,
      error: uniqueUrls.length === 0 ? "Sitemap found but no URLs could be parsed" : undefined,
    });
  } catch (error) {
    console.error("Sitemap parsing error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to parse sitemap" },
      { status: 400 }
    );
  }
}
