import { NextRequest, NextResponse } from "next/server";
import { analyzePage } from "../../../../lib/seo/onPageAnalyzer";
import { assertPublicUrl } from "../../../../lib/seo/security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const rawUrl: string = typeof body?.url === "string" ? body.url.trim() : "";

  if (!rawUrl) {
    return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 });
  }

  try {
    assertPublicUrl(rawUrl);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Invalid URL format" },
      { status: 400 }
    );
  }

  try {
    const result = await analyzePage(rawUrl);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown fetch error";
    return NextResponse.json({ success: false, error: `Failed to fetch URL: ${message}` }, { status: 502 });
  }
}
