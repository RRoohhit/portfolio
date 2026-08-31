import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  Search, Code2, Globe, Sparkles, Zap, ArrowRight, ShieldCheck, BarChart3, Layers, MapPin,
  FileText, Link2, ShoppingCart, TrendingUp, Users, Layout, MessageSquare, Megaphone, PenTool,
  Rocket, CheckCircle2, Wrench, BadgeCheck, Star
} from "lucide-react";
import { CONTACT } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO, Marketing & Web Development Services | Rohit Gupta",
  description:
    "All services by Rohit Gupta: SEO, local SEO, backlinks, technical SEO, Google Ads, social media, WordPress, content & web development. Hire easy.",
  path: "/services/",
  keywords: [
    "hire seo expert india",
    "complete website seo services",
    "google business profile optimization",
    "off page seo backlink building",
    "technical seo services",
    "google ads management india",
    "social media marketing services",
    "wordpress development company",
    "website development services",
    "content update services",
  ],
});


const SEARCH_SERVICES = [
  {
    slug: "seo",
    title: "Complete Website SEO",
    icon: Search,
    desc: "The full package — I take your website from 'nobody can find it' to 'ranked #1 on Google' using ethical, white hat methods only.",
    includes: ["Technical SEO", "On-page optimization", "Off-page authority", "Content strategy", "Keyword research"],
    cta: "Explore Full SEO",
  },
  {
    slug: "local-seo",
    title: "Local SEO & Google Business Profile",
    icon: MapPin,
    desc: "Perfect for shops, clinics, offices and any business with a physical location. I get you visible on Google Maps and in 'near me' searches.",
    includes: ["GBP setup & optimization", "Reviews strategy", "Local citations", "Map 3-Pack ranking"],
    cta: "Rank My Local Business",
  },
  {
    slug: "on-page-seo",
    title: "On-Page & Technical SEO + Speed",
    icon: Wrench,
    desc: "I fix what's inside your website — titles, headings, content structure, schema, page speed and Core Web Vitals — so Google can read and rank it.",
    includes: ["Title & meta optimization", "Schema / structured data", "Core Web Vitals fix", "Site speed improvement", "Mobile optimization"],
    cta: "Improve My Website",
  },
  {
    slug: "off-page-seo",
    title: "Off-Page SEO & Backlink Building",
    icon: Link2,
    desc: "I earn real, high-quality backlinks from trusted websites — so Google sees your site as an authority worth ranking on page one.",
    includes: ["White hat link building", "Guest posts", "Digital PR", "Local citations", "Competitor link analysis"],
    cta: "Build My Authority",
  },
];

const GROWTH_SERVICES = [
  {
    slug: "google-ads",
    title: "Google Ads & Meta Ads Management",
    icon: TrendingUp,
    desc: "Want customers today, not in 6 months? I set up and manage paid ads that bring quick, measurable leads while your SEO grows long-term.",
    includes: ["Campaign setup", "Keyword targeting", "Ad copy & creatives", "Budget management", "Conversion tracking"],
    cta: "Get Leads From Ads",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Management & Digital Marketing",
    icon: Megaphone,
    desc: "I handle your Instagram, Facebook and LinkedIn — profiles, content, posting and engagement — so your brand stays visible and builds trust every day.",
    includes: ["Profile optimization", "Content calendar", "Posting & scheduling", "Engagement", "Competitor analysis"],
    cta: "Run My Social Media",
  },
  {
    slug: "content-seo",
    title: "Content Update, Images & Posting",
    icon: PenTool,
    desc: "Fresh content is what Google loves. I write/update articles, optimize images, and keep your website active so search engines keep coming back.",
    includes: ["Blog writing & updates", "Image optimization", "Page content refresh", "On-site posting", "Weekly/monthly plans"],
    cta: "Refresh My Content",
  },
];

const BUILD_SERVICES = [
  {
    slug: "wordpress-development",
    title: "WordPress & CMS Services",
    icon: Layout,
    desc: "From a brand-new WordPress website to fixing a slow one — I build and optimize WordPress sites that are fast, secure and SEO-ready out of the box.",
    includes: ["Custom WordPress themes", "WooCommerce stores", "Speed optimization", "Security & malware cleanup", "CMS migration"],
    cta: "Build My WordPress Site",
  },
  {
    slug: "web-development",
    title: "Website Development",
    icon: Code2,
    desc: "Need a modern, fast website? I develop high-performance websites with React and Next.js that load in under a second and rank well on Google.",
    includes: ["Business websites", "eCommerce stores", "Next.js / React apps", "Speed-first build", "SEO-friendly structure"],
    cta: "Develop My Website",
  },
];

