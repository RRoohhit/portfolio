import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FileText, CheckCircle2, ArrowRight, Search, Target, BarChart3, ShieldCheck } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "On-Page SEO Services — Keyword Research, Content Optimization & Meta Tags | Rohit Gupta",
  description:
    "On-Page SEO services by Rohit Gupta: keyword research, search intent optimization, meta tags, heading structure, internal linking, and content optimization.",
  path: "/services/on-page-seo/",
  keywords: [
    "On-Page SEO Services",
    "Keyword Research",
    "Search Intent Analysis",
    "Title Tag Optimization",
    "Content Optimization",
    "Meta Description",
    "Internal Linking",
    "On-Page SEO Expert",
    "Semantic SEO",
    "Rohit Gupta On-Page SEO",
  ],
});

const WHATS_INCLUDED = [
  { title: "Keyword Research", desc: "In-depth keyword discovery using search volume, difficulty, and intent signals to identify the most valuable target queries for every page." },
  { title: "Search Intent Analysis", desc: "Mapping informational, navigational, commercial, and transactional intent for each keyword cluster to align content format and structure with what users and Google expect." },
  { title: "Title Tag Optimization", desc: "Crafting click-worthy, keyword-informed title tags within the optimal character/pixel width, balanced for search relevance and user CTR." },
  { title: "Meta Description Optimization", desc: "Writing compelling meta descriptions that accurately summarize page content and drive higher click-through rates from search results." },
  { title: "H1–H6 Heading Structure", desc: "Implementing a logical, semantic heading hierarchy — one H1 per page with supporting H2–H4 sections that help both users and search engines understand content structure." },
  { title: "Content Optimization", desc: "Reviewing and improving existing page content for topical depth, keyword usage, readability, and alignment with current SERP expectations for the target query." },
  { title: "Internal Linking Strategy", desc: "Building a deliberate internal link architecture that distributes page authority, improves crawlability, and helps users navigate logically between related pages." },
  { title: "Image SEO", desc: "Optimizing image file names, alt text, sizes, formats (WebP), and lazy loading to improve both page performance and image search visibility." },
  { title: "Entity & Semantic SEO", desc: "Incorporating related entities, semantic keywords, and structured vocabulary to help Google understand the topical authority and context of your content." },
  { title: "Canonical Tag Review", desc: "Auditing and correcting canonical tags to prevent duplicate content issues and ensure link equity is consolidated correctly." },
  { title: "URL Structure Optimization", desc: "Reviewing URL slugs for clarity, keyword inclusion, and proper hierarchy — correcting duplicate, overly long, or parameter-heavy URLs." },
  { title: "CTR Optimization", desc: "Analyzing Google Search Console CTR data to identify pages underperforming relative to their ranking position and improving title/description to increase clicks." },
  { title: "Content Cannibalization Analysis", desc: "Identifying pages that compete with each other for the same keywords and resolving cannibalization through merging, redirecting, or differentiation." },
  { title: "Content Briefs", desc: "Creating structured content briefs for new pages based on SERP analysis, competitor content gaps, and topical authority requirements." },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Keyword & Intent Research",
    desc: "We start by researching your target keywords and mapping them to the correct user intent, so every page targets the right query with the right content format.",
  },
  {
    step: "02",
    title: "Page-by-Page Audit",
    desc: "We audit each target page: title tags, H1s, meta descriptions, content depth, internal links, image alt text, URL structure, and canonical tags.",
  },
  {
    step: "03",
    title: "Content Gap Analysis",
    desc: "We compare your pages against current SERP top-10 results to identify missing topics, sections, and entities that are holding your pages back.",
  },
  {
    step: "04",
    title: "Optimization Implementation",
    desc: "We deliver optimized title tags, meta descriptions, heading structures, and content recommendations — or implement directly on your CMS.",
  },
  {
    step: "05",
    title: "Track & Iterate",
    desc: "After implementation, we monitor Google Search Console for ranking, CTR, and impression changes and iterate based on real data.",
  },
];

export default function OnPageSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "On-Page SEO", path: "/services/on-page-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-on-page-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "On-Page SEO" },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            Content & Keyword Optimization
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            On-Page SEO Services by Rohit Gupta
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            On-Page SEO is the essential middle layer between technical infrastructure and off-page authority. It ensures
            every page on your website clearly communicates its topic, targets the right search intent, and gives both
            users and search engines exactly what they are looking for. Rohit Gupta provides systematic on-page optimization
            covering keyword research, content depth, meta tags, heading structure, internal linking, and semantic SEO.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Get On-Page Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/seo-audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              Free SEO Audit
            </Link>
          </div>
        </header>

        {/* Who is this for */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            Who Is This Service For?
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            On-Page SEO benefits any website that wants to rank higher in organic search — whether you are a local service business,
            SaaS product, e-commerce store, professional services firm, or content publisher. If your pages are not properly optimized
            for the right keywords and search intent, technical SEO and backlinks alone will not move your rankings.
          </p>
        </section>

        {/* What's Included */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included — Full On-Page SEO
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              A comprehensive, 14-point on-page optimization covering every element that influences ranking and click-through.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              The On-Page SEO Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-emerald-400/40">{step.step}</span>
                  <h3 className="text-sm font-bold text-white tracking-tight">{step.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Technical SEO", href: "/services/technical-seo" },
              { label: "Off-Page SEO", href: "/services/off-page-seo" },
              { label: "E-Commerce SEO", href: "/services/ecommerce-seo" },
              { label: "Content SEO", href: "/services/seo" },
              { label: "Free SEO Audit", href: "/seo-audit" },
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

        {/* CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Optimize Every Page?
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Rohit Gupta to audit your current on-page SEO and build a prioritized optimization plan
            that improves your rankings, CTR, and organic traffic.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
          >
            Request On-Page SEO Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
