import type { Metadata } from "next";
import { AiLabView } from "@/components/views/ai-lab/AiLabView";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "AI SEO Optimizer & Keyword Density Tool | Rohit Gupta",
  description:
    "Free AI-powered SEO optimizer and keyword density tracker that writes rank-ready titles, meta descriptions and JSON-LD in seconds for SEO specialists in India.",
  path: "/ai-lab",
  keywords: [
    "AI SEO optimizer",
    "keyword density tracker",
    "AI content optimizer",
    "meta description generator",
    "Gemini SEO assistant",
  ],
});

export default function AiLab() {
  return (
    <>
      {renderJsonLd(
        breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "AI Lab", path: "/ai-lab/" },
        ]),
        "jsonld-ai-lab-breadcrumb"
      )}
      <div className="space-y-6 pt-24 lg:pt-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "AI Lab" },
          ]}
        />
        <h1 className="sr-only">
          Free AI SEO Content Optimizer &amp; Keyword Density Tracker
        </h1>
        <AiLabView />
      </div>
    </>
  );
}
