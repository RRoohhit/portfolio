import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "Free SEO Analyzer & Site Mind Map | Rohit Gupta",
  description:
    "Free AI SEO Analyzer by Rohit Gupta. Instantly audit technical SEO issues, on-page gaps, backlinks, and website performance with an interactive mind map.",
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
          { name: "SEO Analyzer", path: "/seo-analyzer/" },
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
        
        {/* Rich SEO Content for Indexing & Word Count */}
        <section className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl mt-12">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            How the Visual SEO Mind Map &amp; Interactive Analyzer Works
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-white/75 leading-relaxed font-light">
            <p>
              Traditional SEO audit tools dump long, flat lists of URLs, status codes, and issues into tabular spreadsheets that make it difficult to visualize how link equity flows across your site. The <strong>Rohit Gupta Interactive SEO Mind Map &amp; Visual Analyzer</strong> solves this by converting your website structure, internal links, crawl depth, and route hierarchy into an interactive 2D node map.
            </p>
            <p>
              By scanning your application routes, XML sitemaps, and folder hierarchy, our visual engine maps primary money pages, service landing pages, blog categories, and utility routes into interconnected nodes. You can inspect status codes (200 OK, 301 Redirects, 404 Errors), identify orphan pages lacking internal links, evaluate rendering bottlenecks, and audit JSON-LD Schema markup in real time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-emerald-400 font-mono">1. Route &amp; Link Equity Flow</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Visualize parent-child route relationships, click depth from home, and anchor text distribution across key landing pages.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-emerald-400 font-mono">2. Orphan &amp; Redirect Diagnostics</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Instantly flag pages isolated from main navigation or trapped in 301/302 redirect loops suppressing organic authority.
                </p>
              </div>
            </div>
            <p>
              Whether you are conducting a pre-migration site crawl, tuning Next.js App Router dynamic routes, or auditing Core Web Vitals performance, this visual analyzer gives developers and SEO strategists total clarity over technical architecture.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

