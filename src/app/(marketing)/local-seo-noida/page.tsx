import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Local SEO Services Noida | SEO Expert in Noida — Rohit Gupta",
  description:
    "Top local SEO services in Noida by Rohit Gupta: Google Business Profile, local citations, and Google Maps 3-Pack ranking for Noida businesses.",
  path: "/local-seo-noida/",
  keywords: [
    "local seo services in noida",
    "seo expert in noida",
    "Local SEO Noida",
    "Google Map Pack Noida",
    "Google Business Profile Noida",
    "hire seo specialist noida",
    "Rohit Gupta Local SEO",
  ],
});

export default function LocalSeoNoidaPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Local SEO Noida", path: "/local-seo-noida/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-local-noida-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Local SEO Noida" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Noida Map Pack Dominance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Local SEO Services in Noida
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Capture high-intent local customers searching for your services across Noida, Sector 18, Sector 62, Sector 63, Greater Noida, and Delhi NCR. Rohit Gupta builds tailored local SEO strategies that put your business in the Google Map 3-Pack.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Get Local SEO Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Comprehensive Local SEO Solutions for Noida Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Local customers in Noida rely on Google Search and Google Maps to find nearby businesses. Rohit Gupta implements technical and geo-targeted optimization to position your brand at the top of local results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Google Map Pack 3-Pack Dominance",
                desc: "Claim top position on Google Maps for high-intent 'near me' searches across Noida Sector 18, 62, 63, and Greater Noida.",
              },
              {
                title: "Sector-Specific Geo Landing Pages",
                desc: "Build dedicated, localized landing pages for key commercial hubs in Noida, complete with LocalBusiness Schema JSON-LD markup.",
              },
              {
                title: "NAP Citation & Directory Audits",
                desc: "Ensure consistent Name, Address, and Phone (NAP) details across Justdial, IndiaMART, Sulekha, and niche business directories.",
              },
              {
                title: "Review Signal & Reputation Management",
                desc: "Develop automated customer review workflows to increase your star rating and build trust signals that Google rewards.",
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
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-400" />
            What Local SEO in Noida Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Google Business Profile Setup & Optimization",
              "Local Directory Citations & NAP Consistency",
              "Geo-Targeted Landing Pages for Noida Sectors",
              "Local Competitor Map Pack Audit",
              "Customer Review Strategy & Response Workflow",
              "Local Schema (LocalBusiness & GeoCoordinates)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Boost Your Local Business Traffic</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Discuss your Noida local search targets with Rohit Gupta today.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Local SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
