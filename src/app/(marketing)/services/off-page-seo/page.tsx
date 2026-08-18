import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Link2, CheckCircle2, ArrowRight, ShieldCheck, Target, Search } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Off-Page SEO & Link Building Services — Rohit Gupta",
  description:
    "Off-Page SEO & link building services by Rohit Gupta: backlink audit, competitor link-gap analysis, digital PR, authority building, and ethical outreach.",
  path: "/services/off-page-seo/",
  keywords: [
    "Off-Page SEO Services",
    "Link Building Services India",
    "Backlink Audit",
    "Digital PR SEO",
    "Authority Building",
    "White Hat Link Building",
    "Off-Page SEO Expert",
    "Rohit Gupta Off-Page SEO",
  ],
});

const WHATS_INCLUDED = [
  { title: "Backlink Audit", desc: "A thorough audit of your existing backlink profile using Ahrefs/Semrush to identify low-quality, spammy, or toxic links that may be suppressing your rankings." },
  { title: "Competitor Backlink Analysis", desc: "Reverse-engineering the backlink profiles of your top-ranking competitors to identify link sources, types, and authority patterns worth replicating." },
  { title: "Link Gap Analysis", desc: "Identifying websites that link to your competitors but not to you — revealing the highest-priority, most relevant link acquisition targets in your niche." },
  { title: "Digital PR & Brand Mentions", desc: "Building awareness and editorial links through newsworthy content, data-driven studies, and outreach to relevant publications and journalists in your industry." },
  { title: "Niche-Relevant Outreach", desc: "Manual outreach to topically relevant websites, blogs, and resource pages to earn contextual backlinks that improve both authority and organic rankings." },
  { title: "Citation Building", desc: "Building accurate, consistent business citations across industry directories and local data aggregators — essential for both Local SEO and brand authority signals." },
  { title: "Broken Link Reclamation", desc: "Identifying external websites with broken links pointing to similar resources and offering your content as a high-quality replacement — an efficient, white-hat link acquisition tactic." },
  { title: "Unlinked Brand Mention Outreach", desc: "Finding websites that mention your business name without linking and converting those mentions into followed backlinks." },
  { title: "Toxic Link Disavow", desc: "Where necessary, preparing a clean disavow file through Google Search Console to disassociate your site from spammy or harmful backlinks." },
  { title: "Authority & Trust Signal Building", desc: "Ensuring your website's E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) are reinforced through high-quality, credible external references." },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Backlink Audit",
    desc: "Full audit of your existing link profile: domain ratings, anchor text distribution, follow/nofollow ratio, toxic links, and link velocity.",
  },
  {
    step: "02",
    title: "Competitor & Gap Analysis",
    desc: "We map competitor backlink sources and find the exact links they have that you don't — then prioritize by relevance, authority, and reachability.",
  },
  {
    step: "03",
    title: "Outreach Strategy",
    desc: "We build a targeted list of link acquisition opportunities and craft personalized, value-first outreach to earn placements naturally.",
  },
  {
    step: "04",
    title: "Link Acquisition",
    desc: "Execute the outreach, create supporting content where needed, and track placement confirmations — every link earned, logged, and verified.",
  },
  {
    step: "05",
    title: "Monthly Reporting",
    desc: "Monthly report showing new links acquired, domain authority changes, anchor text profile, and correlation with ranking improvements.",
  },
];

export default function OffPageSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Off-Page SEO", path: "/services/off-page-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-off-page-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Off-Page SEO" },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Link2 className="w-4 h-4" />
            Authority & Trust Building
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Off-Page SEO & Link Building Services
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Off-Page SEO builds the external authority signals that Google uses to evaluate your website's credibility and
            trustworthiness relative to competitors. This is not about volume — it is about quality, relevance, and
            editorial legitimacy. Rohit Gupta focuses exclusively on White Hat link building through digital PR,
            outreach, citation building, and brand authority — never spammy link schemes.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Get Backlink Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* White Hat Notice */}
        <section className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/25 flex items-start gap-4">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-bold text-white">100% White Hat — No Spammy Link Schemes</p>
            <p className="text-xs text-white/65 leading-relaxed">
              Every link built follows Google's guidelines. No PBNs, no paid link networks, no mass directory submissions.
              Only quality, relevant, editorial links that build sustainable authority and reduce penalty risk.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              What's Included — Off-Page SEO
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              A quality-first, 10-point off-page and link building service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            The Off-Page SEO Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-emerald-400/40">{step.step}</span>
                  <h3 className="text-sm font-bold text-white tracking-tight">{step.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "On-Page SEO", href: "/services/on-page-seo" },
              { label: "Technical SEO", href: "/services/technical-seo" },
              { label: "White Hat SEO", href: "/services/white-hat-seo" },
              { label: "SEO Audit", href: "/seo-audit" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
              >
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Build Real Authority?
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a backlink audit and competitor link analysis to understand exactly where your site stands and
            what quality links you need to outrank the competition.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
          >
            Request Backlink Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
