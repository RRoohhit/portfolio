import type { Metadata } from "next";
import { SeoToolsPage } from "@/components/views/seo-tools/SeoToolsPage";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "Free SEO Tools: Audit, Schema Generator & SERP Preview",
  description:
    "Free SEO tools by Rohit Gupta: instant website SEO audit, JSON-LD schema generator, SERP meta preview, and AI content optimizer for business growth.",
  path: "/seo-tools",
  keywords: [
    "free SEO tools",
    "website SEO audit",
    "JSON-LD schema generator",
    "keyword density tracker",
    "SERP preview tool",
  ],
});

export default function SeoTools() {
  return (
    <>
      {renderJsonLd(
        breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "SEO Tools", path: "/seo-tools"/ },
        ]),
        "jsonld-seo-tools-breadcrumb"
      )}
      <div className="space-y-6 pt-24 lg:pt-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "SEO Tools" },
          ]}
        />
        <h1 className="sr-only">Free Technical SEO Tools: Audit, Schema Generator &amp; SERP Preview</h1>
        <SeoToolsPage />
      </div>
    </>
  );
}
