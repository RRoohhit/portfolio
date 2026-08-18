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
    { url: `${SITE_URL}/services/on-page-seo/`, priority: 0.88 },
    { url: `${SITE_URL}/services/off-page-seo/`, priority: 0.88 },
    { url: `${SITE_URL}/services/content-seo/`, priority: 0.88 },
    { url: `${SITE_URL}/services/local-seo/`, priority: 0.88 },
    { url: `${SITE_URL}/services/google-business-profile-seo/`, priority: 0.9 },
    { url: `${SITE_URL}/services/ecommerce-seo/`, priority: 0.88 },
    { url: `${SITE_URL}/services/international-seo/`, priority: 0.88 },
    { url: `${SITE_URL}/services/ai-search-optimization/`, priority: 0.88 },
    { url: `${SITE_URL}/services/white-hat-seo/`, priority: 0.85 },
    { url: `${SITE_URL}/services/digital-marketing/`, priority: 0.88 },
    { url: `${SITE_URL}/services/google-ads/`, priority: 0.88 },
    { url: `${SITE_URL}/services/social-media-marketing/`, priority: 0.85 },
    { url: `${SITE_URL}/services/web-development/`, priority: 0.88 },
    { url: `${SITE_URL}/services/react-development/`, priority: 0.85 },
    { url: `${SITE_URL}/services/nextjs-development/`, priority: 0.85 },
  ].map((s) => ({
    ...s,
    lastModified: TODAY,
    changeFrequency: "monthly" as const,
  }));

  // ── Location Landing Pages ──────────────────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/seo-expert-noida/`, priority: 0.92 },
    { url: `${SITE_URL}/local-seo-noida/`, priority: 0.88 },
    { url: `${SITE_URL}/google-business-profile-seo-noida/`, priority: 0.9 },
    { url: `${SITE_URL}/seo-expert-delhi/`, priority: 0.9 },
    { url: `${SITE_URL}/seo-expert-gurgaon/`, priority: 0.88 },
    { url: `${SITE_URL}/seo-expert-ghaziabad/`, priority: 0.88 },
    { url: `${SITE_URL}/seo-expert-ayodhya/`, priority: 0.88 },
  ].map((l) => ({
    ...l,
    lastModified: TODAY,
    changeFrequency: "monthly" as const,
  }));

  // ── Resource / Tool / High-Intent pages ────────────────────────────────────
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/seo-audit/`, priority: 0.95 },
    { url: `${SITE_URL}/testimonials/`, priority: 0.88 },
    { url: `${SITE_URL}/blog/`, priority: 0.92 },
    { url: `${SITE_URL}/case-studies/`, priority: 0.9 },
    { url: `${SITE_URL}/projects/`, priority: 0.82 },
    { url: `${SITE_URL}/seo-tools/`, priority: 0.82 },
    { url: `${SITE_URL}/ai-lab/`, priority: 0.8 },
    { url: `${SITE_URL}/seo-analyzer/`, priority: 0.8 },
  ].map((r) => ({
    ...r,
    lastModified: TODAY,
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

  return [...pages, ...servicePages, ...locationPages, ...resourcePages, ...caseStudyUrls, ...blogUrls];
}