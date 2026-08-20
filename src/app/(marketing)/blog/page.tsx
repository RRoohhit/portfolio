import type { Metadata } from "next";
import { BlogView } from "@/components/views/blog/BlogView";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Blog & Technical Hiring Guides | Rohit Gupta",
  description:
    "Read actionable SEO articles and hiring guides on technical SEO, Core Web Vitals, white-hat link building, and Next.js development by Rohit Gupta.",
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
          { name: "Blog", path: "/blog"/ },
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
