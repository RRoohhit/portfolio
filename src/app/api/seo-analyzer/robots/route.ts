import { NextRequest, NextResponse } from "next/server";
import { fetchRobotsTxt } from "../../../../lib/seo/robots";

export const runtime = "nodejs";
export const maxDuration = 15;

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

    const result = await fetchRobotsTxt(url);

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error("Robots.txt parsing error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to parse robots.txt" },
      { status: error instanceof Error ? 400 : 500 }
    );
  }
}
