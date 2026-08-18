import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Code2, CheckCircle2, ArrowRight, Zap, ShieldCheck, Layers, ShoppingCart, Globe } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development Services — SEO-Friendly React & Next.js Websites | Rohit Gupta",
  description:
    "Web development services by Rohit Gupta: Business website development, SEO-friendly websites, React development, Next.js 15 apps, e-commerce stores, website redesigns, speed tuning, and full-stack web applications.",
  path: "/services/web-development/",
  keywords: [
    "Web Development Services",
    "SEO-Friendly Website Development",
    "Business Website Developer",
    "React Developer India",
    "Next.js Development Services",
    "E-Commerce Website Developer",
    "Website Redesign Services",
    "Website Speed Optimization",
    "Rohit Gupta Web Developer",
  ],
});

const BUSINESS_SOLUTIONS = [
  {
    title: "Business Website Development",
    desc: "Clean, responsive, high-converting corporate and service business websites designed for maximum trust, brand authority, and customer inquiries.",
  },
  {
    title: "SEO-Friendly Web Architecture",
    desc: "Websites engineered from day one for search bots: semantic HTML5, zero render blocking, automatic XML sitemaps, canonicals, and Schema markup.",
  },
  {
    title: "React & Next.js Web Apps",
    desc: "Modern single-page applications and server-rendered web apps built with Next.js 15, App Router, React Server Components, and TypeScript.",
  },
  {
    title: "E-Commerce Website Development",
    desc: "Custom e-commerce store builds and Shopify/WooCommerce theme customization optimized for product schema, speed, and add-to-cart conversion rate.",
  },
  {
    title: "Website Redesign & Refactoring",
    desc: "Migrating slow, outdated WordPress or legacy PHP sites into fast, modern React/Next.js architectures while preserving existing URL equity and rankings.",
  },
  {
    title: "Website Speed & Core Web Vitals",
    desc: "Re-architecting existing web pages to achieve 90+ Lighthouse performance scores, LCP < 1.2s, INP < 50ms, and zero Cumulative Layout Shift.",
  },
  {
    title: "Node.js Backend & API Development",
    desc: "Secure, scalable server-side REST APIs, database integration (MongoDB/PostgreSQL), authentication, and third-party API integrations.",
  },
  {
    title: "Headless CMS Integration",
    desc: "Connecting React/Next.js frontends to Headless CMS platforms (Sanity, Strapi, Contentful) for easy content management without speed penalties.",
  },
];

const TECH_STACK = [
  { category: "Frontend", tools: ["React.js", "Next.js 15", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] },
  { category: "Backend", tools: ["Node.js", "Express.js", "REST APIs", "Middleware", "SSR / SSG / ISR"] },
  { category: "Databases & DevOps", tools: ["MongoDB", "PostgreSQL", "Prisma", "Vercel", "Git / GitHub", "Docker"] },
];

export default function WebDevelopmentPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Web Development", path: "/services/web-development/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-web-dev-hub-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Web Development Services" },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            Outcome-First Web Engineering
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Web Development Services
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            A website should be more than a digital brochure — it should be a high-performance customer acquisition engine. Rohit Gupta builds fast, responsive, and SEO-friendly websites using modern technologies (React, Next.js, TypeScript, Node.js), engineered to convert visitors into inquiries and achieve top Core Web Vitals scores.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Start Web Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/react-development"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-purple-500/40 transition-colors"
            >
              React Development Page
            </Link>
          </div>
        </header>

        {/* Business Solutions Grid */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
              Business-Outcome Web Development Solutions
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Web development tailored around performance, search visibility, and conversion goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BUSINESS_SOLUTIONS.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2 hover:border-purple-500/30 transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Breakdown */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-5 shadow-xl">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-400" />
            Technology Stack &amp; Frameworks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TECH_STACK.map((col, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase text-purple-400">{col.category}</h3>
                <ul className="space-y-1 text-xs font-mono text-white/80">
                  {col.tools.map((t) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "React Development", href: "/services/react-development" },
              { label: "Next.js Development", href: "/services/nextjs-development" },
              { label: "Technical SEO", href: "/services/technical-seo" },
              { label: "Free SEO Audit", href: "/seo-audit" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-purple-400 hover:border-purple-500/30 transition-colors"
              >
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-950 border border-purple-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Need a High-Performance Website?</h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Rohit Gupta to discuss building or redesigning your website.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
          >
            Start Web Development Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