const FAQS = [
  {
    question: "Which service do I need if I'm starting from zero?",
    answer:
      "Start with Complete Website SEO. It covers everything — technical fixes, on-page optimization, content and backlinks — and we can add Google Business Profile, ads or social media later if your business needs them. Book a free audit first and I'll tell you exactly what matters most for your website.",
  },
  {
    question: "Do I need local SEO, ads, or social media too?",
    answer:
      "It depends on your business. If customers visit you physically, local SEO (Google Business Profile) is a must. If you want customers quickly, Google Ads helps immediately. Social media builds brand trust over time. In your free strategy call, I'll give you an honest, prioritized recommendation — no upsells.",
  },
  {
    question: "How do I hire you for a specific service?",
    answer:
      "Simple — click any 'Start' button or go to the contact page, tell me which service you need and share your website URL. You'll get a free audit and a clear plan with transparent, fixed pricing before you commit anything.",
  },
  {
    question: "Do you offer all these services for one monthly price?",
    answer:
      "Yes — the Complete Website SEO package bundles everything (SEO, local listing, content, backlinks) at a single monthly rate. Ads and social media can be added as separate monthly services. Every plan is transparent with no hidden fees and you can cancel anytime.",
  },
];
export default function ServicesPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-services-breadcrumb")}
      {renderJsonLd(faqGraph(FAQS), "jsonld-services-faq")}

      <div className="space-y-14 sm:space-y-20 pt-24 lg:pt-28 pb-16 max-w-6xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services" },
          ]}
        />

        {/* HERO */}
        <header className="relative overflow-hidden bg-zinc-950 border border-white/10 p-6 sm:p-12 rounded-3xl space-y-6 shadow-2xl text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            All Services in One Place — Simple &amp; Transparent
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Everything Your Business Needs to <span className="text-gradient">Grow Online</span>
          </h1>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
            SEO, Google Maps, paid ads, social media, content and web development — I handle it all, so you don&apos;t have to chase five different agencies. Pick the service you need, or let the complete package do everything.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact/"
              className="btn-3d-emerald text-xs font-mono font-black py-3.5 px-7 flex items-center gap-2 shadow-lg"
            >
              <Rocket className="w-4 h-4" />
              <span>Get a Free Growth Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I'd like to know which services fit my business.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-7 flex items-center gap-2 hover:text-emerald-400"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

          {/* Quick trust strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
            {[
              { icon: CheckCircle2, label: "100% White Hat, penalty-free" },
              { icon: BadgeCheck, label: "No lock-in, cancel anytime" },
              { icon: Star, label: "5.0★ rated by clients" },
              { icon: Users, label: "Pan India + Worldwide" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 justify-center p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <t.icon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[10px] font-mono text-white/75">{t.label}</span>
              </div>
            ))}
          </div>
        </header>
{/* FEATURED ALL-IN-ONE PACKAGE */}
        <section className="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/50 via-zinc-950 to-zinc-950 p-6 sm:p-10 shadow-2xl">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                <BadgeCheck className="w-3.5 h-3.5" />
                <span>Recommended — The Complete Package</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Complete Website SEO — <span className="text-gradient">One Expert, Everything Included</span>
              </h2>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Instead of hiring 4 different people, I become your single growth partner and handle your entire online presence — SEO, local listing, content, social media and ads.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  "Full website SEO (on-page + off-page + technical)",
                  "Google Business Profile optimization",
                  "Content writing & image optimization",
                  "Social media management",
                  "Google Ads setup & management",
                  "Website speed & Core Web Vitals fixes",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/85">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-xs font-mono uppercase tracking-widest text-white/50 font-bold">Starting at</div>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono">₹15,000<span className="text-lg text-white/50">/mo</span></div>
              <p className="text-xs text-white/60 leading-relaxed max-w-xs">
                One transparent monthly rate. Includes free SEO audit worth ₹5,000. No hidden fees, cancel anytime.
              </p>
              <Link
                href="/contact/"
                className="btn-3d-emerald w-full py-3.5 justify-center text-xs font-mono font-black flex items-center gap-2 group"
              >
                <Rocket className="w-4 h-4" />
                <span>Start With a Free Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
{/* SEO SERVICES */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
            <Search className="w-4 h-4" />
            <span>Rank on Google — SEO Services</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Get Found by Customers Who Are Searching Right Now
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-3xl">
            These four services cover every way people find businesses on Google — pick the one you need or combine them for faster results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {SEARCH_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="card-3d-interactive p-6 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="icon-3d w-10 h-10 rounded-xl text-emerald-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-tight leading-snug">{svc.title}</h4>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">{svc.desc}</p>
                    <ul className="space-y-1.5 pt-1">
                      {svc.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-[11px] text-white/60 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70 shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="btn-3d-dark w-full py-3 justify-center text-xs font-mono font-bold hover:text-emerald-400 flex items-center gap-2"
                  >
                    <span>{svc.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* GROWTH SERVICES (ADS, SOCIAL, CONTENT) */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
            <TrendingUp className="w-4 h-4" />
            <span>Bring Customers Faster — Paid Ads, Social &amp; Content</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Grow Faster with Ads, Social Media &amp; Fresh Content
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-3xl">
            SEO takes a few months. These services bring visibility and engagement while it compounds — and keep your brand loved by customers every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {GROWTH_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="card-3d-interactive p-6 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="icon-3d w-10 h-10 rounded-xl text-amber-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h4 className="text-base font-bold text-white tracking-tight leading-snug">{svc.title}</h4>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">{svc.desc}</p>
                    <ul className="space-y-1.5 pt-1">
                      {svc.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-[11px] text-white/60 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="btn-3d-dark w-full py-3 justify-center text-xs font-mono font-bold hover:text-amber-400 flex items-center gap-2"
                  >
                    <span>{svc.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* BUILD SERVICES (WEB DEVELOPMENT) */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-violet-400">
            <Code2 className="w-4 h-4" />
            <span>Building Blocks — Website &amp; CMS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Build or Fix Your Website the Right Way
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-3xl">
            A great website is the foundation of everything. Whether you need a new site or your current one is slow and outdated — I build it fast, secure and SEO-ready.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {BUILD_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="card-3d-interactive p-6 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="icon-3d w-10 h-10 rounded-xl text-violet-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-tight leading-snug">{svc.title}</h4>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">{svc.desc}</p>
                    <ul className="space-y-1.5 pt-1">
                      {svc.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-[11px] text-white/60 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-400/70 shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="btn-3d-dark w-full py-3 justify-center text-xs font-mono font-bold hover:text-violet-400 flex items-center gap-2"
                  >
                    <span>{svc.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW TO HIRE */}
        <section className="card-3d-interactive p-6 sm:p-8 rounded-3xl space-y-5">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            How to Hire Me — It&apos;s Really This Simple
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: "1", title: "Tell me what you need", desc: "Click any 'Start' button or WhatsApp me. Share your website link and your goal in one message." },
              { step: "2", title: "Get a free audit & plan", desc: "I review your site and send a simple, honest plan with clear pricing — no jargon, no pressure." },
              { step: "3", title: "I start working", desc: "Once you say yes, I begin immediately. You get weekly updates and a monthly report in plain language." },
            ].map((s) => (
              <div key={s.step} className="card-3d p-5 space-y-2">
                <div className="text-2xl font-black font-mono text-emerald-400">{s.step}</div>
                <h4 className="text-sm font-bold text-white">{s.title}</h4>
                <p className="text-[11px] text-white/65 leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Common Questions</h3>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white leading-snug">{faq.question}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
{/* CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            That&apos;s exactly why the free audit exists. Tell me about your business and I&apos;ll tell you — honestly — what will help most first.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Link href="/contact/" className="btn-3d-emerald text-xs font-mono font-black py-3.5 px-7 inline-flex items-center justify-center gap-2 shadow-lg">
              <Rocket className="w-4 h-4" />
              <span>Get My Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I need help deciding which service fits my business.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-7 inline-flex items-center justify-center gap-2 hover:text-emerald-400"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Me</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}