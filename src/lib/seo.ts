import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/config/site";

export { SITE_URL, SITE_NAME, OG_IMAGE };

interface PageSeoOptions {
  title: string;
  description: string;
  /** Path must start with "/" e.g. "/services/seo/" */
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  noindex?: boolean;
  imageUrl?: string;
}

/**
 * Builds consistent, index-friendly metadata for every route.
 * - Always sets a trailing-slash canonical URL matching the new domain.
 * - Adds hreflang en + en-IN for Indian audience.
 * - Emits full OpenGraph + Twitter card.
 * - Passes googleBot-specific robot directives.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  noindex = false,
  imageUrl = OG_IMAGE,
}: PageSeoOptions): Metadata {
  // Normalize path: always keep a trailing slash to match trailingSlash:true behaviour in
  // next.config.ts (which 308-redirects /foo → /foo/). Root "/" stays as-is.
  const cleanPath = path === "/" ? "/" : (path.endsWith("/") ? path : `${path}/`);
  const canonicalUrl = new URL(cleanPath, SITE_URL).href;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-IN": canonicalUrl,
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title, type: "image/jpeg" }],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      site: "@rohitguptacodec",
      creator: "@rohitguptacodec",
    },
  };
}