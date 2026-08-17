import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "../data/blogPosts";
import { CASE_STUDIES } from "../data/portfolioData";
import { SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const pages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/rohit-gupta/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/seo/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/technical-seo/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/local-seo/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/international-seo/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/digital-marketing/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/web-development/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/nextjs-development/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/case-studies/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/seo-tools/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ai-lab/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/seo-analyzer/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact/`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const caseStudyUrls: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.id}/`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...pages, ...caseStudyUrls, ...blogUrls];
}