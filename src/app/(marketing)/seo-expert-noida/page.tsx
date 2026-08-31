import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck, Star, Search, Phone } from "lucide-react";
import { CONTACT } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Noida | Local SEO Services — Rohit Gupta",
  description:
    "Hire Rohit Gupta — SEO Expert in Noida. Technical SEO, Local SEO, Google Maps 3-Pack rankings, and custom web development for Noida businesses.",
  path: "/seo-expert-noida/",
  keywords: [
    "seo expert in noida",
    "local seo services in noida",
    "SEO Specialist Noida",
    "hire dedicated seo expert noida",
    "SEO Services Noida Sector 63",
    "Local SEO Noida",
    "SEO Consultant Greater Noida",
    "Rohit Gupta SEO Noida",
  ],
});

const SECTORS_COVERED = [
  "Sector 18 (Commercial & Retail)",
  "Sector 62 (IT & Corporate Hub)",
  "Sector 63 (Industrial & Tech)",
  "Sector 125/126 (Expressway EdTech)",
  "Sector 132/142 (Logistics & Enterprise)",
  "Greater Noida & Noida Extension",
];

const LOCAL_FAQS = [
  { question: "Why hire a local SEO expert in Noida?", answer: "Noida is a high-density commercial and IT hub in Delhi NCR. A local SEO expert understands the local search competition, geographic search patterns, and Google Map Pack dynamics specific to Noida sectors." },
  { question: "Do you offer face-to-face meetings in Noida?", answer: "Yes! Rohit Gupta is physically based in Mamura, Sector 66, Noida and regularly meets clients across Sector 18, 62, 63, and Greater Noida." },
  { question: "How long does local SEO take to rank in Noida?", answer: "Initial Google Business Profile and Map Pack improvements are often seen within 4–8 weeks, with major organic rank surges taking 3–6 months depending on sector competition." },
];

export default function SeoExpertNoidaPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Noida", path: "/seo-expert-noida/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-noida-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Noida" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Noida &amp; Delhi NCR Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Noida — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Rank higher in Noida with expert SEO. Rohit Gupta helps IT firms, clinics, and retail stores in Noida and Greater Noida get more leads from Google. We deliver local SEO, page speed fixes, and strong backlinks.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Consult Noida SEO Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors">
              <Phone className="w-4 h-4 text-emerald-400" />
              Call +91 96966 21216
            </a>
          </div>
        </header>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            The Noida Search Competition Landscape
          </h2>
          <p className="text-sm text-white/75 leading-relaxed">
            Noida has thousands of IT firms, clinics, and retail shops. Page 1 rankings here need more than basic keywords. You need clean code, local citations, and active Google Business Profile management.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            Noida Sectors Covered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SECTORS_COVERED.map((sector) => (
              <div key={sector} className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{sector}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-400" />
            Frequently Asked Questions — Noida SEO
          </h3>
          <div className="space-y-4">
            {LOCAL_FAQS.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h4 className="text-sm font-bold text-white">{faq.question}</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Rank #1 in Noida?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free local SEO audit for your Noida business today.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Noida SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
