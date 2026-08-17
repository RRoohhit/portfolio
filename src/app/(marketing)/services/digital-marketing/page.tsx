import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BarChart3, CheckCircle2, ArrowRight, Target, Sparkles, TrendingUp } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing Consultant — Rohit Gupta",
  description:
    "Rohit Gupta provides data-driven digital marketing strategies that combine SEO, paid search, content and website optimization to help businesses attract relevant traffic and generate measurable growth.",
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

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <h2 className="text-base font-bold text-white tracking-tight">{item.title}</h2>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Let's Discuss Your Digital Marketing Strategy
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Rohit Gupta to review your marketing campaigns, search visibility, and conversion goals.
          </p>
          <Link
            href="/contact"
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
