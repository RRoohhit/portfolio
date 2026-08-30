import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe2, GraduationCap } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Pune | Rohit Gupta — Tech, Auto & EdTech SEO",
  description:
    "Hire Rohit Gupta — SEO expert in Pune. Technical SEO, local SEO, EdTech & auto SEO for Pune businesses. Pan India + international remote SEO services.",
  path: "/seo-expert-pune/",
  keywords: [
    "SEO Expert in Pune",
    "SEO services Pune",
    "Hire SEO specialist Pune",
    "EdTech SEO India",
    "Digital marketing Pune",
    "Local SEO Pune",
  ],
});

export default function SeoExpertPunePage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Pune", path: "/seo-expert-pune/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-pune-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Pune" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            Pune Tech, Auto &amp; EdTech SEO Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Pune — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Pune&apos;s automotive, IT and education sectors are India&apos;s most established — and their SEO needs are as mature as their industries. Rohit Gupta helps Pune businesses across Hinjewadi, Baner, Koregaon Park and Kothrud build durable rankings through technical SEO, topical authority content, white hat links and AI-ready structured data. Fully remote-friendly from anywhere in India or worldwide.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Pune SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>
<section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SEO &amp; Growth Solutions for Pune Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Pune&apos;s educated, tech-savvy buyers research deeply online — reach them with technical excellence and content that leads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "EdTech & Coaching Institute SEO",
                desc: "Rank your Pune coaching institute or online academy for course-related queries with topical authority, FAQ schema and conversion-focused landing pages.",
              },
              {
                title: "IT & Automotive Industry SEO",
                desc: "Dominate B2B and consumer searches for Pune's IT services, automotive dealers and component manufacturers with technical SEO and high-intent content.",
              },
              {
                title: "Local SEO & Google Maps",
                desc: "Win Google Maps 3-Pack placements across Hinjewadi, Baner, Koregaon Park and Kothrud through GBP optimization and local citation building.",
              },
              {
                title: "Core Web Vitals & AI Search Readiness",
                desc: "Engineer sub-second page speed and structure content so Google and AI answer engines (ChatGPT, Perplexity) cite your Pune brand.",
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
          <h2 className="text-xl font-black text-white tracking-tight">Key Service Areas in Pune</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Hinjewadi & IT Park (Phase 1-3)",
              "Baner, Balewadi & Aundh",
              "Koregaon Park & Viman Nagar",
              "Kothrud, Deccan & FC Road",
              "Hadapsar, Magarpatta & Wagholi",
            ].map((region) => (
              <div key={region} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{region}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Grow Your Pune Business on Google</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free SEO audit for your Pune business today — served remotely across India &amp; worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Request Pune SEO Audit <ArrowRight className="w-4 h-4" />
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