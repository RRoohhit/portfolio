import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe2, Cpu } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Bangalore | Rohit Gupta — SaaS & Tech SEO",
  description:
    "Hire Rohit Gupta — SEO expert in Bangalore. SaaS SEO, technical SEO, Core Web Vitals & AI search optimization for Bengaluru startups and tech brands.",
  path: "/seo-expert-bangalore/",
  keywords: [
    "SEO Expert in Bangalore",
    "SEO services Bengaluru",
    "SaaS SEO India",
    "Tech SEO Bangalore",
    "Hire SEO specialist India",
    "Digital marketing Bengaluru",
  ],
});

export default function SeoExpertBangalorePage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Bangalore", path: "/seo-expert-bangalore/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-bangalore-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Bangalore" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            Bengaluru Tech SEO Specialist — Serving Pan India &amp; Worldwide
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Bangalore — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Bengaluru is India&apos;s startup and SaaS capital — and its search landscape demands a technical-first SEO specialist. Rohit Gupta works with Bengaluru SaaS companies, fintech platforms and developer-focused brands across HSR Layout, Koramangala, Indiranagar and Whitefield to rank #1 on Google with Core Web Vitals engineering, programmatic SEO, content clusters and AI search (AEO) optimization. Remote-friendly, pan-India and international — the same senior expert, wherever your team sits.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Bangalore SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>
<section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SaaS &amp; Tech SEO Solutions for Bengaluru Brands
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Tech buyers search differently. Win them with technical depth, sub-second speed and content that answers developer and decision-maker questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "SaaS & B2B Keyword Strategy",
                desc: "Map buyer-intent keywords across awareness-to-decision, build topical authority clusters and capture comparison-stage queries your Bengaluru competitors ignore.",
              },
              {
                title: "Core Web Vitals & Speed Engineering",
                desc: "Engineer LCP under 1.2s, INP under 100ms and CLS at zero — the technical edge that converts crawler budget into rankings for Bengaluru's fast-moving market.",
              },
              {
                title: "Programmatic SEO & Documentation Pages",
                desc: "Scale rankings with programmatic resource pages, API docs SEO and structured data — ideal for developer-first products headquartered in Bengaluru.",
              },
              {
                title: "AI Search (AEO) & Entity Optimization",
                desc: "Get cited by ChatGPT, Perplexity and Google AI Overviews with llms.txt, entity schema and verbatim answers — a massive edge for Bengaluru's tech audience.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 shadow-xl">
                <h3 className="text-base font-bold text-white tracking-tight">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight">Key Service Areas in Bengaluru</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Koramangala & HSR Layout Startups",
              "Indiranagar & MG Road",
              "Whitefield & Outer Ring Road (ORR)",
              "Electronic City & IT Corridor",
              "Mysore Road & South Bengaluru",
            ].map((region) => (
              <div key={region} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{region}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Scale Your Bengaluru Brand with SEO</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free technical SEO audit for your Bengaluru startup or enterprise today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Request Bangalore SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/international-seo/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors">
              <Globe2 className="w-4 h-4 text-emerald-400" /> International SEO Services
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}