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
  { title: "Backlink Audit", desc: "Audit your backlink profile. We find and fix spammy or toxic links that hurt your Google rankings." },
  { title: "Competitor Link Review", desc: "Check where your top rivals get links. We find quality backlink sources you can replicate." },
  { title: "Link Gap Analysis", desc: "Find sites linking to competitors but not to you. We target the best link opportunities in your niche." },
  { title: "Digital PR & Brand Links", desc: "Earn press links with data-driven studies and original stories. We pitch top industry blogs." },
  { title: "Niche Editorial Outreach", desc: "Reach out to relevant blogs and resource pages. We earn natural links that build trust." },
  { title: "Directory Citations", desc: "Build accurate citations on trusted directories. This helps local SEO and brand trust signals." },
  { title: "Broken Link Fixes", desc: "Find broken links on niche sites and offer your guide as a replacement. It earns easy white-hat links." },
  { title: "Brand Mention Outreach", desc: "Find sites that mention your business without linking. We ask them to turn mentions into links." },
  { title: "Toxic Link Removal", desc: "Create a clean Google Search Console disavow file. This removes penalty risk from bad backlinks." },
  { title: "Author & Trust Signals", desc: "Strengthen your E-E-A-T signals with authoritative links from respected industry sources." },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Backlink Profile Audit",
    desc: "We check your current links, anchor text balance, and toxic spam signals.",
  },
  {
    step: "02",
    title: "Competitor Link Gap",
    desc: "We find the best links your competitors have that you are missing.",
  },
  {
    step: "03",
    title: "Outreach & Pitching",
    desc: "We build a curated outreach list and pitch helpful, custom content.",
  },
  {
    step: "04",
    title: "Link Placement & Review",
    desc: "We track every live link to verify indexation and anchor text quality.",
  },
  {
    step: "05",
    title: "Monthly Progress Reports",
    desc: "We report all new backlinks gained and track your organic ranking gains.",
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
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Get Backlink Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20off-page%20SEO%20and%20link%20building%20for%20my%20site"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
            >
              WhatsApp Now →
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
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            The Off-Page SEO Process
          </h3>
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
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h3>
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
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Build Real Authority?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a backlink audit and competitor link analysis to understand exactly where your site stands and
            what quality links you need to outrank the competition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
            >
              Request Backlink Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20get%20a%20backlink%20audit%20for%20my%20website"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
            >
              WhatsApp Now →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
