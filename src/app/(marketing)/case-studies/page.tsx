import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CASE_STUDIES } from "@/data/portfolioData";
import { Award, ArrowRight, CheckCircle2, TrendingUp, Gauge, BarChart3 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Live Website Projects With SEO Breakdown — Rohit Gupta",
  description:
    "Two live websites designed, built and SEO-optimized from scratch — MegaMind India (Next.js + Supabase dynamic site) and AttendanceSolution.in (HTML + Tailwind) — technical SEO, on-page, local SEO, GBP, AEO & GEO.",
  path: "/case-studies/",
  keywords: [
    "live website projects",
    "nextjs supabase portfolio",
    "seo optimized websites",
    "Rohit Gupta work",
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
            Live Client Work — Built From Scratch &amp; SEO-Optimized
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Live Websites I Designed, Built &amp; Rank With SEO
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Dono website maine khud scratch se banayi hain — neeche har project ka live link, tech stack, homepage screenshot aur poora SEO breakdown (technical, on-page, off-page base, local SEO, Google Business Profile, AEO/GEO) diya hai.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Live Client Projects With SEO Breakdown</h2>
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

                <div className="flex flex-wrap items-center gap-2 shrink-0 self-start sm:self-center">
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-emerald-300 transition-colors shadow-lg"
                  >
                    Visit Live Site
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href={`/case-studies/${cs.id}/`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
                  >
                    SEO Breakdown
                  </Link>
                </div>
              </div>

              {/* Live screenshot */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={cs.afterImageUrl}
                  alt={`${cs.title} — live homepage screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-52 sm:h-72 object-cover object-top"
                />
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {cs.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                    {tech}
                  </span>
                ))}
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
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 3 · Schema + Content Setup</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Product, Blog, FAQ aur LocalBusiness JSON-LD schema, category pages aur admin panel se manageable content.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 4 · Local SEO + GBP</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Delhi HQ ka NAP setup, Google Business Profile aur Maps linkage, service-area pages aur contact consistency.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 5 · Performance Monitoring</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                FAQ aur entity-based content taaki AI search me cite ho, plus call/WhatsApp/quote CTAs har page par.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 5 · AEO/GEO + Leads</span>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  FAQ aur entity-based content taaki AI search me cite ho, plus call/WhatsApp/quote CTAs har page par.
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
            Aisi Website Chahiye Jo Google Par Bhi Dikhe?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Dono live websites maine scratch se banayi hain — baat karo aur apne business ke liye aisi hi SEO-ready website banao.
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
