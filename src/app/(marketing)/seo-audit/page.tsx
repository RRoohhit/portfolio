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
    "Request a free SEO audit by Rohit Gupta. Comprehensive technical SEO, on-page, keyword, competitor, Core Web Vitals, local SEO, and backlink audit for your website.",
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
    desc: "Crawlability, indexation status, robots.txt, XML sitemap validation, canonical tags, 404 error detection, 301 redirect chains, and JavaScript rendering bottlenecks.",
  },
  {
    title: "Core Web Vitals & Speed",
    icon: BarChart3,
    desc: "LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift), TTFB, image compression, script blocking, and cache optimization.",
  },
  {
    title: "On-Page & Keyword Analysis",
    icon: FileText,
    desc: "Title tag & meta description review, H1-H6 heading hierarchy, search intent alignment, target keyword optimization, and content cannibalization checks.",
  },
  {
    title: "Local & GBP Audit",
    icon: MapPin,
    desc: "Google Business Profile optimization status, NAP consistency across citations, local 3-pack rankings, review signals, and localized content readiness.",
  },
  {
    title: "Backlink & Authority Review",
    icon: ShieldCheck,
    desc: "Backlink profile health, domain authority signals, toxic link identification, anchor text diversity, and competitor link gap analysis.",
  },
  {
    title: "Structured Data / Schema",
    icon: Globe,
    desc: "JSON-LD schema validation (Organization, Person, LocalBusiness, Article, Product, FAQPage) for rich snippet eligibility in Google Search.",
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
            Discover what is blocking your website from ranking higher on Google. Rohit Gupta provides actionable, data-backed SEO audits covering technical infrastructure, Core Web Vitals, on-page optimization, content relevance, local search visibility, and backlink health.
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
              href="/contact"
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
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            What You Receive
          </h2>
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
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Unlock Your Search Potential?
          </h2>
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
              href="/contact"
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
