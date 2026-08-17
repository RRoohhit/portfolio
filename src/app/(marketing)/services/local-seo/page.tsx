import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Local SEO & Google Business Profile Services — Rohit Gupta",
  description:
    "Local SEO services by Rohit Gupta: Google Business Profile optimization, local map pack rankings, geo-targeted content, and NAP consistency.",
  path: "/services/local-seo/",
  keywords: [
    "Local SEO Expert",
    "Google Business Profile Optimization",
    "Local Map Pack",
    "Geo Targeted SEO",
    "Rohit Gupta Local SEO",
  ],
});

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
            Local SEO connects your business with customers searching for products and services in specific geographic regions. Rohit Gupta helps businesses optimize Google Business Profiles, maintain citation consistency, and capture high-intent local search traffic.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "Google Business Profile Optimization",
              desc: "Complete setup, category selection, attribute updates, cover photos, product listings, and regular post scheduling for map pack prominence.",
            },
            {
              title: "NAP Consistency & Citation Audit",
              desc: "Auditing Name, Address, and Phone number consistency across local directories and business data aggregators.",
            },
            {
              title: "Local Search Intent Copywriting",
              desc: "Creating genuinely useful, unique localized content tailored to specific service markets without resorting to repetitive keyword spamming.",
            },
            {
              title: "Review Strategy & Reputation Growth",
              desc: "Implementing customer feedback collection systems to build authentic social proof and boost local trust signals.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3 shadow-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <h2 className="text-base font-bold text-white tracking-tight">{item.title}</h2>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                {item.desc}
              </p>
            </div>
          ))}
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
