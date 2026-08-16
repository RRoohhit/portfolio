import { NextRequest, NextResponse } from "next/server";
import { performRuleBasedAnalysis, AIIntelligenceRequest } from "../../../../lib/seo/aiIntelligence";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const body: AIIntelligenceRequest = await request.json();

    if (!body.pages || body.pages.length === 0) {
      return NextResponse.json(
        { error: "Pages data is required" },
        { status: 400 }
      );
    }

    // Use rule-based analysis (AI integration can be added later)
    const ruleBasedResult = performRuleBasedAnalysis(body);
    return NextResponse.json({
      success: true,
      ...ruleBasedResult,
      method: "rule-based",
    });
  } catch (error) {
    console.error("AI intelligence error:", error);
    return NextResponse.json(
      { error: "Failed to analyze content", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
