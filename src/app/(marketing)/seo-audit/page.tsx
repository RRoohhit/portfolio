import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import { Search, CheckCircle2, ArrowRight, ShieldCheck, Zap, BarChart3, FileText, Globe, MapPin, MessageSquare, Phone, Mail } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Free SEO Audit & Website SEO Analysis — Rohit Gupta",
  description:
    "Request a free SEO audit by Rohit Gupta. Get a complete technical SEO, Core Web Vitals, on-page keyword, local search, and backlink audit for your site.",
  path: "/seo-audit/",
  keywords: [
    "Free SEO Audit",
    "Website SEO Analysis",
    "Technical SEO Audit",
    "Core Web Vitals Audit",
    "SEO Analyzer",
    "Google Business Profile Audit",
    "Rohit Gupta SEO Audit",
  ],
});

const AUDIT_PILLARS = [
  {
    title: "Technical SEO Audit",
    icon: Zap,
    desc: "We check indexing status, sitemaps, robots.txt, broken links, 301 redirects, and page rendering.",
  },
  {
    title: "Core Web Vitals & Speed",
    icon: BarChart3,
    desc: "We test your LCP, INP, and CLS scores. We help you fix render-blocking code and slow images.",
  },
  {
    title: "On-Page & Keyword Review",
    icon: FileText,
    desc: "We review titles, meta tags, and H1 headings. We make sure your content matches search intent.",
  },
  {
    title: "Local & Google Map Pack",
    icon: MapPin,
    desc: "We audit your Google Business Profile, local citations, reviews, and Google Maps 3-Pack rank.",
  },
  {
    title: "Backlink & Domain Authority",
    icon: ShieldCheck,
    desc: "We check your link health, spot spam links, and find top link opportunities your rivals use.",
  },
  {
    title: "Schema Markup & Rich Snippets",
    icon: Globe,
    desc: "We test your JSON-LD structured data. This wins star ratings and rich results on Google.",
  },
];

export default function SeoAuditPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Free SEO Audit", path: "/seo-audit/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-audit-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Free SEO Audit" }]} />

        {/* Hero Banner */}
        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Search className="w-4 h-4" />
            Comprehensive Website Diagnostic
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Free SEO Audit &amp; Website SEO Analysis
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Find out what is holding your site back on Google. Rohit Gupta delivers a practical SEO audit covering page speed, on-page keywords, technical fixes, and backlink health.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-2">
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I would like to request a Free SEO Audit for my website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              Request Audit via WhatsApp
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              Contact Form
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Audit Pillars Grid */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              What Is Covered in Your SEO Audit?
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              A complete multi-point review of every technical and strategic factor affecting your organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AUDIT_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">{pillar.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deliverables / Benefits */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            What You Receive
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Clear, prioritized list of technical errors and fixes",
              "Core Web Vitals & speed performance baseline report",
              "On-page title/meta/heading optimization opportunities",
              "Topical keyword gaps & content recommendations",
              "Google Business Profile & local visibility assessment",
              "Direct consultation call to review findings and roadmap",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Unlock Your Search Potential?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Send your website URL and target keywords to get your audit started.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-mono text-white/80">
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Phone className="w-4 h-4 text-emerald-400" />
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Mail className="w-4 h-4 text-emerald-400" />
              {CONTACT.email}
            </a>
          </div>

          <div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
            >
              Submit Audit Request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
