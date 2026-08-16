import { NextRequest, NextResponse } from "next/server";
import { crawlWebsite } from "../../../../lib/seo/crawler";

export const runtime = "nodejs";
export const maxDuration = 60; // 60 seconds max for crawling

interface CrawlOptions {
  url: string;
  maxPages?: number;
  followLinks?: boolean;
  respectRobotsTxt?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const options: CrawlOptions = await request.json();

    if (!options.url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    const results = await crawlWebsite({
      url: options.url,
      maxPages: options.maxPages || 50,
      followLinks: options.followLinks !== false,
      respectRobotsTxt: options.respectRobotsTxt !== false,
    });

    return NextResponse.json({
      success: true,
      results,
      summary: {
        totalCrawled: results.length,
        successful: results.filter((r) => r.status >= 200 && r.status < 300).length,
        failed: results.filter((r) => r.status >= 400 || r.status === 0).length,
      },
    });
  } catch (error) {
    console.error("Crawl error:", error);
    return NextResponse.json(
      { error: "Failed to crawl website", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
