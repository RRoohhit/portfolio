import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Star, Search, BarChart3, ShieldCheck, Globe, MessageSquare } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Google Business Profile SEO Services — Rohit Gupta",
  description:
    "Google Business Profile SEO by Rohit Gupta: GBP audit, category optimization, review strategy, and Google Map Pack ranking for local businesses.",
  path: "/services/google-business-profile-seo/",
  keywords: [
    "Google Business Profile SEO",
    "Google Maps SEO",
    "GBP Optimization",
    "Google Maps Ranking",
    "Local SEO Consultant",
    "Google Business Profile Expert",
    "Map Pack Optimization",
    "GBP Audit",
    "Rohit Gupta Local SEO",
  ],
});

const GBP_AUDIT_ITEMS = [
  "Primary & secondary category research and selection",
  "Business description optimization (750 character limit)",
  "Services and products optimization with descriptions",
  "Attributes and highlights setup",
  "NAP (Name, Address, Phone) consistency check",
  "Hours, special hours, and holiday hours accuracy",
  "Website and phone number link verification",
  "Photo and video audit — quality and quantity",
  "Q&A section management and seeding",
  "Review score and volume benchmarking",
  "Competitor GBP comparison analysis",
  "Map Pack position baseline tracking",
];

const GBP_OPTIMIZATION_ITEMS = [
  "Keyword-rich primary category selection",
  "Strategic secondary category addition",
  "Service area and radius configuration",
  "Professional cover photo and logo upload",
  "Product/service listings with prices and descriptions",
  "Google Posts strategy (offers, events, updates)",
  "Review response templates and reputation strategy",
  "Local citation building aligned with GBP data",
  "Local landing page creation aligned to service areas",
  "Ongoing Map Pack rank tracking and reporting",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "GBP Audit & Baseline",
    desc: "A thorough audit of your current Google Business Profile against 30+ ranking factors. We document baseline rankings, review scores, competitor position, and identify every missing or incorrect element.",
  },
  {
    step: "02",
    title: "Category & Service Optimization",
    desc: "Primary category research, secondary category selection, and complete service/product listing setup with keyword-informed descriptions that match what local customers actually search.",
  },
  {
    step: "03",
    title: "Citations & NAP Consistency",
    desc: "We audit your business name, address, and phone number across 50+ local directories and data aggregators, correcting inconsistencies that suppress Map Pack visibility.",
  },
  {
    step: "04",
    title: "Review Strategy & Google Posts",
    desc: "Implement an ethical review acquisition strategy, respond to existing reviews, and set up a consistent Google Posts schedule to keep your profile active and fresh.",
  },
  {
    step: "05",
    title: "Local Landing Pages",
    desc: "Build unique, useful local landing pages on your website for each service area — each aligned with your GBP services and targeted to local search intent.",
  },
  {
    step: "06",
    title: "Monthly Reporting",
    desc: "Monthly GBP performance reports covering profile views, direction requests, phone calls, Map Pack positions for target keywords, and review score trends.",
  },
];

const SEARCH_QUERIES = [
  "Google Business Profile SEO",
  "Google Maps SEO",
  "GBP optimization",
  "Google Maps ranking",
  "Local SEO consultant",
  "Google Business Profile expert",
  "Map Pack optimization Noida",
  "GBP audit India",
];

export default function GoogleBusinessProfileSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Google Business Profile SEO", path: "/services/google-business-profile-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-gbp-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Google Business Profile SEO" },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Local Map Pack Visibility
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Google Business Profile SEO Services
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Your Google Business Profile is one of the most powerful local search assets you own. A properly optimised GBP
            drives map pack visibility, direction requests, phone calls, and direct business — all from customers searching
            for your services right now. Rohit Gupta provides expert GBP SEO services to help local businesses in Noida,
            Delhi NCR, and across India rank prominently in Google Maps and the local 3-pack.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Get GBP Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/local-seo/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              View Local SEO Services
            </Link>
          </div>
        </header>

        {/* Who is this for */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            Who Is Google Business Profile SEO For?
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            Google Business Profile SEO is critical for any business that serves customers in a specific location or service area.
            This includes local service businesses (plumbers, lawyers, doctors, consultants), retail shops, restaurants, clinics, agencies,
            and any company that wants to appear in <strong className="text-white">"near me"</strong> and city-based searches.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            {["Service Businesses", "Local Retail Shops", "Medical / Clinics", "Legal Professionals", "Restaurants & Hospitality", "Agencies & Consultants"].map((type) => (
              <div key={type} className="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {type}
              </div>
            ))}
          </div>
        </section>

        {/* GBP Audit */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              GBP Audit — What We Review
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Every GBP engagement starts with a full profile audit against 30+ local ranking factors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GBP_AUDIT_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included — Full GBP Optimization
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              End-to-end Google Business Profile optimization to maximize your Map Pack presence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GBP_OPTIMIZATION_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              The GBP SEO Process
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              A structured 6-step approach to building and maintaining Map Pack visibility.
            </p>
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

        {/* Search queries this page targets */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            Search Queries This Service Covers
          </h3>
          <div className="flex flex-wrap gap-2">
            {SEARCH_QUERIES.map((q) => (
              <span key={q} className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                {q}
              </span>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Google Business Profile &amp; Local Maps Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Local SEO", href: "/services/local-seo" },
              { label: "On-Page SEO", href: "/services/on-page-seo" },
              { label: "Technical SEO", href: "/services/technical-seo" },
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

        {/* CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Star className="w-4 h-4" />
            Free GBP Audit Included
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Rank in Google Maps?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free Google Business Profile audit and find out exactly what's stopping your business from appearing
            in the local 3-pack. Contact Rohit Gupta today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
            >
              Request Free GBP Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/seo-audit/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Full SEO Audit
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
