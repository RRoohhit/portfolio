import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Next.js Development & Performance Services — Rohit Gupta",
  description:
    "Next.js web development by Rohit Gupta: App Router architecture, React Server Components, SSR/SSG rendering, and sub-second page load performance.",
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

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Why Next.js Is the Preferred Framework for Modern SEO
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Next.js combines server-side rendering (SSR), static site generation (SSG), and edge execution into a powerful framework that satisfies both Google search crawlers and modern web users.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
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
                  <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Extended Next.js Technical Performance Section for Word Count */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-5 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Next.js Core Web Vitals &amp; Code Architecture Standards
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
            Search engine algorithms heavily penalize slow-loading web applications with poor Cumulative Layout Shift (CLS) or high Time to First Byte (TTFB). By leveraging Next.js dynamic routing, serverless API routes, and optimized media assets, Rohit Gupta ensures your application achieves top Core Web Vitals scores across all mobile and desktop devices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">Zero-JS Hydration</span>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Static content is pre-rendered on the server so search engine bots index raw HTML without waiting for client-side JavaScript execution.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">Automated WebP/AVIF</span>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Next.js Image component automatically resizes, compresses, and serves modern AVIF/WebP images tailored to the user screen viewport.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">Clean Schema Integration</span>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Inject valid JSON-LD structured data directly into Next.js head layouts to enable rich snippet search cards on Google.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 text-center">
          <h3 className="text-xl font-bold text-white tracking-tight">Building a Next.js App?</h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Discuss your Next.js application architecture and search performance requirements with Rohit Gupta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Discuss Next.js Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20a%20Next.js%20development%20project"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
            >
              WhatsApp Now →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
