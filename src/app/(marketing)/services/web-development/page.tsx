import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import { Code2, CheckCircle2, ArrowRight, ShieldCheck, Layers, MessageSquare } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development Services | Rohit Gupta",
  description:
    "Web development services by Rohit Gupta: SEO-friendly React & Next.js websites, high-speed business web apps, e-commerce stores, and website redesigns.",
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
  { title: "Business website development", desc: "I build clear, credible, conversion-focused websites that help prospects understand your offer quickly and trust you enough to get in touch." },
  { title: "SEO-friendly architecture", desc: "I build with crawlability, site structure, and performance in mind, so the website supports both rankings and user experience from day one." },
  { title: "React and Next.js builds", desc: "I create fast, modern frontends with solid performance for complex business websites and growth-focused digital products — code I write and maintain myself." },
  { title: "E-commerce and storefront development", desc: "I help brands build or improve storefronts that make products easy to find and buying simple — the details that decide whether carts get completed." },
  { title: "Website redesign and refactoring", desc: "I modernize outdated or slow websites without losing their SEO value, keeping what works while improving speed, structure, and usability." },
  { title: "Speed and Core Web Vitals", desc: "I optimise performance so pages load faster and feel smoother, which helps both user satisfaction and search visibility." },
  { title: "API and backend support", desc: "I build the backend layer where needed — secure APIs, data integration, and business logic for digital services." },
  { title: "Headless CMS integration", desc: "I connect modern frontends to CMS systems so your team can manage content easily without sacrificing delivery speed." },
];

const TECH_STACK = [
  { category: "Frontend", tools: ["React.js", "Next.js 15", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] },
  { category: "Backend", tools: ["Node.js", "Express.js", "REST APIs", "Middleware", "SSR / SSG / ISR"] },
  { category: "Databases & DevOps", tools: ["MongoDB", "PostgreSQL", "Prisma", "Vercel", "Git / GitHub", "Docker"] },
];

const FAQS = [
  {
    question: "Do you build websites only or also help with SEO?",
    answer: "I design and build for both. A website should be fast, clear, and search-friendly — not just visually good. That's why performance and SEO are built into the process from the start, not added later.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes. I can redesign slow or dated websites, improve the structure, and modernise the experience while preserving what already works and protecting your search visibility through the move.",
  },
  {
    question: "Do you build custom business websites or only landing pages?",
    answer: "Both. Whether it's a simple business site, a service platform, or a larger marketing site, I design around the business goal and the path that turns visitors into customers.",
  },
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
      {renderJsonLd(faqGraph(FAQS), "jsonld-web-dev-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Web Development Services" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            Outcome-first web engineering
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Websites that look sharp, load fast, and help your business grow.
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            A great website should do more than look good. It should build trust quickly, explain exactly what you offer, and make it easy for the right people to enquire, buy, or book. I build websites that balance design, speed, conversion, and long-term SEO value — because a pretty site nobody ranks for is just an expensive brochure.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Start a web project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to build or improve my website and need a technical discussion.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-purple-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp chat
            </a>
          </div>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
              What we build
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Websites and digital experiences designed around speed, clarity, and business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BUSINESS_SOLUTIONS.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2 hover:border-purple-500/30 transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-5 shadow-xl">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-400" />
            Technology stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TECH_STACK.map((col, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-purple-400">{col.category}</h4>
                <ul className="space-y-1 text-xs font-mono text-white/80">
                  {col.tools.map((t) => <li key={t}>• {t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "React Development", href: "/services/react-development/" },
              { label: "Next.js Development", href: "/services/nextjs-development/" },
              { label: "Technical SEO", href: "/services/technical-seo/" },
              { label: "SEO Audit", href: "/seo-audit/" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-purple-400 hover:border-purple-500/30 transition-colors">
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-950 border border-purple-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Need a site that actually helps your business move forward?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            We can talk about the current website, the business goal, and the best technical path to make the website more effective.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Start project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
