import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ShieldCheck, CheckCircle2, ArrowRight, BookOpen, AlertTriangle } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "White Hat SEO Services & Ethical Organic Growth — Rohit Gupta",
  description:
    "White Hat SEO services by Rohit Gupta: ethical search engine optimization strictly aligned with Google Search Essentials. Sustainable organic rankings, penalty risk avoidance, search intent optimization, and authority building.",
  path: "/services/white-hat-seo/",
  keywords: [
    "White Hat SEO",
    "Ethical SEO Services",
    "Google Compliant SEO",
    "Sustainable Organic Growth",
    "Penalty-Free SEO",
    "White Hat Link Building",
    "Rohit Gupta White Hat SEO",
  ],
});

const PRINCIPLES = [
  { title: "Search Intent Alignment", desc: "Focusing deeply on matching the user's intent with high-quality content rather than stuffing keywords or manipulating search engines." },
  { title: "Google Search Essentials Compliance", desc: "Every strategy strictly adheres to official Google webmaster & Search Essentials guidelines to eliminate algorithm penalty risks." },
  { title: "E-E-A-T Signal Reinforcement", desc: "Establishing Experience, Expertise, Authoritativeness, and Trustworthiness through transparent authorship, accurate schema, and verifiable credentials." },
  { title: "Ethical & Relevant Link Acquisition", desc: "Earning contextual backlinks through digital PR, guest contributions, broken link reclamation, and useful resources — never paid link networks or PBNs." },
  { title: "Technical Excellence", desc: "Building fast, accessible, mobile-friendly websites with clean code, sub-second load times, and structured data that search engines can easily parse." },
  { title: "Long-Term Value Creation", desc: "Creating assets (guides, tools, comprehensive articles) that build sustainable search equity month after month, surviving algorithm updates." },
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
            Ethical & Sustainable Growth
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            White Hat SEO Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            White Hat SEO is the practice of optimizing websites strictly within Google's Search Essentials and webmaster guidelines.
            Unlike risky shortcuts that risk manual actions or algorithmic deindexing, White Hat SEO focuses on technical soundess,
            exceptional user experience, valuable content, and authentic domain authority.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult White Hat SEO Expert <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            Why Choose White Hat SEO Over Quick Shortcuts?
          </h2>
          <p className="text-sm text-white/75 leading-relaxed">
            Search engine algorithm updates occur frequently. Websites relying on manipulative tactics (mass spam link building, automated content spinning, PBNs) often experience severe traffic drops during core updates. White Hat SEO builds a resilient organic baseline that consistently survives — and often gains traffic from — major search updates.
          </p>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Our Core White Hat Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h2>
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
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Protect & Scale Your Search Traffic</h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Invest in organic search strategies that build long-term value without penalty risk.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Get Ethical SEO Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
