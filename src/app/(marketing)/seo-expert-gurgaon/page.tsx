import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Gurgaon | Rohit Gupta",
  description:
    "Hire Rohit Gupta — top SEO Expert in Gurgaon. Specializing in B2B Technical SEO, SaaS growth strategy, Next.js web development, and Google Ads.",
  path: "/seo-expert-gurgaon/",
  keywords: [
    "SEO Expert in Gurgaon",
    "B2B SEO Specialist Gurgaon",
    "Cyber City SEO Services",
    "Technical SEO Consultant Gurgaon",
    "Rohit Gupta SEO Gurgaon",
  ],
});

export default function SeoExpertGurgaonPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Gurgaon", path: "/seo-expert-gurgaon/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-gurgaon-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Gurgaon" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Gurgaon B2B &amp; Tech Hub Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Gurgaon — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Grow your business in Gurgaon with B2B SEO. Rohit Gupta helps startups and tech firms in Cyber City, Golf Course Road, and Sohna Road rank #1 on Google. We deliver technical SEO, fast page speeds, and high-value corporate leads.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Gurgaon SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            B2B &amp; Corporate SEO Services for Gurgaon Enterprises
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Win top rankings in Gurgaon with clean code, fast page rendering, and high-intent buyer keywords.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "B2B SaaS & Tech Keywords",
                desc: "Target terms used by decision-makers in Cyber City. We build topic hubs that bring qualified business inquiries.",
              },
              {
                title: "Enterprise Technical Audits",
                desc: "Fix indexing issues and slow rendering on Next.js and React web apps. We ensure fast and smooth crawling.",
              },
              {
                title: "Google Ads & Conversion Tuning",
                desc: "Get high ROI on search ads. We design targeted PPC campaigns to win inbound business leads.",
              },
              {
                title: "White Hat Link Building",
                desc: "Earn links from top tech blogs and industry publications. We build durable domain authority.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 shadow-xl">
                <h3 className="text-base font-bold text-white tracking-tight">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight">Enterprise &amp; B2B SEO Strategy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "High-Intent B2B Keyword Research & Clustering",
              "Technical Next.js & React App Indexation",
              "Core Web Vitals & Sub-Second Rendering Speed",
              "Lead Generation Funnel & Conversion Rate Tuning",
              "Competitor Backlink & Authority Gap Reclamation",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Scale Your Gurgaon Business Search Growth</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get an enterprise-level SEO audit for your Gurgaon company.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Gurgaon SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
