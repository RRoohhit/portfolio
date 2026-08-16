import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const geminiKey = process.env.GEMINI_API_KEY || "";
const ai = geminiKey
  ? new GoogleGenAI({
      apiKey: geminiKey,
      httpOptions: {
        headers: { "User-Agent": "aistudio-build" },
      },
    })
  : null;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { topic, targetKeyword, currentContent, industry } = body || {};

  const buildFallback = () => ({
      metaTitle: `${targetKeyword || "SEO Mastery"} | High Ranking Guide by Rohit Gupta`,
      metaDescription: `Comprehensive strategy and technical optimization for ${targetKeyword || "organic growth"}. Drive top SERP rankings with proven White Hat SEO methods.`,
      searchIntent: "Commercial / Informational High Intent",
      contentScore: 92,
      lsiKeywords: [
        `${targetKeyword || "SEO"} specialist`,
        "technical seo audit",
        "core web vitals optimization",
        "organic search traffic",
        "page speed optimization",
        "backlink building strategy",
        "schema markup generator",
      ],
      headingStructure: [
        { tag: "H1", text: `Complete Masterclass on ${targetKeyword || "SEO Growth"}` },
        { tag: "H2", text: "Technical Optimization & Speed Multipliers" },
        { tag: "H2", text: "Keyword Intent & Content Structuring" },
        { tag: "H3", text: "On-Page Schema & Entity Graph Alignment" },
        { tag: "H2", text: "Off-Page Link Velocity & Authority Building" },
      ],
      technicalFixes: [
        "Enable Next.js SSR / Static HTML rendering to minimize TTFB below 200ms.",
        "Implement JSON-LD Schema markup for Google Rich Snippets & AI Overviews.",
        "Optimize images using WebP/AVIF formats with explicit height/width to eliminate CLS.",
        "Defer non-critical third-party scripts and enable Brotli compression.",
      ],
      jsonLdSchema: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: targetKeyword || "Advanced SEO Guide",
          author: { "@type": "Person", name: "Rohit Gupta" },
          publisher: { "@type": "Organization", name: "Rohit Gupta Digital Labs" },
        },
        null,
        2
      ),
      actionableSummary:
        "Target this query with a 1,800+ word comprehensive technical article paired with clean WebP visuals, interactive code benchmarks, and structured JSON-LD schema.",
    });

  try {
    if (!targetKeyword && !topic) {
      return NextResponse.json(
        { error: "Target keyword or topic is required." },
        { status: 400 }
      );
    }

    if (!ai) {
      return NextResponse.json(
        { success: false, error: "GEMINI_API_KEY not configured.", fallback: buildFallback() },
        { status: 200 }
      );
    }

    const prompt = `You are a world-class Technical SEO Specialist and Content Strategist. Analyze the following SEO input and provide a high-yield optimization plan:
Target Keyword: ${targetKeyword || topic}
Topic/Industry: ${industry || "Digital Marketing / Web Development"}
Existing Content / Draft: ${currentContent || "None provided"}

Generate a detailed, actionable SEO optimization plan containing:
1. An irresistible, keyword-optimized Meta Title (under 60 chars).
2. A compelling Meta Description with a call to action (under 155 chars).
3. 6-8 LSI (Latent Semantic Indexing) & Long-tail Keywords to boost organic relevance.
4. Search Intent Analysis (Informational, Transactional, Commercial, Navigational).
5. Recommended Heading Hierarchy (1 H1, 3-4 H2s, H3s).
6. 4 Technical SEO & Core Web Vitals optimization recommendations for maximum speed and indexing.
7. A valid JSON-LD Schema snippet (e.g., Article, Service, or TechArticle schema).
8. Target Content Score (0-100) and rationale.`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-3.6-flash",
      contents: prompt,
      config: {
        temperature: 0.4,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            metaTitle: { type: Type.STRING },
            metaDescription: { type: Type.STRING },
            searchIntent: { type: Type.STRING },
            contentScore: { type: Type.NUMBER },
            lsiKeywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            headingStructure: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  tag: { type: Type.STRING },
                  text: { type: Type.STRING },
                },
              },
            },
            technicalFixes: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            jsonLdSchema: { type: Type.STRING },
            actionableSummary: { type: Type.STRING },
          },
          required: [
            "metaTitle",
            "metaDescription",
            "searchIntent",
            "contentScore",
            "lsiKeywords",
            "headingStructure",
            "technicalFixes",
            "jsonLdSchema",
            "actionableSummary",
          ],
        },
      },
    });

    const resultText = (response.text || "{}").trim();
    // Some models wrap JSON in markdown code fences — strip them defensively
    const cleaned = resultText.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
    const data = JSON.parse(cleaned);
    if (!data || typeof data !== "object") throw new Error("AI returned an invalid response");
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("AI SEO Optimization Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to generate AI SEO suggestions.",
        fallback: buildFallback(),
      },
      { status: 200 }
    );
  }
}