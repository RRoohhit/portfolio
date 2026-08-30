import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe2, Landmark } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Kolkata | Rohit Gupta — Local & Brand SEO",
  description:
    "Hire Rohit Gupta — SEO expert in Kolkata. Technical SEO, local SEO, WordPress development & white hat link building for Kolkata and West Bengal businesses. Pan India + worldwide.",
  path: "/seo-expert-kolkata/",
  keywords: [
    "SEO Expert in Kolkata",
    "SEO services Kolkata",
    "Local SEO West Bengal",
    "SEO specialist Kolkata",
    "WordPress development Kolkata",
    "Digital marketing Kolkata",
  ],
});

export default function SeoExpertKolkataPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Kolkata", path: "/seo-expert-kolkata/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-kolkata-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Kolkata" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Landmark className="w-4 h-4" />
            Kolkata Local &amp; Brand SEO Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Kolkata — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Kolkata is a market of heritage brands and new ambitions alike — and its businesses deserve SEO that understands both. Rohit Gupta helps Kolkata and West Bengal companies across Park Street, Salt Lake, New Town and Howrah rank #1 on Google with technical audits, local SEO, WordPress development and white hat link building. Fully remote &amp; professional support pan-India and internationally.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Kolkata SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>
<section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SEO &amp; Web Solutions for Kolkata &amp; West Bengal Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            From heritage trade and manufacturing to education and modern eCommerce — win Kolkata&apos;s growing digital search demand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Kolkata Local SEO & Google Maps",
                desc: "Rank your Kolkata business in the Google Maps 3-Pack across Park Street, Salt Lake, New Town and Howrah with GBP optimization and local citations.",
              },
              {
                title: "WordPress & eCommerce Development",
                desc: "Build fast, SEO-ready WordPress and WooCommerce sites with custom Gutenberg themes, structured data and sub-second Core Web Vitals.",
              },
              {
                title: "Technical SEO & Core Web Vitals",
                desc: "Crawl audits, indexation fixes, speed engineering and schema — the technical foundation that turns Kolkata traffic into rankings.",
              },
              {
                title: "White Hat Link Building & Content",
                desc: "Earn editorial links from Indian media and industry authorities while publishing content that builds long-term West Bengal brand trust.",
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
          <h2 className="text-xl font-black text-white tracking-tight">Key Service Areas in Kolkata &amp; West Bengal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Park Street & Central Kolkata",
              "Salt Lake (Bidhannagar) Sector V",
              "New Town & Rajarhat",
              "Howrah & Hooghly",
              "South Kolkata (Gariahat, Behala)",
            ].map((region) => (
              <div key={region} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{region}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Grow Your Kolkata Business on Google</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free SEO audit for your Kolkata business today — supporting clients across India &amp; worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Request Kolkata SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/international-seo/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors">
              <Globe2 className="w-4 h-4 text-emerald-400" /> International SEO Services
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}