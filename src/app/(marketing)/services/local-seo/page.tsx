import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck, Star, MessageSquare } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Local SEO Services & Map Pack Ranking — Rohit Gupta",
  description:
    "Local SEO services by Rohit Gupta. Optimize your Google Business Profile, rank in Google Maps, and win more nearby customers.",
  path: "/services/local-seo/",
  keywords: [
    "Local SEO Expert",
    "Google Business Profile Optimization",
    "Local Map Pack",
    "Geo Targeted SEO",
    "Citation Audit",
    "Local SEO Noida",
    "Local SEO Delhi NCR",
    "Rohit Gupta Local SEO",
  ],
});

const INCLUDED_CHECKLIST = [
  {
    title: "Google Business Profile setup",
    desc: "We optimize your profile so it stands out in Google Maps and local 3-pack search results.",
  },
  {
    title: "Accurate business info everywhere",
    desc: "We ensure your business name, address, and phone number match across all online directories.",
  },
  {
    title: "Local backlinks and trust",
    desc: "We help you earn links from local websites and community pages to build trust with Google.",
  },
  {
    title: "City and service area pages",
    desc: "We create clear, helpful pages for each city or neighbourhood you serve.",
  },
  {
    title: "Local competitor check",
    desc: "We review what top local rivals do and help you outrank them with better content and citations.",
  },
  {
    title: "Google Map Pack ranking",
    desc: "We optimize your presence so your business ranks in the top 3 Google Maps results.",
  },
  {
    title: "Customer review support",
    desc: "We set up an easy way to collect real reviews from happy clients and reply to them.",
  },
  {
    title: "Local business schema markup",
    desc: "We add simple structured code so Google clearly knows your opening hours, location, and services.",
  },
];

const FAQS = [
  {
    question: "Do I need local SEO if I already have a website?",
    answer:
      "Yes. A normal website brings general visitors. Local SEO brings buyers from your own city who are ready to call, book, or visit your store today.",
  },
  {
    question: "How fast does local SEO show results?",
    answer:
      "Most businesses see more calls and views within 4 to 8 weeks. Highly competitive areas usually take 3 to 6 months of steady work.",
  },
  {
    question: "Is Google Business Profile the same as local SEO?",
    answer:
      "Your Google profile is a big part of local SEO, but not all of it. Full local SEO also includes your website pages, local links, citations, and customer reviews.",
  },
];

export default function LocalSeoPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Local SEO", path: "/services/local-seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-local-seo-breadcrumb")}
      {renderJsonLd(faqGraph(FAQS), "jsonld-local-seo-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services/" },
            { name: "Local SEO" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Local search &amp; maps
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Local SEO that helps nearby customers find you first.
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Want more local customers? When people nearby search on Google or Google Maps, we help your business show up at the top. You get more direct calls, store visits, and real sales.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <Link
              href="/services/google-business-profile-seo/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Explore GBP SEO
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to improve my local SEO and get more local leads.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp Strategy Call
            </a>
          </div>
        </header>

        <section className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
            <Star className="w-4 h-4" />
            Specialized profile service
          </div>
          <p className="text-lg font-bold text-white tracking-tight">Need dedicated Google Maps optimization?</p>
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
            We offer full local SEO for your entire site, plus a dedicated service focused 100% on your Google Business Profile.
          </p>
          <Link href="/services/google-business-profile-seo/" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
            <span>View Google Business Profile SEO</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What local SEO includes
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Everything you need to build local trust and attract ready-to-buy customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INCLUDED_CHECKLIST.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Related services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Google Business Profile SEO", href: "/services/google-business-profile-seo/" },
              { label: "On-Page SEO", href: "/services/on-page-seo/" },
              { label: "Technical SEO", href: "/services/technical-seo/" },
              { label: "SEO Audit", href: "/seo-audit/" },
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

        <section className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 text-center">
          <h3 className="text-xl font-bold text-white tracking-tight">Ready to get more local calls and walk-ins?</h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Let us review your local presence and create a simple plan to help nearby customers choose you.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Get Local SEO Advice
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
