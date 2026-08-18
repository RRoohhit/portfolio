import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  Search, Code2, Globe, Sparkles, Zap, ArrowRight, ShieldCheck, BarChart3, Layers, MapPin, FileText, Link2, ShoppingCart, TrendingUp, Users
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Professional Services — SEO, Digital Marketing & Web Development | Rohit Gupta",
  description:
    "Data-driven SEO, digital marketing, and web growth services by Rohit Gupta for local, national, e-commerce, and international businesses.",
  path: "/services/",
  keywords: [
    "Rohit Gupta services",
    "SEO services India",
    "Technical SEO audit",
    "Google Business Profile SEO",
    "Digital marketing consultant",
    "Next.js web development",
  ],
});

const SEO_SERVICES = [
  {
    slug: "seo",
    title: "SEO Services Overview",
    icon: Search,
    desc: "Comprehensive SEO strategy encompassing technical, on-page, local, and international organic search growth.",
    badge: "Core Service",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO & Core Web Vitals",
    icon: Zap,
    desc: "Crawlability, indexation fixes, robots.txt, XML sitemaps, canonicals, 301 redirects, JS SEO, and Core Web Vitals.",
    badge: "Technical",
  },
  {
    slug: "local-seo",
    title: "Local SEO & Geo-Targeting",
    icon: MapPin,
    desc: "Citation audits, NAP consistency, local backlinks, geo-targeted content, city landing pages, and Map Pack optimization.",
    badge: "Local",
  },
  {
    slug: "google-business-profile-seo",
    title: "Google Business Profile SEO",
    icon: MapPin,
    desc: "GBP audits, primary/secondary categories, service list optimization, review strategy, Google Posts, and local 3-pack rankings.",
    badge: "Local / GBP",
  },
  {
    slug: "on-page-seo",
    title: "On-Page SEO & Content Intent",
    icon: FileText,
    desc: "Keyword research, intent analysis, title tags, meta descriptions, H1-H6 tags, semantic SEO, content briefs, and CTR optimization.",
    badge: "On-Page",
  },
  {
    slug: "off-page-seo",
    title: "Off-Page SEO & Link Building",
    icon: Link2,
    desc: "Backlink audits, competitor link gap analysis, digital PR, citation building, unlinked brand mentions, and ethical outreach.",
    badge: "Off-Page",
  },
  {
    slug: "ecommerce-seo",
    title: "E-Commerce SEO",
    icon: ShoppingCart,
    desc: "Shopify & WooCommerce SEO, product/category optimization, product schema, faceted navigation fixes, and duplicate URL control.",
    badge: "E-Commerce",
  },
  {
    slug: "international-seo",
    title: "International & Multi-Regional SEO",
    icon: Globe,
    desc: "Hreflang implementation, geotargeting, ccTLD vs subfolder architecture, multi-currency site structure, and global search growth.",
    badge: "Global",
  },
  {
    slug: "ai-search-optimization",
    title: "AI Search Optimization (AEO/GEO)",
    icon: Sparkles,
    desc: "Entity optimization, structured data, author signals, and question-based content to improve visibility in Google AI Overviews & ChatGPT.",
    badge: "AI Search",
  },
  {
    slug: "white-hat-seo",
    title: "White Hat SEO",
    icon: ShieldCheck,
    desc: "Ethical organic tactics aligned with Google Search Essentials to build sustainable search equity and eliminate penalty risks.",
    badge: "Ethical",
  },
];

const DIGITAL_MARKETING_SERVICES = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing Consultant",
    icon: BarChart3,
    desc: "Data-driven marketing strategies combining SEO, paid search, social media, content, and conversion optimization.",
    badge: "Strategy",
  },
  {
    slug: "google-ads",
    title: "Google Ads & PPC Management",
    icon: TrendingUp,
    desc: "Search campaigns, Performance Max, quality score optimization, negative keywords, ad copy, and GA4 conversion tracking.",
    badge: "PPC",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: Users,
    desc: "Instagram, Facebook & LinkedIn strategy, profile optimization, content planning, competitor analysis, and organic lead generation.",
    badge: "Social",
  },
];

const DEV_SERVICES = [
  {
    slug: "web-development",
    title: "Full-Stack Web Development",
    icon: Code2,
    desc: "Fast, responsive, and SEO-friendly business websites using modern technologies including React, Next.js, TypeScript, and Node.js.",
    badge: "Development",
  },
  {
    slug: "nextjs-development",
    title: "Next.js 15 & React Performance Apps",
    icon: Layers,
    desc: "High-performance Server Components, edge caching, sub-second page load times, and search-optimized web architecture.",
    badge: "Framework",
  },
];

export default function ServicesPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-services-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Specialized Service Architecture
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO, Digital Marketing &amp; Web Development Services
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Data-driven SEO and digital growth services for local, national, e-commerce, and international businesses. Each service is structured around clear execution steps, technical standards, and sustainable business outcomes.
          </p>
        </header>

        {/* Section 1: SEO Services Cluster (Primary) */}
        <section className="space-y-6">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Search className="w-4 h-4" />
              Primary Capability
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Search Engine Optimization (SEO) Services
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              End-to-end organic search solutions covering technical, on-page, local, off-page, e-commerce, and AI search visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SEO_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="p-6 rounded-3xl bg-zinc-950 border border-white/10 hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                        {svc.badge}
                      </span>
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-white/5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Digital Marketing Cluster */}
        <section className="space-y-6">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
              <BarChart3 className="w-4 h-4" />
              Growth & Paid Search
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Digital Marketing Services
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Targeted paid search and social marketing to complement your organic SEO foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DIGITAL_MARKETING_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="p-6 rounded-3xl bg-zinc-950 border border-white/10 hover:border-blue-500/40 transition-all space-y-4 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-bold uppercase">
                        {svc.badge}
                      </span>
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-white/5 text-xs font-mono font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Web Development Cluster */}
        <section className="space-y-6">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              Technical Foundation
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Web Development Services
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              High-performance, SEO-friendly websites built with React and Next.js.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DEV_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="p-6 rounded-3xl bg-zinc-950 border border-white/10 hover:border-purple-500/40 transition-all space-y-4 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-mono font-bold uppercase">
                        {svc.badge}
                      </span>
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-white/5 text-xs font-mono font-bold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/10 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl font-bold text-white tracking-tight">Need Help Choosing the Right Service?</h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Get a free SEO audit to identify your exact technical and ranking needs before starting.
          </p>
          <Link
            href="/seo-audit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
          >
            Request Free SEO Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
