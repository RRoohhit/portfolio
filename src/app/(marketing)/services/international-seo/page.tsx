import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Globe, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "International & Multi-Regional SEO Services — Rohit Gupta",
  description:
    "International SEO services by Rohit Gupta: hreflang setup, ccTLD architecture, multi-country keyword mapping, and global ranking.",
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
  { title: "International Keyword Research", desc: "Find region-specific search queries. We target how locals actually search, avoiding literal translations." },
  { title: "Country-Level Keyword Mapping", desc: "Map target search terms to country pages. This matches user intent in every market." },
  { title: "Language & Region Targeting", desc: "Set language (en, fr, es) and country (US, UK, IN, AE) rules across your site." },
  { title: "Hreflang Tag Implementation", desc: "Add hreflang tags in the page head or sitemaps. This stops regional duplicate content issues." },
  { title: "Domain Architecture Strategy", desc: "Choose ccTLDs (.co.uk), subdomains, or subdirectories. We pick the best setup for your goals." },
  { title: "International URL Architecture", desc: "Build clean, clear URL structures. This helps search engines crawl each country version fast." },
  { title: "Google Search Console Setup", desc: "Configure Search Console country settings. We help you track regional search growth easily." },
  { title: "Duplicate Content Control", desc: "Use canonical tags and hreflang pairings. This protects your site from ranking penalties." },
  { title: "Localization & Cultural SEO", desc: "Adapt currency, date formats, and tone. This builds trust with local buyers worldwide." },
  { title: "International Schema Markup", desc: "Add localized Organization and currency schema. This wins rich search snippets in each country." },
  { title: "Global Backlink Outreach", desc: "Earn quality backlinks from local news and blogs. This builds authority in target markets." },
  { title: "Fast Global Page Speed", desc: "Deploy fast edge CDNs and cloud servers. Your pages load in under 1 second worldwide." },
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
            Grow your organic search traffic across global markets. Rohit Gupta sets up multi-language and multi-country websites that rank high on Google worldwide. We configure clean hreflang tags, fast site speed, and localized search strategies.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Get International Strategy
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20international%20SEO%20for%20my%20business"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
            >
              WhatsApp Now →
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
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Global &amp; Multi-Regional Services</h3>
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
          <h3 className="text-xl font-bold text-white tracking-tight">Expanding Globally?</h3>
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
