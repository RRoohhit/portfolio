import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FileText, CheckCircle2, ArrowRight, Target, ShieldCheck } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Content SEO Services — Search Intent, Topic Clusters & Copywriting | Rohit Gupta",
  description:
    "Content SEO services by Rohit Gupta: search-intent content strategy, topical authority mapping, content briefs, copy optimization, E-E-A-T enhancement, and content gap analysis.",
  path: "/services/content-seo/",
  keywords: [
    "Content SEO Services",
    "SEO Copywriting",
    "Topical Authority",
    "Topic Clusters SEO",
    "Content Optimization",
    "Search Intent Copywriting",
    "Rohit Gupta Content SEO",
  ],
});

const WHATS_INCLUDED = [
  { title: "Topical Authority Mapping", desc: "Building comprehensive topic clusters with pillar pages and supporting sub-topics to demonstrate complete domain authority to Google." },
  { title: "Search Intent Alignment", desc: "Crafting content specifically tailored to informational, commercial, transactional, or navigational search queries." },
  { title: "SEO Content Briefs", desc: "Creating detailed content briefs for writers, specifying word counts, required headings, target entities, FAQs, and internal links." },
  { title: "Content Gap Analysis", desc: "Identifying topics and queries competitors rank for that your site is missing, and prioritizing high-impact content opportunities." },
  { title: "E-E-A-T Content Upgrades", desc: "Enhancing content with author bios, expert citations, original insights, and verifiable references to satisfy Google's quality standards." },
  { title: "Content Refresh & Optimization", desc: "Updating decaying historical blog posts and service pages to reclaim lost rankings and boost organic impression volume." },
];

export default function ContentSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Content SEO", path: "/services/content-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-content-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Content SEO" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            Topical Authority & Strategy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Content SEO Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Content is the vehicle that communicates your expertise to search engines and users alike. Rohit Gupta provides strategic Content SEO — building topical authority clusters, intent-matched copy, and E-E-A-T signals that drive sustained organic growth.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Request Content Strategy <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included in Content SEO
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
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
              { label: "On-Page SEO", href: "/services/on-page-seo" },
              { label: "AI Search Optimization", href: "/services/ai-search-optimization" },
              { label: "SEO Audit", href: "/seo-audit" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Build Topical Authority?</h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch to audit your content gap and plan a search-intent content roadmap.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Contact Content SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
