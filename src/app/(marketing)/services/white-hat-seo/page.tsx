import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ShieldCheck, CheckCircle2, ArrowRight, BookOpen, AlertTriangle } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "White Hat SEO Services India | Penalty-Free — Rohit Gupta",
  description:
    "White Hat SEO services by Rohit Gupta: 100% Google Search Essentials compliant SEO, editorial link building & Core Web Vitals with zero penalty risk.",
  path: "/services/white-hat-seo/",
  keywords: [
    "white hat seo services",
    "white hat seo firm",
    "white hat seo agency india",
    "ethical seo services",
    "penalty-free seo india",
    "google compliant seo",
    "white hat link building",
    "hire white hat seo expert",
    "Rohit Gupta White Hat SEO",
  ],
});

const PRINCIPLES = [
  { title: "User Search Intent", desc: "We write helpful answers that match what users search for. We never stuff keywords." },
  { title: "Google Rules Compliant", desc: "Every step follows Google Search Essentials. Your website stays 100% safe from penalties." },
  { title: "Trust & Expert Signals", desc: "We show clear author names, real reviews, and verified data to build domain trust." },
  { title: "Real Editorial Backlinks", desc: "We earn natural links from trusted blogs and news sites. We never buy link packages or PBNs." },
  { title: "Fast Technical Code", desc: "We build clean code that loads in under one second. Pages are easy for search bots to crawl." },
  { title: "Long-Term Traffic Growth", desc: "We create useful guides and tools that gain clicks and links year after year." },
];

export default function WhiteHatSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "White Hat SEO", path: "/services/white-hat-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-white-hat-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "White Hat SEO" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            100% Ethical White Hat SEO Firm &amp; Services
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            White Hat SEO Services &amp; Firm India
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Rank #1 on Google without risking penalties. Rohit Gupta runs a boutique White Hat SEO firm in India. We build lasting domain authority through clean code, helpful content, and real editorial backlinks. No spam or private blog networks.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Consult White Hat SEO Firm <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20White%20Hat%20SEO%20services%20for%20my%20business" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
              WhatsApp Now →
            </Link>
          </div>
        </header>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            Why Choose White Hat SEO Over Quick Shortcuts?
          </h2>
          <p className="text-sm text-white/75 leading-relaxed">
            Google updates its search algorithms often. Sites using spam links and spun content lose traffic during core updates. White Hat SEO builds real domain authority that gains traffic from every update.
          </p>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Our Core White Hat Principles
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Technical SEO", href: "/services/technical-seo" },
              { label: "On-Page SEO", href: "/services/on-page-seo" },
              { label: "Off-Page SEO", href: "/services/off-page-seo" },
              { label: "Free SEO Audit", href: "/seo-audit" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/20 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Protect &amp; Scale Your Search Traffic</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Invest in organic search strategies that build long-term value without penalty risk.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Get Ethical SEO Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
