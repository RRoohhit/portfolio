import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe, ShieldCheck, Search, Star } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Local SEO Services & Map Pack Ranking — Rohit Gupta",
  description:
    "Local SEO services by Rohit Gupta: Google Business Profile optimization, local citations, city landing pages, review signals, and Google Maps ranking.",
  path: "/services/local-seo/",
  keywords: [
    "Local SEO Expert",
    "Google Business Profile Optimization",
    "Local Map Pack",
    "Geo Targeted SEO",
    "Citation Audit",
    "Local SEO Noida",
    "Local SEO Delhi NCR",
    "Rohit Gupta Local SEO",
  ],
});

const INCLUDED_CHECKLIST = [
  { title: "Google Business Profile Optimization", desc: "Full category research, services list, keyword-rich business description, photos, and post schedule." },
  { title: "Citation Audit & NAP Consistency", desc: "Auditing Name, Address, and Phone number consistency across 50+ local business directories." },
  { title: "Local Backlink Building", desc: "Acquiring geo-relevant links from local business associations, news portals, and regional directories." },
  { title: "Geo-Targeted Content & City Pages", desc: "Creating unique, useful local service landing pages tailored to target cities (Noida, Delhi, Gurgaon, Ghaziabad, Ayodhya) without keyword spam." },
  { title: "Local Competitor Analysis", desc: "Deconstructing top competitors in your local Map Pack to uncover link, category, review, and structural advantages." },
  { title: "Map Pack Ranking Strategy", desc: "Optimizing proximity signals, review velocity, and profile engagement to maintain high 3-Pack placement." },
  { title: "Review Management Strategy", desc: "Setting up automated customer review request workflows and professional response strategies." },
  { title: "Local Schema / LocalBusiness Markup", desc: "Injecting exact LocalBusiness, GeoCoordinates, and OpeningHours JSON-LD structured data into site templates." },
];

export default function LocalSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Local SEO", path: "/services/local-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-local-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Local SEO" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Geo-Targeted Visibility
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Local SEO Services by Rohit Gupta
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Local SEO connects your business with customers actively searching for products and services in specific geographic regions. Rohit Gupta helps businesses optimize Google Business Profiles, maintain citation consistency, build local authority, and capture high-intent local search traffic across Noida, Delhi NCR, and all target markets.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/services/google-business-profile-seo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Dedicated GBP SEO Service
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              Get Local SEO Strategy
            </Link>
          </div>
        </header>

        {/* Highlight Banner to GBP Page */}
        <section className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
            <Star className="w-4 h-4" />
            Dedicated Service Page
          </div>
          <h2 className="text-lg font-bold text-white tracking-tight">Looking Specifically for Google Business Profile SEO?</h2>
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
            We have a dedicated, specialized page for Google Business Profile audit, category optimization, services setup, and Map Pack tracking.
          </p>
          <Link
            href="/services/google-business-profile-seo"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Explore Google Business Profile SEO</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* What's Included */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included in Local SEO
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Complete local search and Map Pack optimization suite.
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

        {/* Related links */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Google Business Profile SEO", href: "/services/google-business-profile-seo" },
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

        <section className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 text-center">
          <h2 className="text-xl font-bold text-white tracking-tight">Ready to Dominate Local Search?</h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Discuss your local search strategy with Rohit Gupta today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
          >
            Get Local SEO Advice
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
