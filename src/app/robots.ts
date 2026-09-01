import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Default: allow full site, block internal API & temp dirs ──
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/temp-uploads/"],
      },
      // ── Google: full access including images & video ──
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/temp-uploads/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
      },
      // ── Google AI & Gemini: allow for AI Overviews & Gemini indexing ──
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Gemini",
        allow: "/",
      },
      // ── Microsoft Bing: full access including preview & rendering ──
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/temp-uploads/"],
      },
      {
        userAgent: "BingPreview",
        allow: "/",
      },
      {
        userAgent: "msnbot",
        allow: "/",
        disallow: ["/api/", "/temp-uploads/"],
      },
      {
        userAgent: "AdIdxBot",
        allow: "/",
        disallow: ["/api/", "/temp-uploads/"],
      },
      // ── OpenAI / ChatGPT bots ──
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // ── Perplexity AI ──
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // ── Anthropic / Claude ──
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      // ── Common Crawl (LLM training datasets) ──
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // ── Meta AI (Llama training & Meta AI search) ──
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      {
        userAgent: "Meta-ExternalFetcher",
        allow: "/",
      },
      // ── Apple Intelligence / Applebot ──
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // ── You.com AI search ──
      {
        userAgent: "YouBot",
        allow: "/",
      },
      // ── Cohere AI (Command R search) ──
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // ── Diffbot (knowledge graph & structured data AI) ──
      {
        userAgent: "Diffbot",
        allow: "/",
      },
      // ── ByteDance / Bytespider (TikTok AI, Doubao) ──
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      // ── Amazon Alexa / Amazonbot ──
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      // ── SEO tools (allow read access, block API) ──
      {
        userAgent: "AhrefsBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "SemrushBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "DotBot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/llms.txt`,
      `${SITE_URL}/llms-full.txt`,
    ],
    host: SITE_URL,
  };
}