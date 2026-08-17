import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Zap, CheckCircle2, ArrowRight, Code2, Gauge, Search, Layers } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Technical SEO Services & Core Web Vitals Optimization — Rohit Gupta",
  description:
    "Technical SEO services by Rohit Gupta: Core Web Vitals optimization, site speed tuning, crawlability, indexation fixes, and structured JSON-LD schema integration.",
  path: "/services/technical-seo/",
  keywords: [
    "Technical SEO Specialist",
    "Core Web Vitals Optimization",
    "Lighthouse Performance",
    "Schema JSON-LD",
    "Rohit Gupta SEO",
  ],
});

export default function TechnicalSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Technical SEO", path: "/services/technical-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-tech-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Technical SEO" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            Technical Architecture &amp; Performance
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Technical SEO Services by Rohit Gupta
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Technical SEO ensures search engines can effortlessly crawl, index, render, and understand your website's architecture. Rohit Gupta conducts comprehensive technical audits to diagnose and resolve code-level bottlenecks affecting organic search performance.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "Core Web Vitals & Speed Optimization",
              desc: "Optimizing LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift) for sub-second rendering.",
            },
            {
              title: "Crawlability & Indexation Control",
              desc: "Resolving robots.txt blocks, XML sitemap errors, canonical tag misconfigurations, 404 broken links, and redirect loops.",
            },
            {
              title: "Structured Data & JSON-LD Schema",
              desc: "Injecting valid Schema.org markup (Person, Organization, ProfilePage, Article, Product, FAQPage) for rich search snippets.",
            },
            {
              title: "JavaScript & Rendering Optimization",
              desc: "Evaluating server-side rendering (SSR), static site generation (SSG), and hydration efficiency in React and Next.js applications.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3 shadow-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <h2 className="text-base font-bold text-white tracking-tight">{item.title}</h2>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        <section className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 text-center">
          <h2 className="text-xl font-bold text-white tracking-tight">Need a Technical SEO Audit?</h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Get a thorough technical audit of your site structure, performance metrics, and schema implementation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
          >
            Request Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
