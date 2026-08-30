import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe2, ShoppingBag } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Chennai | Rohit Gupta — Local & eCommerce SEO",
  description:
    "Hire Rohit Gupta — SEO expert in Chennai. Local SEO, eCommerce SEO, technical audits & Google Maps dominance for Chennai businesses. Pan India + international remote SEO.",
  path: "/seo-expert-chennai/",
  keywords: [
    "SEO Expert in Chennai",
    "SEO company Chennai",
    "Local SEO Chennai",
    "SEO services Chennai",
    "eCommerce SEO India",
    "Digital marketing Chennai",
  ],
});

export default function SeoExpertChennaiPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Chennai", path: "/seo-expert-chennai/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-chennai-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Chennai" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShoppingBag className="w-4 h-4" />
            Chennai Local &amp; eCommerce SEO Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Chennai — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            From T Nagar retailers to businesses on OMR and ECR, Chennai&apos;s diverse commercial landscape needs SEO that understands both local discovery and online scale. Rohit Gupta helps Chennai brands dominate Google Maps, rank for local and national keywords, and convert traffic through white hat link building and high-performance web development — served pan-India and remotely worldwide.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Chennai SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>
<section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SEO &amp; Growth Solutions for Chennai Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Chennai shoppers and B2B buyers research before they buy — win them with a fast, trustworthy, well-ranked web presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Chennai Local SEO & Google Map Pack",
                desc: "Dominate Google Maps 3-Pack across T Nagar, Adyar, Velachery, Anna Nagar and OMR — optimized GBP, local citations and review velocity systems.",
              },
              {
                title: "eCommerce & Retail SEO",
                desc: "Scale online stores with product schema, category optimization, faceted navigation fixes and high-conversion landing pages for Chennai's retail brands.",
              },
              {
                title: "Technical SEO & Core Web Vitals",
                desc: "Crawl audit, indexation fixes, LCP/INP engineering and structured data — the technical foundation every Chennai ranking depends on.",
              },
              {
                title: "White Hat Link Building & Digital PR",
                desc: "Earn authoritative editorial links from Indian media and industry sites that compound Chennai brand authority over time.",
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
          <h2 className="text-xl font-black text-white tracking-tight">Key Service Areas in Chennai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "T Nagar & Mylapore Retail Hub",
              "Anna Nagar & Nungambakkam",
              "Adyar, Velachery & Besant Nagar",
              "OMR (Rajiv Gandhi Salai) Tech Corridor",
              "Tambaram, Chromepet & South Chennai",
            ].map((region) => (
              <div key={region} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{region}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Grow Your Chennai Business on Google</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free SEO &amp; visibility audit for your Chennai business today — supporting clients across India &amp; worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Request Chennai SEO Audit <ArrowRight className="w-4 h-4" />
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