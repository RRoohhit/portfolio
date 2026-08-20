import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "GBP SEO Noida Expert | Rohit Gupta",
  description:
    "Google Business Profile SEO specialist in Noida. Optimize your GBP, manage categories and review signals, and rank in the Google Maps 3-Pack across Noida.",
  path: "/google-business-profile-seo-noida/",
  keywords: [
    "Google Business Profile SEO Noida",
    "GBP Optimization Noida",
    "Google Maps Ranking Noida",
    "Google Business Profile Expert Noida",
    "Rohit Gupta GBP Noida",
  ],
});

export default function GbpSeoNoidaPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "GBP SEO Noida", path: "/google-business-profile-seo-noida/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-gbp-noida-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "GBP SEO Noida" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Noida GBP Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Google Business Profile SEO in Noida
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Rank your Noida business at the top of Google Maps. Rohit Gupta provides end-to-end Google Business Profile optimization — category selection, service descriptions, photo management, review strategy, and monthly Map Pack rank tracking.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Request Noida GBP Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Google Business Profile &amp; Maps Growth Pillars
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Optimizing your Google Business Profile is the fastest way to drive inbound calls, foot traffic, and website visits from local customers across Noida and Delhi NCR.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "GBP Profile Audit & Category Alignment",
                desc: "Select high-converting primary and secondary categories tailored to Noida search trends to maximize your profile's geographic radius.",
              },
              {
                title: "Noida Citation & Directory Consistency",
                desc: "Eliminate conflicting NAP data across local directories to build strong location confidence signals in Google's local search algorithm.",
              },
              {
                title: "Geo-Tagged Photos & Weekly Posts",
                desc: "Upload geo-tagged business images, update service menus, and post weekly updates to maintain high profile activity signals.",
              },
              {
                title: "Review Generation & Response Management",
                desc: "Set up automated customer feedback systems to collect positive reviews and respond with keyword-rich answers.",
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
          <h2 className="text-xl font-black text-white tracking-tight">Our Noida GBP Optimization Checklist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Primary & Secondary Category Optimization for Noida Market",
              "Service & Product Catalog Listings with Local Intent Descriptions",
              "Noida NAP (Name, Address, Phone) Consistency Verification",
              "Google Posts Schedule & Offer Posts Setup",
              "Ethical Review Request Strategy & Response Templates",
              "Noida Map Pack Rank Baseline & Competitor Tracking",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Rank in Google Maps Noida?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free GBP analysis for your profile today.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Contact GBP Expert <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
