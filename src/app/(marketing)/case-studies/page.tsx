import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CASE_STUDIES } from "@/data/portfolioData";
import { Award, ArrowRight, CheckCircle2, TrendingUp, Gauge, BarChart3 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO & Web Development Case Studies — Rohit Gupta",
  description:
    "Explore real-world SEO and web development case studies by Rohit Gupta detailing Problem → Analysis → Work → Result → Evidence.",
  path: "/case-studies/",
  keywords: [
    "SEO Case Studies",
    "Technical SEO Results",
    "Rohit Gupta Case Studies",
    "Web Development Work Evidence",
  ],
});

export default function CaseStudiesPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-case-studies-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Case Studies" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Verified Case Studies &amp; Evidence
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO &amp; Web Development Case Studies
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Real client case studies demonstrating technical SEO analysis, web performance optimization, and organic growth strategies.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Featured Client Case Studies</h2>
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 hover:border-emerald-500/40 transition-all space-y-6 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold uppercase border border-emerald-500/20">
                    {cs.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-2">
                    {cs.title}
                  </h3>
                  <p className="text-xs font-mono text-white/50 mt-1">Client: {cs.client} · Timeline: {cs.timeline}</p>
                </div>

                <Link
                  href={`/case-studies/${cs.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-emerald-300 transition-colors shadow-lg shrink-0 self-start sm:self-center"
                >
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                {cs.summary}
              </p>

              {/* Key metrics grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {cs.metrics.slice(0, 4).map((m, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-black border border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-white/50 uppercase">{m.label}</div>
                    <div className="text-sm font-black font-mono text-emerald-400">{m.after}</div>
                    <div className="text-[10px] font-mono text-white/40">Was: {m.before} ({m.improvement})</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Detailed Methodology & Verified Results Guide */}
        <section className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-8 shadow-2xl">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Our 5-Stage SEO Engineering &amp; Growth Framework
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Every client project executed by Rohit Gupta follows an evidence-based, data-backed roadmap designed for sustainable organic visibility and conversion growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 1 · Deep Technical Audit</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Full-site crawl auditing crawl depth, indexation gaps, status codes, JavaScript rendering hurdles, and Core Web Vitals performance benchmarks.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 2 · Entity &amp; Intent Mapping</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Topical keyword clustering, search intent classification, schema graph architecture, and parent-child internal link hierarchy planning.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 3 · Codebase Implementation</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Direct code-level optimization in React, Next.js, or CMS templates, eliminating hydration drag, layout shift, and server response latency.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 4 · Ethical Authority Building</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                White-hat digital PR outreach, local citation reclamation, unlinked brand mention conversion, and contextual editorial link acquisition.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 5 · Performance Monitoring</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Continuous Google Search Console position tracking, CrUX real-user monitoring, algorithm update immunity verification, and conversion audits.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Verified Evidence</span>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Transparent before/after metrics from Google Search Console, Google Analytics 4, and Lighthouse reports.
                </p>
              </div>
              <Link href="/contact/" className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-bold mt-2">
                Discuss Your Campaign Roadmap →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Scale Your Organic Search Growth?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Rohit Gupta for a complimentary technical SEO diagnosis and discover the exact bottlenecks preventing your site from ranking #1.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
            >
              Request Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/seo-audit/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              Learn About SEO Audits
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
