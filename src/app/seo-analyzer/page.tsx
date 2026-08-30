import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Network } from "lucide-react";

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
      <div className="space-y-8 pt-24 lg:pt-28 pb-16">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "SEO Analyzer" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold uppercase tracking-widest mx-auto">
            <Network className="w-4 h-4" />
            <span>Interactive Website SEO &amp; Architecture Mind Map</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            AI-Powered SEO Analyzer &amp; Visual Mind Map
          </h1>

          <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Audit any website URL or upload your React project ZIP. See technical errors, orphan pages, schema gaps, and clear action steps on a visual 2D mind map.
          </p>
        </header>

        <SeoAnalyzerPage />
        
        {/* Rich SEO Content for Indexing & Word Count */}
        <section className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl mt-12">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            How the Visual SEO Mind Map Works
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-white/75 leading-relaxed font-light">
            <p>
              Most SEO audit tools show long spreadsheets. The <strong>Rohit Gupta Interactive SEO Mind Map</strong> turns your website pages into a visual map. You can see how link equity flows across your site.
            </p>
            <p>
              Our tool scans your URLs, sitemaps, and code folders. It maps your home page, services, blog posts, and tools into interactive nodes. You can check HTTP status codes, find orphan pages, and audit JSON-LD Schema markup in real time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-emerald-400 font-mono">1. Page &amp; Link Flow</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  See how pages connect to each other. Check click depth and anchor text distribution across key URLs.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-emerald-400 font-mono">2. Orphan &amp; Redirect Audits</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Spot orphan pages missing from menus. Fix 301 redirect chains that slow down your crawl speed.
                </p>
              </div>
            </div>
            <p>
              This visual tool gives web developers and SEO teams full clarity over technical site structure.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

