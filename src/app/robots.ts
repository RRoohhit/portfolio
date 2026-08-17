import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Default: allow full site, block internal API & temp dirs ──
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/temp-uploads/", "/_next/", "/static/"],
      },
      // ── Google: full access including images ──
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/temp-uploads/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      // ── Bing ──
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/temp-uploads/"],
      },
      // ── AI / LLM crawlers: allow for brand visibility ──
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      // ── SEO tools ──
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
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}