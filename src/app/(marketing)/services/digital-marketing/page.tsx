import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BarChart3, CheckCircle2, ArrowRight, Target, Sparkles, TrendingUp } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing Consultant Services | Rohit Gupta",
  description:
    "Digital marketing consulting by Rohit Gupta: SEO, Google Ads, content strategy, and high-converting website optimization for measurable business growth.",
  path: "/services/digital-marketing/",
  keywords: [
    "Digital Marketing Consultant Rohit Gupta",
    "Rohit Gupta digital marketing",
    "Google Ads Consultant",
    "Performance Marketing",
    "Conversion Rate Optimization",
  ],
});

export default function DigitalMarketingPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Digital Marketing", path: "/services/digital-marketing/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-digital-marketing-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Digital Marketing Consultant" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4" />
            Performance &amp; Growth Strategy
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Digital Marketing Consultant — Rohit Gupta
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Rohit Gupta provides data-driven digital marketing strategies that combine SEO, paid search, content and website optimization to help businesses attract relevant traffic and generate measurable growth.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Integrated Multi-Channel Digital Marketing Approach
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Successful digital marketing requires connecting organic search, paid acquisition, and conversion-focused web architecture into one seamless lead generation funnel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Search Engine Optimization (SEO)",
                desc: "Combining technical audits, intent-based keyword research, on-page optimization, and authoritative white-hat strategies to capture sustained organic market share.",
              },
              {
                title: "Paid Search & Google Ads Management",
                desc: "High-ROI PPC campaign structuring, quality score optimization, negative keyword filtering, and conversion-focused landing page alignment.",
              },
              {
                title: "Content Strategy & Copywriting",
                desc: "Creating authoritative, search-optimized articles, guidebooks, and service landing copy that rank high and convert qualified prospects into customers.",
              },
              {
                title: "Conversion Rate Optimization (CRO)",
                desc: "Analyzing user behavior, page speed bottlenecks, call-to-action placement, and UX friction to increase conversion rates across paid and organic channels.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Extended Strategy & Process Section for Word Count */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-5 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Our Data-Driven Digital Marketing Execution Process
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
            Effective digital marketing is not about running isolated ad campaigns or randomly publishing blog posts. It requires a synchronized multi-channel strategy built on real user data, competitive research, and rigorous conversion tracking.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">Phase 1: Research &amp; Audit</span>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                We analyze your current digital presence, organic footprint, competitor positioning, ad spend efficiency, and target customer demographics.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">Phase 2: Funnel Architecture</span>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                We build intent-focused landing pages, configure GA4 analytics tracking, align Google Ads campaigns, and structure SEO content clusters.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">Phase 3: Scale &amp; Optimize</span>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Ongoing A/B testing of ad creatives, landing page copy tuning, link equity building, and monthly transparent performance reporting.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Let's Discuss Your Digital Marketing Strategy
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Rohit Gupta to review your marketing campaigns, search visibility, and conversion goals.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
