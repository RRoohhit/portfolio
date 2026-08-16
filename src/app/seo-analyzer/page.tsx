import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "Free SEO Analyzer & Interactive Site Mind Map Tool | Rohit Gupta",
  description:
    "Analyze any website with the free AI-powered SEO analyzer. Interactive mind map of technical issues, on-page gaps, backlinks and growth opportunities - built by SEO specialist Rohit Gupta.",
  path: "/seo-analyzer",
  keywords: [
    "free SEO analyzer",
    "SEO mind map",
    "website SEO analysis tool",
    "technical SEO checker",
    "on-page SEO analyzer",
    "site structure analysis",
    "SEO audit tool free",
    "AI SEO analyzer",
  ],
});

const SeoAnalyzerPage = dynamic(
  () => import("@/components/views/seo-analyzer/SeoAnalyzerPage").then((m) => m.SeoAnalyzerPage),
  {
    ssr: true,
    loading: () => (
      <div className="py-24 text-center text-sm font-mono text-emerald-400 animate-pulse">
        Loading interactive SEO mind map...
      </div>
    ),
  }
);

export default function Page() {
  return (
    <>
      {renderJsonLd(
        breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "SEO Analyzer", path: "/seo-analyzer" },
        ]),
        "jsonld-seo-analyzer-breadcrumb"
      )}
      <div className="space-y-6 pt-24 lg:pt-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "SEO Analyzer" },
          ]}
        />
        <SeoAnalyzerPage />
      </div>
    </>
  );
}
