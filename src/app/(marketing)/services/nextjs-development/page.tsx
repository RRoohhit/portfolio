import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Next.js Development & Performance Services — Rohit Gupta",
  description:
    "Next.js web development services by Rohit Gupta: App Router architecture, Server Components, edge deployment, SSR, SSG, and sub-second page performance.",
  path: "/services/nextjs-development/",
  keywords: [
    "Next.js Developer India",
    "Next.js SEO Optimization",
    "React Server Components",
    "Rohit Gupta Next.js",
  ],
});

export default function NextjsDevelopmentPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Next.js Development", path: "/services/nextjs-development/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-nextjs-dev-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Next.js Development" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Next.js App Router Architecture
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Next.js Development Services by Rohit Gupta
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Next.js combines high-speed frontend rendering with built-in search engine optimization features. Rohit Gupta builds full-stack Next.js applications engineered for maximum performance, clean code architecture, and high search engine rankings.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "App Router & Server Components",
              desc: "Leveraging React Server Components (RSC) to minimize client-side JavaScript bundle sizes and accelerate initial page loads.",
            },
            {
              title: "Built-In SEO & Dynamic Metadata API",
              desc: "Utilizing Next.js metadata generation, canonical URL management, and open-graph image builders for automated social and SERP previews.",
            },
            {
              title: "Edge Rendering & Incremental Static Regeneration",
              desc: "Implementing ISR (Incremental Static Regeneration) and edge routes to render content dynamically while maintaining static speed benefits.",
            },
            {
              title: "Lighthouse 100/100 Optimization",
              desc: "Fine-tuning font loading, image optimization (next/image), script priority (next/script), and layout shifts.",
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
          <h2 className="text-xl font-bold text-white tracking-tight">Building a Next.js App?</h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Discuss your Next.js application architecture and search performance requirements with Rohit Gupta.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
          >
            Discuss Next.js Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
