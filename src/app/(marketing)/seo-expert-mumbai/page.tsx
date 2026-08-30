import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe2 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Mumbai | Rohit Gupta — Pan India & Global SEO",
  description:
    "Hire Rohit Gupta — SEO expert in Mumbai. Technical SEO, local SEO, eCommerce scaling & white hat link building for Mumbai businesses. Pan India + worldwide remote SEO services.",
  path: "/seo-expert-mumbai/",
  keywords: [
    "SEO Expert in Mumbai",
    "SEO services Mumbai",
    "SEO specialist Mumbai",
    "Digital marketing Mumbai",
    "Ecommerce SEO Mumbai",
    "Local SEO Mumbai",
    "Hire SEO expert India",
  ],
});

export default function SeoExpertMumbaiPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Mumbai", path: "/seo-expert-mumbai/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-mumbai-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Mumbai" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Mumbai Search Specialist — Serving Pan India &amp; Worldwide
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Mumbai — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Mumbai is India&apos;s most competitive search market — and its highest-value one. From D2C brands in Andheri to B2B firms in BKC and retailers in Lower Parel, Rohit Gupta delivers technical SEO, white hat link building, Core Web Vitals engineering and conversion-focused digital marketing that helps Mumbai businesses rank #1 on Google. And because he works remotely across India and internationally, you get the same senior specialist — whether you&apos;re in Mumbai or overseas.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Mumbai SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>
<section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SEO &amp; Web Growth Solutions for Mumbai Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Ranking #1 in Mumbai requires technical SEO precision, authoritative backlinks and content that matches the city&apos;s fast-moving buyer intent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Mumbai Local SEO & Google Map Pack",
                desc: "Dominate Google Maps 3-Pack for Mumbai searches — optimized Google Business Profiles, local citations and 'near me' visibility across Andheri, Bandra, BKC, Powai and Navi Mumbai.",
              },
              {
                title: "eCommerce SEO for Mumbai D2C & Retail",
                desc: "Scale your online store with product schema, category optimization, faceted navigation fixes and sub-second Core Web Vitals — built for shoppers who compare fast.",
              },
              {
                title: "Technical Audits & Core Web Vitals",
                desc: "Identify and resolve crawl errors, JavaScript rendering issues, slow LCP/INP scores and duplicate content so your Mumbai pages pass Google PageSpeed benchmarks.",
              },
              {
                title: "High-Intent Content & AEO / AI Search",
                desc: "Win featured snippets and AI Overview citations with keyword-clustered content, FAQ schema and entity signals — future-proofing your Mumbai brand for AI search.",
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
          <h2 className="text-xl font-black text-white tracking-tight">Key Service Areas in Mumbai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "South Mumbai (Fort, Colaba, Nariman Point)",
              "Western Suburbs (Andheri, Bandra, Juhu)",
              "BKC & Corporate District",
              "Central Mumbai (Lower Parel, Dadar)",
              "Navi Mumbai & Thane",
            ].map((region) => (
              <div key={region} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{region}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Outrank Competitors in Mumbai</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free search visibility audit for your Mumbai business today — served remotely across India &amp; worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Request Mumbai SEO Audit <ArrowRight className="w-4 h-4" />
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