import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Code2, CheckCircle2, ArrowRight, Zap, Cpu, Layers } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Full-Stack Web Developer — Rohit Gupta",
  description:
    "Rohit Gupta develops fast, responsive and SEO-friendly websites and web applications using modern technologies including React, Next.js, JavaScript, TypeScript and Node.js.",
  path: "/services/web-development/",
  keywords: [
    "Full Stack Web Developer Rohit Gupta",
    "Rohit Gupta web developer",
    "React Developer",
    "Next.js Developer",
    "SEO friendly Web Development",
  ],
});

export default function WebDevelopmentPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Web Development", path: "/services/web-development/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-web-dev-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Full-Stack Web Developer" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            Modern Web Architecture
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Full-Stack Web Developer — Rohit Gupta
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Rohit Gupta develops fast, responsive and SEO-friendly websites and web applications using modern technologies including React, Next.js, JavaScript, TypeScript and Node.js.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "React.js & Next.js Development",
              desc: "Building high-performance frontend interfaces with React, Next.js App Router, server-side rendering (SSR), and static site generation (SSG).",
            },
            {
              title: "TypeScript & Scalable JavaScript",
              desc: "Writing clean, type-safe, maintainable codebases built for long-term scalability, performance, and developer productivity.",
            },
            {
              title: "Node.js & Backend REST APIs",
              desc: "Developing fast server-side logic, API integrations, microservices, and database connectors with Node.js and Express.",
            },
            {
              title: "Performance & Core Web Vitals Optimization",
              desc: "Architecting web apps from scratch to achieve sub-second page loads, instant interaction response, and zero layout shift.",
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
            Need a Fast, SEO-Friendly Website?
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Rohit Gupta to discuss building your next React/Next.js web application.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
          >
            Start Web Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
