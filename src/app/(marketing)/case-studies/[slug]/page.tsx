import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CASE_STUDIES } from "@/data/portfolioData";
import { Award, ArrowLeft, CheckCircle2, TrendingUp, AlertTriangle, FileText, Check, ShieldCheck } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.id }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((item) => item.id === slug);
  if (!cs) return {};

  return buildPageMetadata({
    title: `${cs.title} — SEO Case Study`,
    description: cs.summary,
    path: `/case-studies/${cs.id}/`,
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((item) => item.id === slug);
  if (!cs) notFound();

  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies/" },
    { name: cs.title, path: `/case-studies/${cs.id}/` },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-case-study-detail-breadcrumb")}

      <div className="space-y-10 sm:space-y-14 pt-24 lg:pt-28 pb-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Case Studies", href: "/case-studies" },
              { name: cs.title },
            ]}
          />
          <Link
            href="/case-studies/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Case Studies
          </Link>
        </div>

        {/* Header */}
        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-full bg-emerald-400 text-black font-extrabold uppercase">
              {cs.category}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
              Client: {cs.client}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
              Timeline: {cs.timeline}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            {cs.title}
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            {cs.summary}
          </p>
        </header>

        {/* Case Study Overview & Breakdown Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              {cs.title} — Strategy &amp; Results Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              A 5-stage technical analysis, implementation roadmap, and verified organic growth metrics for {cs.client}.
            </p>
          </div>

          {/* Step 1: Problem */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>1. Problem</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Initial Challenges &amp; Bottlenecks</h3>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              {cs.beforeDescription}
            </p>
          </div>
        </section>

        {/* Step 2: Analysis */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>2. Analysis</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Technical Audit &amp; Strategy Diagnostics</h3>
          <p className="text-sm text-white/80 leading-relaxed font-light">
            Conducted deep technical crawling, keyword gap analysis, rendering bottlenecks evaluation, and search-intent alignment to isolate exact causes of underperformance.
          </p>
        </section>

        {/* Step 3: Work */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Check className="w-4 h-4" />
            <span>3. Work Executed</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Technical Implementation &amp; Optimization</h3>
          <ul className="space-y-2.5">
            {cs.technicalHighlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Step 4: Result */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>4. Measurable Result</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Post-Optimization Performance</h3>
          <p className="text-sm text-white/80 leading-relaxed font-light">
            {cs.afterDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-3">
            {cs.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black border border-white/10 space-y-1">
                <div className="text-[10px] font-mono text-white/50 uppercase">{m.label}</div>
                <div className="text-lg font-black font-mono text-emerald-400">{m.after}</div>
                <div className="text-[11px] font-mono text-white/40">Before: {m.before} ({m.improvement})</div>
              </div>
            ))}
          </div>
        </section>

        {/* Step 5: Timeline & Lessons */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>5. Timeline &amp; Key Lessons Learned</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Strategy Execution &amp; Key Takeaways</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-400">Month 1 — Audit &amp; Technical Fixes</span>
              <p className="text-xs text-white/70 leading-relaxed font-light">Crawl audit, indexing fixes, Core Web Vitals optimization, robots.txt, and sitemaps.</p>
            </div>
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-400">Month 2 — On-Page &amp; Schema</span>
              <p className="text-xs text-white/70 leading-relaxed font-light">Keyword mapping, title/meta rewrite, H1-H6 structure, internal links, and JSON-LD schema.</p>
            </div>
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-400">Month 3 — Authority &amp; Scaling</span>
              <p className="text-xs text-white/70 leading-relaxed font-light">White-hat backlink outreach, local citation building, and Search Console rank tracking.</p>
            </div>
          </div>
          <div className="space-y-3 text-xs font-mono pt-3 border-t border-white/10">
            <div className="text-white/60">Tools Utilized: {cs.toolsUsed.join(", ")}</div>
            <div className="text-white/60">Target Keywords: {cs.keywordsTargeted.join(", ")}</div>
          </div>
        </section>

        {/* CTA Box */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Want Similar Organic Results for Your Business?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free, detailed technical and on-page SEO audit to uncover the exact growth opportunities for your website.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/seo-audit/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Request Free SEO Audit
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors">
              Contact Rohit Gupta
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
