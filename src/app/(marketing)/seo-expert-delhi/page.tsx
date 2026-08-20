import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Delhi | Rohit Gupta",
  description:
    "Hire Rohit Gupta — premier SEO Expert in Delhi. Technical SEO, local search optimization, content strategy, and Google Ads management across Delhi NCR.",
  path: "/seo-expert-delhi/",
  keywords: [
    "SEO Expert in Delhi",
    "SEO Specialist Delhi",
    "SEO Services Delhi NCR",
    "Technical SEO Consultant Delhi",
    "Local SEO Delhi",
    "Rohit Gupta SEO Delhi",
  ],
});

export default function SeoExpertDelhiPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Delhi", path: "/seo-expert-delhi/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-delhi-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Delhi" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Delhi NCR Search Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Delhi — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Delhi is one of the most competitive search markets in India. From corporate firms in Connaught Place to retail brands in South Delhi and B2B services in Janakpuri and Dwarka, Rohit Gupta delivers technical SEO, white hat link building, and conversion-focused digital marketing that drives top organic rankings.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Delhi SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SEO &amp; Web Growth Solutions for Delhi Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Ranking #1 in Delhi requires technical SEO precision, Google Business Profile optimization, and authoritative backlink profiles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Delhi Local SEO & Google Map Pack",
                desc: "Drive targeted local walk-ins and phone calls across Connaught Place, South Delhi, and West Delhi with optimized Google Business Profiles and local citations.",
              },
              {
                title: "Technical Audits & Core Web Vitals",
                desc: "Identify and resolve crawl errors, JavaScript rendering issues, slow LCP/CLS scores, and duplicate content to pass Google PageSpeed benchmarks.",
              },
              {
                title: "High-Intent Keyword & Intent Mapping",
                desc: "Capture high-converting commercial searches in your industry. Align title tags, H1-H6 headers, and content depth with exact buyer intent.",
              },
              {
                title: "Custom Next.js & React Web Apps",
                desc: "Build modern, mobile-responsive web applications featuring built-in Schema JSON-LD structured data and lightning-fast page load times.",
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
          <h2 className="text-xl font-black text-white tracking-tight">Key Service Areas in Delhi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Central Delhi (Connaught Place, Barakhamba)",
              "South Delhi (Hauz Khas, Saket, Nehru Place)",
              "West Delhi (Janakpuri, Rajouri Garden, Dwarka)",
              "North & East Delhi (Laxmi Nagar, Preet Vihar)",
              "Gurgaon & Noida Border Regions",
            ].map((region) => (
              <div key={region} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{region}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Outrank Competitors in Delhi</h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free search visibility audit for your Delhi business today.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Delhi SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
