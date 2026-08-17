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
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-2">
                    {cs.title}
                  </h2>
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
      </div>
    </>
  );
}
