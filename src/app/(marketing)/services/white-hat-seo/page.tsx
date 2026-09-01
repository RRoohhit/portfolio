import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ShieldCheck, CheckCircle2, ArrowRight, BookOpen, AlertTriangle } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "White Hat SEO Services India | Penalty-Free — Rohit Gupta",
  description:
    "White Hat SEO services by Rohit Gupta: 100% Google Search Essentials compliant SEO, editorial link building & Core Web Vitals with zero penalty risk.",
  path: "/services/white-hat-seo/",
  keywords: [
    "white hat seo services",
    "white hat seo firm",
    "white hat seo agency india",
    "ethical seo services",
    "penalty-free seo india",
    "google compliant seo",
    "white hat link building",
    "hire white hat seo expert",
    "Rohit Gupta White Hat SEO",
  ],
});

const PRINCIPLES = [
  { title: "We write for people, not search bots", desc: "Every page starts with what a real customer is trying to find out. If it's useful to a human, it tends to rank well too — no keyword stuffing needed." },
  { title: "We stay inside Google's rules", desc: "Google publishes what it considers spam and what it doesn't. I stay on the safe side of that line on purpose, so you never wake up to a penalty and a crashed ranking." },
  { title: "We build real trust and expertise", desc: "Clear author names, honest reviews, and verifiable data. Google rewards sites that look like they're run by real experts — because that's what they want to show users." },
  { title: "We earn links, we don't buy them", desc: "I get links the slow, honest way: genuinely useful content, guest spots on sites that matter, and relationships. It takes longer, but it lasts — and it can't be taken away." },
  { title: "We build fast, clean websites", desc: "A slow site struggles to rank no matter what. I write clean code that loads quickly and is easy for Google to crawl, so your speed helps you instead of holding you back." },
  { title: "We play the long game", desc: "I'm not chasing a quick spike that dips next month. I create content and authority that keep bringing in clicks and links for years, steadily compounding." },
];

export default function WhiteHatSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "White Hat SEO", path: "/services/white-hat-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-white-hat-seo-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "White Hat SEO" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            100% Ethical White Hat SEO Firm &amp; Services
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            White Hat SEO Services &amp; Firm India
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            "White hat" simply means earning your rankings the proper way — through a fast, well-built website, genuinely helpful content, and links that real people actually want to share. It's the only kind of SEO I do. I run a small white hat SEO practice from Noida, and my real goal is to grow your search traffic in a way that survives Google's updates — not one that crashes after the next core update rolls out.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Consult White Hat SEO Firm <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20White%20Hat%20SEO%20services%20for%20my%20business" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
              WhatsApp Now →
            </Link>
          </div>
        </header>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            Why White Hat Beats the Quick Shortcuts
          </h2>
          <p className="text-sm text-white/75 leading-relaxed">
            Google updates its algorithm regularly, and every update is a surprise test. Sites that got ahead with spammy links, spun content, or paid link networks tend to crater the moment a core update lands — and recovering from a manual action takes months. White hat SEO is slower to start, but it builds real domain authority that actually gains ground after every update instead of losing it. I'd rather grow you steadily than spike you and lose you.
          </p>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            What I Refuse to Do (and Why It Protects You)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { t: "Buy links or use link farms", b: "Paid link packages and private blog networks can get your domain deindexed. I never touch them." },
              { t: "Stuff keywords or hide text", b: "Writing for search bots instead of people backfires and reads terribly. It's bad SEO and bad content." },
              { t: "Spin or copy content", b: "Duplicated and spun articles add no real value and carry real risk. Every piece I write is original." },
              { t: "Promise '#1 in a week'", b: "Nobody can honestly guarantee instant rankings. I set realistic timelines and meet them." },
            ].map((item) => (
              <div key={item.t} className="flex items-start gap-3 p-4 rounded-2xl bg-black border border-white/10">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">{item.t}</p>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Our Core White Hat Principles
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Technical SEO", href: "/services/technical-seo/" },
              { label: "On-Page SEO", href: "/services/on-page-seo/" },
              { label: "Off-Page SEO", href: "/services/off-page-seo/" },
              { label: "Free SEO Audit", href: "/seo-audit/" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/20 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Grow Your Traffic the Safe Way</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            If you're tired of quick fixes that fall apart, let's build something that lasts. Tell me where your business stands and I'll show you a clean, white hat path forward.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Get Ethical SEO Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
