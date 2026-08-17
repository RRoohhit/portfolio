import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "International & Multi-Regional SEO Services — Rohit Gupta",
  description:
    "International SEO services by Rohit Gupta: Hreflang implementation, multi-country domain structures, global keyword strategy, and cross-border organic growth.",
  path: "/services/international-seo/",
  keywords: [
    "International SEO Expert",
    "Hreflang Implementation",
    "Multi regional SEO",
    "Global Search Strategy",
    "Rohit Gupta International SEO",
  ],
});

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
            Expanding into international markets requires precise technical setup and cultural search intent alignment. Rohit Gupta structures multi-lingual and multi-regional websites to rank effectively across global search engines.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "Hreflang & Geotargeting Setup",
              desc: "Mapping language and region tags accurately in HTTP headers, HTML link tags, or sitemaps to prevent cross-language duplicate content issues.",
            },
            {
              title: "Domain Architecture Strategy",
              desc: "Evaluating ccTLDs (.co.uk, .de, .in), subdomains, or subdirectories (/us/, /uk/) for optimal brand authority and regional crawl efficiency.",
            },
            {
              title: "Global Search Intent & Localization",
              desc: "Targeting region-specific search queries and keyword variations rather than relying on direct translations.",
            },
            {
              title: "Multi-Currency & CDN Speed Optimization",
              desc: "Ensuring sub-second global page loads using edge content delivery networks (CDNs) and structured localized pricing schema.",
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

        <section className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 text-center">
          <h2 className="text-xl font-bold text-white tracking-tight">Expanding Globally?</h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Get expert guidance on structuring your international website for global search engines.
          </p>
          <Link
            href="/contact"
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
