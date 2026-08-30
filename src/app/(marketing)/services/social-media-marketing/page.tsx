import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Users, CheckCircle2, ArrowRight, ShieldCheck, BarChart3 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Social Media Marketing Services | Rohit Gupta",
  description:
    "Social Media Marketing by Rohit Gupta: Instagram, Facebook & LinkedIn strategy, brand profile optimization, organic growth, and lead generation campaigns.",
  path: "/services/social-media-marketing/",
  keywords: [
    "Social Media Marketing Services",
    "Instagram Marketing India",
    "Facebook Marketing",
    "LinkedIn Marketing",
    "Social Media Strategy",
    "Social Media Expert India",
    "Organic Social Growth",
    "Rohit Gupta Social Media",
  ],
});

const WHATS_INCLUDED = [
  { title: "Social Media Strategy", desc: "A tailored growth plan for your business goals and audience. No generic templates." },
  { title: "Profile Optimization", desc: "Optimize your bio, links, and photos across Instagram, Facebook, and LinkedIn." },
  { title: "Monthly Content Calendar", desc: "Plan monthly reels, carousels, and stories to keep your audience engaged." },
  { title: "Instagram Marketing", desc: "Grow on Instagram with viral reels, helpful carousels, and smart hashtag use." },
  { title: "Facebook Marketing", desc: "Build an active community on Facebook with engaging posts and group outreach." },
  { title: "LinkedIn B2B Growth", desc: "Grow your personal brand and company page. Attract high-value business leads." },
  { title: "Competitor Research", desc: "Analyze rival accounts to find what works best in your niche." },
  { title: "Organic Follower Growth", desc: "Gain real followers through quality posts and genuine engagement. No fake bots." },
  { title: "Social Search Optimization", desc: "Make your social profiles easy to find on Instagram, LinkedIn, and Google search." },
  { title: "Lead Generation Calls-to-Action", desc: "Turn profile visitors into website clicks, WhatsApp chats, and paying clients." },
];

const PLATFORMS = [
  { name: "Instagram", color: "text-pink-400" },
  { name: "Facebook", color: "text-blue-400" },
  { name: "LinkedIn", color: "text-sky-400" },
  { name: "YouTube", color: "text-red-400" },
  { name: "X (Twitter)", color: "text-zinc-300" },
];

export default function SocialMediaMarketingPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Social Media Marketing", path: "/services/social-media-marketing/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-social-media-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Social Media Marketing" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            Brand Awareness & Audience Growth
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Social Media Marketing Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Build a strong brand and grow your audience online. Rohit Gupta helps businesses stand out on Instagram, Facebook, and LinkedIn. We turn followers into website traffic, phone calls, and paying customers.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Discuss Social Strategy <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20social%20media%20marketing%20for%20my%20business" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
              WhatsApp Now →
            </Link>
          </div>
        </header>

        {/* Platforms */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            Platforms
          </h3>
          <div className="flex flex-wrap gap-3">
            {PLATFORMS.map((p) => (
              <span key={p.name} className={`px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono font-bold ${p.color}`}>
                {p.name}
              </span>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included — Social Media Marketing
            </h2>
            <p className="text-xs sm:text-sm text-white/60">10-point social media marketing and organic growth service.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-pink-500/30 transition-colors space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Digital Marketing", href: "/services/digital-marketing" },
              { label: "Google Ads", href: "/services/google-ads" },
              { label: "Local SEO", href: "/services/local-seo" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-pink-950/30 via-zinc-950 to-zinc-950 border border-pink-500/20 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Grow Your Social Presence?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch to discuss a social media strategy aligned with your business goals and target audience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Get Social Media Strategy <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://wa.me/919999922123?text=Hi%20Rohit%2C%20I%27d%20like%20to%20discuss%20social%20media%20marketing%20for%20my%20business" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">
              WhatsApp Now →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
