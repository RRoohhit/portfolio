import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Search, CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe, MapPin, Target, FileText, ShoppingCart, Sparkles, Layers, MessageSquare } from "lucide-react";
import { CONTACT } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Services by Rohit Gupta",
  description:
    "Data-driven SEO services by Rohit Gupta: Technical SEO, On-Page, Off-Page, Local SEO, E-Commerce SEO, and AI Search Optimization for sustainable growth.",
  path: "/services/seo/",
  keywords: [
    "SEO Services by Rohit Gupta",
    "Technical SEO Specialist",
    "On-Page SEO Services",
    "Off-Page Link Building",
    "Local SEO Services India",
    "Google Business Profile SEO",
    "International SEO",
    "E-Commerce SEO Expert",
    "AI Search Optimization",
    "White Hat SEO Specialist",
  ],
});

const SEO_HUB_SECTIONS = [
  {
    id: "technical-seo",
    title: "Technical SEO & Core Web Vitals",
    badge: "Infrastructure",
    icon: Zap,
    desc: "Crawl logs audit, indexation fix, robots.txt, dynamic XML sitemaps, canonical tags, 301 redirects, JavaScript SEO, and Core Web Vitals (LCP, INP, CLS) optimization.",
    link: "/services/technical-seo/",
  },
  {
    id: "on-page-seo",
    title: "On-Page SEO & Content Intent",
    badge: "Content",
    icon: FileText,
    desc: "Intent-based keyword research, title tag & meta description tuning, semantic H1-H6 heading hierarchy, internal link equity distribution, and CTR optimization.",
    link: "/services/on-page-seo/",
  },
  {
    id: "off-page-seo",
    title: "Off-Page SEO & Link Building",
    badge: "Authority",
    icon: Target,
    desc: "Backlink profile audits, competitor link gap analysis, digital PR, citation building, unlinked brand mention reclamation, and ethical White-Hat outreach.",
    link: "/services/off-page-seo/",
  },
  {
    id: "local-seo",
    title: "Local SEO & Geo-Targeting",
    badge: "Local",
    icon: MapPin,
    desc: "Map Pack 3-Pack placement, local citations, NAP consistency, geo-targeted content, and city landing page architecture across Noida, Delhi NCR & India.",
    link: "/services/local-seo/",
  },
  {
    id: "google-business-profile-seo",
    title: "Google Business Profile SEO",
    badge: "GBP",
    icon: MapPin,
    desc: "Profile audit, primary & secondary category optimization, service catalog management, Google Posts, and review acquisition strategies.",
    link: "/services/google-business-profile-seo/",
  },
  {
    id: "ecommerce-seo",
    title: "E-Commerce SEO",
    badge: "Store",
    icon: ShoppingCart,
    desc: "Shopify & WooCommerce SEO, product page optimization, category page hierarchy, Product JSON-LD schema, and faceted navigation duplicate content resolution.",
    link: "/services/ecommerce-seo/",
  },
  {
    id: "international-seo",
    title: "International SEO & Hreflang",
    badge: "Global",
    icon: Globe,
    desc: "Hreflang implementation, ccTLD vs subfolder architecture, multi-currency site structure, global keyword mapping, and cross-border organic growth.",
    link: "/services/international-seo/",
  },
  {
    id: "ai-search-optimization",
    title: "AI Search Optimization (AEO / GEO)",
    badge: "AI Search",
    icon: Sparkles,
    desc: "Entity optimization, structured data, author E-E-A-T signals, and question-based content to maximize brand citations in Google AI Overviews & ChatGPT.",
    link: "/services/ai-search-optimization/",
  },
  {
    id: "white-hat-seo",
    title: "White Hat SEO Philosophy",
    badge: "Ethical",
    icon: ShieldCheck,
    desc: "100% Search Essentials compliant tactics focused on technical excellence, search intent, user experience, and penalty-free domain equity.",
    link: "/services/white-hat-seo/",
  },
];

const SEO_PROCESS = [
  { step: "01", title: "Comprehensive Audit", desc: "We run deep technical, on-page, keyword, and backlink diagnostics to identify indexation blockers and quick-win growth targets." },
  { step: "02", title: "Strategy & Roadmap", desc: "We prioritize fixes based on business ROI — addressing critical code errors first, followed by content expansion and authority building." },
  { step: "03", title: "Implementation & Fixes", desc: "Direct code-level execution on React, Next.js, WordPress, or Shopify, plus optimized meta tags, internal links, and JSON-LD schema." },
  { step: "04", title: "Authority & Content Expansion", desc: "Execute White-Hat outreach, local citation building, and topic cluster creation to establish category dominance." },
  { step: "05", title: "Monitoring & Monthly Reports", desc: "Track ranking progress, organic traffic growth, impression volume, and conversions in Google Search Console & GA4." },
];

export default function SeoServicesPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "SEO Services", path: "/services/seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-services-hub-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "SEO Services Hub" },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Search className="w-4 h-4" />
            Organic Search &amp; Growth Hub
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Services by Rohit Gupta
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Search engine optimization is not a single trick — it is an interconnected ecosystem of technical infrastructure,
            on-page intent, content authority, local entity signals, and ethical link building. Rohit Gupta provides
            end-to-end SEO services designed to turn organic search into a predictable revenue driver for your business.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/seo-audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Request Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I would like to discuss SEO services for my website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp Consultation
            </a>
          </div>
        </header>

        {/* All SEO Capabilities Grid */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Comprehensive SEO Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Explore specialized search engine optimization services tailored to your market and site architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEO_HUB_SECTIONS.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.id}
                  className="p-6 rounded-3xl bg-zinc-950 border border-white/10 hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                        {sec.badge}
                      </span>
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      {sec.desc}
                    </p>
                  </div>

                  <Link
                    href={sec.link}
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-white/5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              The 5-Step SEO Growth Methodology
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              A structured, transparent approach from audit to top search rankings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SEO_PROCESS.map((step) => (
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

        {/* Callout to SEO Audit */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Improve Your Organic Visibility?
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Rohit Gupta to audit your existing SEO foundation and build a practical roadmap for organic search growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/seo-audit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
            >
              Get Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              Contact Rohit Gupta
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
