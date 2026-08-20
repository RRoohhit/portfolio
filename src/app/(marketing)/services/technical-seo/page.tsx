import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Zap, CheckCircle2, ArrowRight, Code2, Gauge, Search, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Technical SEO Services | Rohit Gupta",
  description:
    "Technical SEO services by Rohit Gupta: Core Web Vitals optimization, crawlability, indexation fixes, sitemaps, Schema markup, and JavaScript SEO tuning.",
  path: "/services/technical-seo/",
  keywords: [
    "Technical SEO Specialist",
    "Core Web Vitals Optimization",
    "Lighthouse Performance",
    "Schema JSON-LD",
    "Crawlability Audit",
    "Indexation Fixes",
    "JavaScript SEO",
    "Rohit Gupta SEO",
  ],
});

const INCLUDED_CHECKLIST = [
  { title: "Technical SEO Audit", desc: "Comprehensive diagnostic scan covering crawl logs, index coverage, site structure, server response codes, and code-level bottlenecks." },
  { title: "Crawlability & Bot Access", desc: "Analyzing how search engine spiders crawl your site architecture and ensuring crawl budget is focused on priority money pages." },
  { title: "Indexation & Coverage Fixes", desc: "Resolving Google Search Console indexation issues (Discovered - currently not indexed, Crawled - currently not indexed, soft 404s)." },
  { title: "Robots.txt Optimization", desc: "Configuring robots.txt directives correctly to block unnecessary admin/temp URLs without blocking vital CSS/JS assets." },
  { title: "XML Sitemap Management", desc: "Structuring, validating, and submitting clean dynamic XML sitemaps to ensure fast discovery of new and updated URLs." },
  { title: "Canonical Tag Configuration", desc: "Setting up self-referential and cross-domain canonical tags to prevent duplicate content dilution and consolidate link equity." },
  { title: "Redirect & URL Hygiene", desc: "Identifying and resolving 301 redirect chains, 302 temporary redirects, and broken 404 links across the site." },
  { title: "JavaScript SEO & SSR/SSG", desc: "Evaluating hydration, client-side rendering issues, and framework performance in React, Next.js, and modern JS stacks." },
  { title: "Core Web Vitals Tuning", desc: "Optimizing LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift) for top sub-second performance." },
  { title: "Page Speed & Server Latency", desc: "Tuning Time to First Byte (TTFB), CDN caching, image formats (WebP/AVIF), asset compression, and code splitting." },
  { title: "Mobile SEO & Responsiveness", desc: "Ensuring mobile-first indexing compliance, viewport responsiveness, touch target sizing, and mobile usability." },
  { title: "Structured Data / JSON-LD", desc: "Injecting valid Schema.org markup (Organization, Person, Product, FAQPage, Article, Breadcrumb) for rich snippets." },
  { title: "Log-File Analysis", desc: "Analyzing server access logs to uncover exact Googlebot crawl frequency, crawl waste, and status code behavior." },
  { title: "Duplicate Content Control", desc: "Resolving duplicate content caused by URL parameters, HTTP/HTTPS variants, trailing slashes, or copied text." },
  { title: "Internal Link Architecture", desc: "Optimizing internal anchor text and link equity distribution to elevate high-priority commercial landing pages." },
  { title: "Website Migration Support", desc: "Managing URL mapping, 301 redirects, sitemap submission, and post-launch monitoring during CMS or domain migrations." },
];

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
            Technical SEO forms the foundation of all organic search success. If search engine bots cannot properly crawl, index, render, and understand your website's architecture, even the best content will fail to rank. Rohit Gupta conducts comprehensive technical audits and code-level optimizations to diagnose and eliminate technical bottlenecks.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Request Technical Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/seo-audit/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              Free SEO Audit Page
            </Link>
          </div>
        </header>

        {/* Detailed What's Included Checklist */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included in Technical SEO
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              A comprehensive 16-point technical SEO execution plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INCLUDED_CHECKLIST.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Tool Banner */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-zinc-950 to-zinc-950 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-mono font-bold uppercase border border-emerald-500/30">
              Interactive Technical Tool
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">Try the Visual SEO Mind Map Analyzer</h3>
            <p className="text-xs text-white/70 leading-relaxed max-w-xl">
              Visualize site hierarchy, crawl depth, internal link distribution, and orphan page risk in real time.
            </p>
          </div>
          <Link
            href="/seo-analyzer/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-emerald-300 transition-colors shadow-md shrink-0"
          >
            Launch Mind Map Analyzer
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Related links */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "On-Page SEO", href: "/services/on-page-seo" },
              { label: "Local SEO", href: "/services/local-seo" },
              { label: "International SEO", href: "/services/international-seo" },
              { label: "Web Development", href: "/services/web-development" },
              { label: "SEO Audit", href: "/seo-audit" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
              >
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 text-center">
          <h2 className="text-xl font-bold text-white tracking-tight">Need a Technical SEO Audit?</h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Get a thorough technical audit of your site structure, performance metrics, and schema implementation.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
          >
            Request Technical Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
