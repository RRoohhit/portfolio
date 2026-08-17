import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Search, CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe, MapPin, Target } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Services by Rohit Gupta — Technical, Local & White Hat SEO",
  description:
    "Rohit Gupta provides technical SEO, white hat SEO, local SEO and international SEO services designed to improve organic search visibility and website performance.",
  path: "/services/seo/",
  keywords: [
    "SEO Services by Rohit Gupta",
    "Technical SEO",
    "On-Page SEO",
    "Local SEO",
    "International SEO",
    "White Hat SEO",
    "SEO Audits",
    "Keyword Research",
    "Google Business Profile Optimization",
  ],
});

const SEO_SECTIONS = [
  {
    id: "technical-seo",
    title: "Technical SEO",
    desc: "Crawlability, render analysis, Core Web Vitals optimization, XML sitemaps, canonical tags, and structured JSON-LD schema integration to ensure search bots efficiently index your pages.",
    link: "/services/technical-seo/",
  },
  {
    id: "on-page-seo",
    title: "On-Page SEO",
    desc: "Intent-based page titles, meta descriptions, semantic HTML header tags (H1-H4), internal link mapping, and content optimization tuned for high relevance and user engagement.",
  },
  {
    id: "local-seo",
    title: "Local SEO",
    desc: "Hyper-local search strategy, NAP consistency, local citation building, and Google Business Profile optimization designed to capture qualified location intent.",
    link: "/services/local-seo/",
  },
  {
    id: "international-seo",
    title: "International SEO",
    desc: "Multi-regional architecture, hreflang tag mapping, country-code top-level domain (ccTLD) planning, and localized search targeting for global markets.",
    link: "/services/international-seo/",
  },
  {
    id: "white-hat-seo",
    title: "White Hat SEO",
    desc: "Ethical, sustainable organic search tactics aligned strictly with Google Webmaster Guidelines. No spammy link schemes or artificial manipulation.",
  },
  {
    id: "seo-audits",
    title: "SEO Audits",
    desc: "Comprehensive 50+ point diagnostic covering indexation issues, technical bottlenecks, duplicate content, redirect chains, and performance barriers.",
  },
  {
    id: "keyword-research",
    title: "Keyword Research",
    desc: "In-depth search intent mapping, keyword clustering, competitive gap analysis, and high-value search query identification to drive targeted, high-converting traffic.",
  },
  {
    id: "gbp-optimization",
    title: "Google Business Profile Optimization",
    desc: "Full profile setup, category selection, business attribute optimization, review management strategy, and local map pack rank building.",
  },
];

export default function SeoServicesPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "SEO Services", path: "/services/seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-services-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "SEO Services by Rohit Gupta" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Search className="w-4 h-4" />
            Organic Search &amp; Growth Strategy
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Services by Rohit Gupta
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Rohit Gupta provides technical SEO, white hat SEO, local SEO and international SEO services designed to improve organic search visibility and website performance. Each SEO strategy begins with technical analysis, search-intent research and a review of the website's current organic performance.
          </p>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Comprehensive SEO Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Data-backed, ethical search engine optimization tailored to your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SEO_SECTIONS.map((sec) => (
              <div
                key={sec.id}
                className="p-6 rounded-3xl bg-zinc-950 border border-white/10 hover:border-emerald-500/40 transition-colors space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h3 className="text-base font-bold text-white tracking-tight">{sec.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                    {sec.desc}
                  </p>
                </div>

                {sec.link && (
                  <Link
                    href={sec.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors pt-2 pl-6"
                  >
                    <span>Read dedicated service page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Improve Your Organic Visibility?
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Rohit Gupta to audit your existing SEO foundation and build a practical roadmap for search growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
          >
            Get SEO Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
