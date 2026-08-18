import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Code2, CheckCircle2, ArrowRight, Zap, ShieldCheck, Layers } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "React Development Services — Custom React & Next.js Apps | Rohit Gupta",
  description:
    "Custom React.js web development by Rohit Gupta: component-driven architecture, high-speed single page applications, SSR/SSG integration, state management, API integration, and Core Web Vitals optimization.",
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
            React is the industry-standard frontend library for building fast, interactive web applications. Rohit Gupta combines deep React.js expertise with SEO best practices, ensuring your application is not only interactive and responsive but also search engine friendly and blazingly fast.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
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

        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h2>
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
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Need a High-Performance React Web App?</h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Discuss your project requirements with Rohit Gupta today.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Contact React Developer <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
