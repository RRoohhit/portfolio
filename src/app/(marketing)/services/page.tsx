import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Search, Code2, Globe, Sparkles, Zap, ArrowRight, ShieldCheck, BarChart3, Layers } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Professional Services — SEO, Digital Marketing & Web Development | Rohit Gupta",
  description:
    "Explore services by Rohit Gupta: Technical SEO, Local SEO, International SEO, Digital Marketing, Google Ads, and Full-Stack React & Next.js Web Development.",
  path: "/services/",
  keywords: [
    "Rohit Gupta services",
    "SEO services India",
    "Technical SEO audit",
    "Digital marketing consultant",
    "Next.js web development",
  ],
});

const SERVICES_LIST = [
  {
    slug: "seo",
    title: "SEO Services by Rohit Gupta",
    icon: Search,
    desc: "Technical SEO, white hat SEO, local SEO and international SEO services designed to improve organic search visibility and website performance.",
    badge: "Core Service",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO Audits & Core Web Vitals",
    icon: Zap,
    desc: "Deep crawl analysis, page speed optimization, rendering, indexation fixes, and JSON-LD schema integration.",
    badge: "Technical",
  },
  {
    slug: "local-seo",
    title: "Local SEO & Google Business Profile Optimization",
    icon: Globe,
    desc: "Dominate geo-targeted search queries, Google Maps pack, local citations, and customer reviews management.",
    badge: "Local",
  },
  {
    slug: "international-seo",
    title: "International & Multi-Regional SEO",
    icon: Layers,
    desc: "Hreflang implementation, international geotargeting, multi-currency site architecture, and global search growth.",
    badge: "Global",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Consultant — Rohit Gupta",
    icon: BarChart3,
    desc: "Data-driven digital marketing strategies combining SEO, paid search (Google Ads), content, and conversion optimization.",
    badge: "Marketing",
  },
  {
    slug: "web-development",
    title: "Full-Stack Web Developer — Rohit Gupta",
    icon: Code2,
    desc: "Fast, responsive and SEO-friendly websites using modern technologies including React, Next.js, JavaScript, TypeScript, and Node.js.",
    badge: "Development",
  },
  {
    slug: "nextjs-development",
    title: "Next.js 15 & React Performance Apps",
    icon: Sparkles,
    desc: "High-performance Server Components, edge caching, sub-second page load times, and search-optimized architecture.",
    badge: "Framework",
  },
];

export default function ServicesPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-services-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Specialized Digital Services
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO, Digital Marketing &amp; Web Development Services
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Rohit Gupta delivers end-to-end digital solutions focused on technical soundess, user experience, search visibility, and sustainable organic business growth.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES_LIST.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.slug}
                className="p-6 rounded-3xl bg-zinc-950 border border-white/10 hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                      {svc.badge}
                    </span>
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {svc.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    {svc.desc}
                  </p>
                </div>

                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
