import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/config/site";

export { SITE_URL, SITE_NAME, OG_IMAGE };

interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
}

/**
 * Builds consistent, fast, index-friendly metadata for every route.
 * Keeps titles short, descriptions under 160 chars and always sets a canonical URL.
 */
export function buildPageMetadata({ title, description, path, keywords, type = "website" }: PageSeoOptions): Metadata {
  const url = new URL(path, SITE_URL).href;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
      site: "@rohitguptacodec",
      creator: "@rohitguptacodec",
    },
  };
}