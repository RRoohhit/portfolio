import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "../data/blogPosts";
import { CASE_STUDIES } from "../data/portfolioData";
import { SITE_URL } from "@/config/site";

// Semver-style date stamps so Google sees meaningful lastModified changes
const CORE_DATE = new Date("2025-06-01T00:00:00Z");
const SERVICES_DATE = new Date("2025-07-01T00:00:00Z");
const BLOG_DATE = new Date("2025-08-01T00:00:00Z");
const TODAY = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Core pages ─────────────────────────────────────────────────────────────
  const pages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: TODAY,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/rohit-gupta/`,
      lastModified: CORE_DATE,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/contact/`,
      lastModified: CORE_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // ── Services ───────────────────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/services/`, priority: 0.9 },
    { url: `${SITE_URL}/services/seo/`, priority: 0.9 },
    { url: `${SITE_URL}/services/technical-seo/`, priority: 0.88 },
    { url: `${SITE_URL}/services/local-seo/`, priority: 0.88 },
    { url: `${SITE_URL}/services/international-seo/`, priority: 0.88 },
    { url: `${SITE_URL}/services/digital-marketing/`, priority: 0.88 },
    { url: `${SITE_URL}/services/web-development/`, priority: 0.88 },
    { url: `${SITE_URL}/services/nextjs-development/`, priority: 0.85 },
  ].map((s) => ({
    ...s,
    lastModified: SERVICES_DATE,
    changeFrequency: "monthly" as const,
  }));

  // ── Resource / Tool pages ──────────────────────────────────────────────────
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog/`, priority: 0.92 },
    { url: `${SITE_URL}/case-studies/`, priority: 0.9 },
    { url: `${SITE_URL}/projects/`, priority: 0.82 },
    { url: `${SITE_URL}/seo-tools/`, priority: 0.82 },
    { url: `${SITE_URL}/ai-lab/`, priority: 0.8 },
    { url: `${SITE_URL}/seo-analyzer/`, priority: 0.8 },
  ].map((r) => ({
    ...r,
    lastModified: BLOG_DATE,
    changeFrequency: "weekly" as const,
  }));

  // ── Case Studies (dynamic) ────────────────────────────────────────────────
  const caseStudyUrls: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.id}/`,
    lastModified: SERVICES_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── Blog Posts (dynamic) ──────────────────────────────────────────────────
  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "weekly" as const,
    priority: 0.82,
  }));

  return [...pages, ...servicePages, ...resourcePages, ...caseStudyUrls, ...blogUrls];
}