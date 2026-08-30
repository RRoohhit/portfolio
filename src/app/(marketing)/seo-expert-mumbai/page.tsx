import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe2 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Mumbai | Rohit Gupta — Pan India & Global SEO",
  description:
    "Hire Rohit Gupta — SEO expert in Mumbai. Technical SEO, local SEO, eCommerce scaling & white hat link building for Mumbai businesses. Pan India.",
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
            Mumbai is India&apos;s top search market. Rohit Gupta helps D2C brands in Andheri, B2B firms in BKC, and retailers in Bandra rank #1 on Google. We deliver technical SEO, fast page speed, and strong local search results.
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
            Rank higher in Mumbai with technical SEO, local search, and content that matches what your buyers want.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Mumbai Local SEO & Map Pack",
                desc: "Rank in Google Maps across Andheri, BKC, and Bandra. We boost your Google Business Profile and local reviews.",
              },
              {
                title: "eCommerce SEO for D2C & Retail",
                desc: "Grow your online store with fast pages, product schema, and category SEO that converts shoppers.",
              },
              {
                title: "Technical Audits & Core Web Vitals",
                desc: "Fix crawl issues and slow page load times. We help your site pass all Google speed benchmarks.",
              },
              {
                title: "AI Search & Featured Snippets",
                desc: "Win Google AI Overviews and featured snippets. We write crisp answers that get quoted by AI tools.",
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