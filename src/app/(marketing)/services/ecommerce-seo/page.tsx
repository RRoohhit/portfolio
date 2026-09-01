import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ShoppingCart, CheckCircle2, ArrowRight, Search, ShieldCheck, Target, Layers } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "E-Commerce SEO Services | Rohit Gupta",
  description:
    "E-Commerce SEO by Rohit Gupta: Shopify & WooCommerce SEO, product page optimization, category structure, and Product schema markup.",
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
  { title: "Shopify SEO", desc: "Optimize your Shopify store. We speed up themes, fix tags, and set up Product schema." },
  { title: "WooCommerce SEO", desc: "Tune your WordPress shop. We set up categories, clean tags, and speed up plugins." },
  { title: "Product Page SEO", desc: "Find buyer keywords for every item. We write crisp titles, tags, and product copy." },
  { title: "Category Page SEO", desc: "Boost your main collection pages. We add clear text, filters, and smart links." },
  { title: "Product Schema Markup", desc: "Show review stars, prices, and stock status directly in Google search results." },
  { title: "Filter & URL Management", desc: "Stop duplicate pages from product filters. We help Google crawl your top pages fast." },
  { title: "Duplicate URL Fixes", desc: "Clean up duplicate links. We use canonical tags so the right product page ranks." },
  { title: "Collection Page Setup", desc: "Set up clean product page lists. This helps buyers and search bots find items easily." },
  { title: "Internal Link Building", desc: "Link blog posts to top products. We guide shoppers directly to your best items." },
  { title: "Buyer Keyword Research", desc: "Target words people use when ready to buy. We turn organic traffic into sales." },
  { title: "Google Merchant Feed SEO", desc: "Optimize your product data feed. We boost your free Google Shopping clicks." },
  { title: "Conversion Optimization", desc: "Improve trust signals and buy buttons. We help you turn more visitors into buyers." },
];

const PLATFORMS = [
  { name: "Shopify", color: "text-emerald-400" },
  { name: "WooCommerce", color: "text-purple-400" },
  { name: "Next.js Commerce", color: "text-blue-400" },
  { name: "Magento", color: "text-amber-400" },
  { name: "Custom Builds", color: "text-rose-400" },
];

const PROCESS_STEPS = [
  { step: "01", title: "E-Commerce Store Audit", desc: "I review your site speed, product schema, filters, and indexing health." },
  { step: "02", title: "Buyer Keyword Mapping", desc: "I map high-intent search terms to each product and category page." },
  { step: "03", title: "On-Page Optimization", desc: "I write clean titles, meta tags, and structured data for your top products." },
  { step: "04", title: "Technical Speed Fixes", desc: "I speed up page load times and fix filter URLs so Google can crawl more of your store." },
  { step: "05", title: "Track Sales Growth", desc: "I track your clicks, keyword ranks, and sales growth in Search Console." },
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
            Sell more products through Google organic search. I'm Rohit Gupta, and I help online stores rank for the high-intent buyer keywords that actually bring in customers — whether you're on Shopify, WooCommerce, or a custom build. My focus is optimising your store so it drives more clicks, sales, and revenue, not just traffic.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Get E-Commerce SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20e-commerce%20SEO%20for%20my%20store" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
              WhatsApp Now →
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
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included — E-Commerce SEO
            </h3>
            <p className="text-xs sm:text-sm text-white/60">12 specialist e-commerce SEO capabilities.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="space-y-5">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            The E-Commerce SEO Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-emerald-400/40">{step.step}</span>
                  <h4 className="text-sm font-bold text-white tracking-tight">{step.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Technical SEO", href: "/services/technical-seo/" },
              { label: "On-Page SEO", href: "/services/on-page-seo/" },
              { label: "Web Development", href: "/services/web-development/" },
              { label: "SEO Audit", href: "/seo-audit/" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Grow Your Store's Organic Revenue?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get an e-commerce SEO audit to find out exactly which products and categories are losing organic traffic and why.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request E-Commerce SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
