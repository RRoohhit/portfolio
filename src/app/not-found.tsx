import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, BookOpen, FolderGit2, Gauge, Bot, Phone } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Page Not Found (404) | Rohit Gupta SEO Specialist",
  description:
    "The page you are looking for does not exist. Explore Rohit Gupta's SEO services, case studies, free SEO tools and technical SEO blog.",
  path: "/404",
});

export default function NotFound() {
  return (
    <div className="space-y-10 py-16">
      <div className="bg-zinc-950 border border-white/10 p-8 sm:p-12 rounded-3xl text-center space-y-5 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
          <span>404 — Not Found</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          This Page Ranked Nowhere
        </h1>
        <p className="text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed">
          The URL you requested does not exist on this site. Let us redirect you to
          pages that actually rank #1 — explore SEO services, case studies, free SEO
          tools, and technical articles by Rohit Gupta.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link
          href="/"
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between space-y-4"
        >
          <div className="space-y-2">
            <Home className="w-6 h-6 text-emerald-400" />
            <h2 className="text-sm font-bold text-white">Home</h2>
            <p className="text-xs text-white/60">
              SEO specialist &amp; web developer hiring page.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
            Go Home <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/projects"
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between space-y-4"
        >
          <div className="space-y-2">
            <FolderGit2 className="w-6 h-6 text-emerald-400" />
            <h2 className="text-sm font-bold text-white">Case Studies</h2>
            <p className="text-xs text-white/60">
              Verified Rank #1 &amp; 4,766% traffic growth proof.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
            View Projects <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/seo-tools"
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between space-y-4"
        >
          <div className="space-y-2">
            <Gauge className="w-6 h-6 text-emerald-400" />
            <h2 className="text-sm font-bold text-white">Free SEO Tools</h2>
            <p className="text-xs text-white/60">
              Audit, schema generator, SERP preview &amp; AI optimizer.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
            Open Tools <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/blog"
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between space-y-4"
        >
          <div className="space-y-2">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <h2 className="text-sm font-bold text-white">SEO Blog</h2>
            <p className="text-xs text-white/60">
              Core Web Vitals, JSON-LD &amp; White Hat guides.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
            Read Articles <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Link
          href="/ai-lab"
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between space-y-4"
        >
          <div className="space-y-2">
            <Bot className="w-6 h-6 text-emerald-400" />
            <h2 className="text-sm font-bold text-white">AI SEO Lab</h2>
            <p className="text-xs text-white/60">
              Keyword density, AI search optimizer &amp; content tools.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
            Open AI Lab <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/contact"
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between space-y-4"
        >
          <div className="space-y-2">
            <Phone className="w-6 h-6 text-emerald-400" />
            <h2 className="text-sm font-bold text-white">Contact Rohit</h2>
            <p className="text-xs text-white/60">
              Free SEO audit &amp; 90-day ranking roadmap. Noida, Delhi, India.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
            Get in Touch <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}
