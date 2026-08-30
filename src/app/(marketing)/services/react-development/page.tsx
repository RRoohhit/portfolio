import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Code2, CheckCircle2, ArrowRight, Zap, ShieldCheck, Layers, FileText } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "React Development Services | Rohit Gupta",
  description:
    "Custom React development services by Rohit Gupta: high-speed web applications, component architecture, SSR/SSG rendering, and Core Web Vitals tuning.",
  path: "/services/react-development/",
  keywords: [
    "React Development Services",
    "React Developer India",
    "React.js Developer Noida",
    "Next.js Development",
    "Single Page Applications",
    "React Web Development",
    "Rohit Gupta React Developer",
  ],
});

const WHATS_INCLUDED = [
  { title: "Custom React Application Development", desc: "Building scalable, maintainable React web applications from scratch with modern ES6+/TypeScript standards and clean architecture." },
  { title: "React Component Architecture", desc: "Designing reusable, modular component design systems that simplify codebase maintenance and speed up future feature development." },
  { title: "Next.js & SSR/SSG Integration", desc: "Leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) in Next.js to combine React flexibility with perfect search engine indexability." },
  { title: "State Management & Data Flow", desc: "Implementing clean state management (React Context, Zustand, Redux Toolkit) for complex interactive features and seamless user flows." },
  { title: "REST & GraphQL API Integration", desc: "Connecting React frontends to Node.js, Express, Headless CMS, or third-party APIs with robust error handling and loading states." },
  { title: "Core Web Vitals & Speed Optimization", desc: "Optimizing bundle sizes, code splitting, lazy loading, and rendering performance for sub-second page loads." },
];

const TECH_STACK = [
  { category: "Frontend", techs: ["React 18+", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/UI"] },
  { category: "State & Data", techs: ["React Context", "Zustand", "TanStack Query", "GraphQL", "REST APIs"] },
  { category: "Testing", techs: ["Jest", "React Testing Library", "Cypress", "Vitest"] },
  { category: "DevOps", techs: ["Vercel", "GitHub Actions", "Docker", "AWS", "CI/CD"] },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Project Scope & Design",
    desc: "We discuss your product goals, user flows, and tech requirements to design clean React components.",
  },
  {
    step: "02",
    title: "Component Building",
    desc: "We build a modular component library from scratch. Each piece is testable and easy to maintain.",
  },
  {
    step: "03",
    title: "API & Data Integration",
    desc: "We connect your backend APIs and handle loading and error states smoothly.",
  },
  {
    step: "04",
    title: "Speed & SEO Tuning",
    desc: "We optimize code bundles, add lazy loading, and tune Core Web Vitals for sub-second speeds.",
  },
  {
    step: "05",
    title: "Testing & Launch",
    desc: "We test across devices and browsers, set up CI/CD, and deploy with zero downtime.",
  },
];

export default function ReactDevelopmentPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "React Development", path: "/services/react-development/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-react-dev-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "React Development" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            Modern Frontend Architecture
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            React Development Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Build fast, modern React web applications. Rohit Gupta combines clean TypeScript code with technical SEO. We deliver reactive interfaces that load instantly and rank high on Google.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Hire React Developer <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included in React Development
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-blue-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            Technologies &amp; Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECH_STACK.map((group) => (
              <div key={group.category} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
                <h4 className="text-xs font-mono uppercase text-blue-400 font-bold tracking-wider">{group.category}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.techs.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-400" />
            The React Development Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-blue-500/30 transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-blue-400/40">{step.step}</span>
                  <h4 className="text-sm font-bold text-white tracking-tight">{step.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Common Questions</h3>
          <div className="space-y-3">
            <details className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-blue-500/30 transition-colors group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-white tracking-tight text-sm">
              </summary>
              <p className="text-xs text-white/65 leading-relaxed mt-3">
                Next.js adds Server-Side Rendering, Static Generation, API routes, and automatic code splitting — eliminating build config headaches. If you need SEO, fast page loads, or a full-stack app, Next.js is the obvious choice. Plain React works for dashboards and internal tools.
              </p>
            </details>
          </div>
        </section>

        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related React &amp; Web Application Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Full-Stack Web Development", href: "/services/web-development" },
              { label: "Next.js Development", href: "/services/nextjs-development" },
              { label: "Technical SEO", href: "/services/technical-seo" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/40 via-zinc-950 to-zinc-950 border border-blue-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Build Your React Application?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Describe your project vision and we'll scope requirements, provide an estimate, and discuss the architecture. Most clients see their first working prototype within 2-3 weeks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Get Project Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20a%20React%20project" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
              WhatsApp Now →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
