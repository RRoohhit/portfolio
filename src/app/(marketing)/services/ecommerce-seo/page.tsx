import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ShoppingCart, CheckCircle2, ArrowRight, Search, ShieldCheck, Target, Layers } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "E-Commerce SEO Services — Shopify, WooCommerce & Product Page Optimization | Rohit Gupta",
  description:
    "E-Commerce SEO by Rohit Gupta: Shopify SEO, WooCommerce SEO, product page optimization, category page SEO, product schema, faceted navigation fixes, duplicate URL resolution, and conversion-focused keyword strategy.",
  path: "/services/ecommerce-seo/",
  keywords: [
    "E-Commerce SEO Services",
    "Shopify SEO Expert",
    "WooCommerce SEO",
    "Product Page Optimization",
    "Category Page SEO",
    "E-Commerce SEO India",
    "Product Schema",
    "Faceted Navigation SEO",
    "Rohit Gupta E-Commerce SEO",
  ],
});

const WHATS_INCLUDED = [
  { title: "Shopify SEO", desc: "Full Shopify store optimization: theme performance, canonical tags, collection page structure, app impact on Core Web Vitals, and JSON-LD product schema." },
  { title: "WooCommerce SEO", desc: "WordPress/WooCommerce-specific optimization: Yoast/RankMath configuration, product taxonomy structure, category hierarchy, and plugin performance impact." },
  { title: "Product Page Optimization", desc: "Keyword research for product-level queries, optimized title tags, rich product descriptions, alt-text for product images, unique content for each product." },
  { title: "Category Page Optimization", desc: "Category pages are your highest-traffic, highest-value e-commerce pages. We optimize headings, filters, content introductions, and internal link structure for maximum organic reach." },
  { title: "Product Schema & Rich Snippets", desc: "Implementing valid Product, Offer, and AggregateRating structured data so your products appear with price, availability, and review stars directly in search results." },
  { title: "Faceted Navigation & Filter Management", desc: "Preventing crawl budget waste and duplicate content from filter/facet URLs using noindex, canonical, or parameter handling — one of the most common e-commerce SEO issues." },
  { title: "Duplicate Product URL Resolution", desc: "Identifying and fixing duplicate content from multiple URL paths pointing to the same product (e.g., /product/name vs /category/product/name) using canonical tags and URL structure review." },
  { title: "Pagination Handling", desc: "Correct implementation of paginated collection pages using proper canonical tags to ensure PageRank flows correctly and deep pages are indexed." },
  { title: "Internal Linking for E-Commerce", desc: "Building internal link pathways from blog content to product/category pages, from category to product, and from the homepage to priority collections." },
  { title: "E-Commerce Keyword Research", desc: "Mapping buyer-intent keywords (product keywords, comparison keywords, best-of keywords) to the right product and category pages for maximum conversion potential." },
  { title: "Merchant / Feed SEO", desc: "Optimizing product data feeds for Google Merchant Center to improve Shopping ad quality and organic shopping visibility." },
  { title: "Conversion Optimization", desc: "Analyzing product page UX, trust signals (reviews, badges, security), and CTA placement to improve add-to-cart and checkout conversion rates alongside ranking improvements." },
];

const PLATFORMS = [
  { name: "Shopify", color: "text-emerald-400" },
  { name: "WooCommerce", color: "text-purple-400" },
  { name: "Next.js Commerce", color: "text-blue-400" },
  { name: "Magento", color: "text-amber-400" },
  { name: "Custom Builds", color: "text-rose-400" },
];

const PROCESS_STEPS = [
  { step: "01", title: "E-Commerce SEO Audit", desc: "Technical audit specific to e-commerce: crawl budget, faceted navigation, duplicate products, schema, category structure, and Core Web Vitals." },
  { step: "02", title: "Keyword & Intent Mapping", desc: "Map buyer-intent keywords to each product and category page, identifying gaps where products exist but pages are missing or under-optimized." },
  { step: "03", title: "On-Page & Schema Implementation", desc: "Optimize product titles, descriptions, H1s, schema markup, and internal links — starting with highest-traffic / highest-revenue pages first." },
  { step: "04", title: "Technical Fixes", desc: "Resolve faceted navigation issues, canonical conflicts, pagination problems, and Core Web Vitals issues that slow down the store and hurt crawl efficiency." },
  { step: "05", title: "Track & Scale", desc: "Monitor organic revenue, product impressions, and category rankings in Google Search Console and scale what is working." },
];

export default function EcommerceSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "E-Commerce SEO", path: "/services/ecommerce-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-ecommerce-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "E-Commerce SEO" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShoppingCart className="w-4 h-4" />
            Online Store Search Visibility
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            E-Commerce SEO Services by Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            E-commerce stores face unique SEO challenges: thousands of product pages, faceted navigation creating duplicate
            content, crawl budget waste, and fierce competition for buyer-intent keywords. Rohit Gupta provides
            e-commerce-specific SEO covering Shopify, WooCommerce, and custom-built stores — focused on driving
            organic revenue through product visibility, category dominance, and conversion optimization.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Get E-Commerce SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Platforms */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            Platforms Supported
          </h2>
          <div className="flex flex-wrap gap-3">
            {PLATFORMS.map((p) => (
              <span key={p.name} className={`px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono font-bold ${p.color}`}>
                {p.name}
              </span>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included — E-Commerce SEO
            </h2>
            <p className="text-xs sm:text-sm text-white/60">12 specialist e-commerce SEO capabilities.</p>
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
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            The E-Commerce SEO Process
          </h2>
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
              { label: "On-Page SEO", href: "/services/on-page-seo" },
              { label: "Web Development", href: "/services/web-development" },
              { label: "SEO Audit", href: "/seo-audit" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Grow Your Store's Organic Revenue?</h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get an e-commerce SEO audit to find out exactly which products and categories are losing organic traffic and why.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request E-Commerce SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
