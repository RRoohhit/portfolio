import type { Metadata } from "next";
import { BlogView } from "@/components/views/blog/BlogView";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Blog & Hiring Guides: On-Page, Off-Page, Backlinks, WordPress & Shopify",
  description:
    "In-depth SEO articles and hiring guides: on-page & off-page SEO, black hat vs white hat experts, backlink building, digital marketing, WordPress and Shopify developers - written by a technical SEO specialist in India.",
  path: "/blog",
  keywords: [
    "SEO blog",
    "how to hire SEO expert India",
    "hire SEO specialist",
    "hire black hat SEO expert",
    "white hat SEO expert",
    "on page SEO expert",
    "off page SEO expert",
    "digital marketing expert India",
    "social media expert",
    "WordPress developer hiring",
    "Shopify developer hiring",
    "WordPress vs Shopify",
    "Core Web Vitals guide",
    "JSON-LD schema tutorial",
    "technical SEO articles",
    "local SEO guide",
    "Google Maps ranking",
    "AI search optimization",
    "AEO and GEO",
    "keyword research guide",
    "low competition keywords",
    "SEO services cost India",
    "SEO pricing India",
    "link building guide",
    "white hat link building",
    "technical SEO audit",
    "SEO checklist 2026",
  ],
});

export default function Blog() {
  return (
    <>
      {renderJsonLd(
        breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
        "jsonld-blog-breadcrumb"
      )}
      <div className="space-y-6 pt-24 lg:pt-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog" },
          ]}
        />
        <BlogView />
      </div>
    </>
  );
}