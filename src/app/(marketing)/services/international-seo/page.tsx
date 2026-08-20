import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Globe, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "International & Multi-Regional SEO Services — Rohit Gupta",
  description:
    "International SEO services by Rohit Gupta: hreflang setup, ccTLD vs subfolder architecture, multi-country keyword mapping, geotargeting, and global ranking.",
  path: "/services/international-seo/",
  keywords: [
    "International SEO Expert",
    "Hreflang Implementation",
    "Multi regional SEO",
    "Global Search Strategy",
    "ccTLD vs Subfolder",
    "International Schema",
    "Rohit Gupta International SEO",
  ],
});

const INCLUDED_CHECKLIST = [
  { title: "International Keyword Research", desc: "Targeting region-specific search queries and local search phrasing rather than direct literal translations." },
  { title: "Country-Level Keyword Mapping", desc: "Mapping target keywords to specific country and language landing pages to ensure proper search intent alignment." },
  { title: "Language & Region Targeting", desc: "Defining clear language (e.g. en, fr, es) and country (e.g. US, UK, IN, AE) targeting rules across all site sections." },
  { title: "Hreflang Tag Implementation", desc: "Mapping hreflang tags in HTML head, HTTP headers, or XML sitemaps to prevent cross-region duplicate content." },
  { title: "Domain Architecture Strategy", desc: "Evaluating ccTLDs (.co.uk, .de), subdomains (uk.domain.com), or subdirectories (domain.com/uk/) for crawl efficiency and brand equity." },
  { title: "International URL Architecture", desc: "Structuring clean, consistent URL hierarchies that make regional versions easily indexable for search engines." },
  { title: "Google Search Console Geotargeting", desc: "Configuring Search Console international targeting parameters and country-level property management." },
  { title: "Duplicate Content Control", desc: "Implementing canonical tags and hreflang pairings to prevent penalty risks from similar regional content." },
  { title: "Localization & Cultural SEO", desc: "Adapting content tone, currencies, date formats, and cultural search nuances to resonate with target international audiences." },
  { title: "International Schema Markup", desc: "Injecting localized Organization, PostalAddress, and priceCurrency structured data for multi-region rich snippets." },
  { title: "Global Backlink Acquisition Strategy", desc: "Building local authority backlinks from country-specific media, blogs, and industry directories." },
  { title: "CDN & International Page Speed", desc: "Leveraging edge CDNs and multi-region server infrastructure for fast sub-second rendering across all continents." },
];

export default function InternationalSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "International SEO", path: "/services/international-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-intl-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "International SEO" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4" />
            Global Organic Search Growth
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            International SEO Services by Rohit Gupta
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Expanding into international markets requires precise technical setup and cultural search intent alignment. Rohit Gupta structures multi-lingual and multi-regional websites to rank effectively across global search engine environments while avoiding duplicate content issues.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Get International Strategy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* What's Included */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included in International SEO
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              12-point international and multi-lingual optimization strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INCLUDED_CHECKLIST.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Technical SEO", href: "/services/technical-seo" },
              { label: "On-Page SEO", href: "/services/on-page-seo" },
              { label: "E-Commerce SEO", href: "/services/ecommerce-seo" },
              { label: "SEO Audit", href: "/seo-audit" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
              >
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 text-center">
          <h2 className="text-xl font-bold text-white tracking-tight">Expanding Globally?</h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Get expert guidance on structuring your international website for global search engines.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
          >
            Schedule Global SEO Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
