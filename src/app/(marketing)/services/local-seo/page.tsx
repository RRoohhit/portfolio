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
    "Local SEO services by Rohit Gupta: Google Business Profile optimization, local citations, city landing pages, review signals, and Google Maps ranking.",
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
  { title: "Google Business Profile optimization", desc: "We fix the profile details people trust most: categories, services, photos, business description, and local signals that support better Map Pack rankings." },
  { title: "Citation and NAP consistency", desc: "We audit your business name, address, and phone number across local directories so Google sees one clean, consistent business identity." },
  { title: "Local link and authority building", desc: "We build geo-relevant links and local trust signals that help your business earn visibility in the right service areas and cities." },
  { title: "Geo-targeted service pages", desc: "We create city-specific and service-area pages that speak to local intent without stuffing keywords or creating spammy duplicate content." },
  { title: "Local competitor gap analysis", desc: "We examine the top local competitors and identify the exact ranking factors they are winning on so we can outperform them strategically." },
  { title: "Map Pack ranking strategy", desc: "We improve your proximity signals, review velocity, and consistency so your business earns stronger visibility in the local 3-pack." },
  { title: "Review management and response system", desc: "We create a realistic system for collecting reviews, responding professionally, and strengthening the trust signals Google rewards." },
  { title: "Local schema and structured data", desc: "We add the right LocalBusiness markup so your site better communicates business details, timings, and service areas to search engines." },
];

const FAQS = [
  {
    question: "Do I need Local SEO if I already have a website?",
    answer: "Yes, especially if your customers are nearby or search by city/service-area terms. A good website attracts broader traffic, but local SEO captures the buyers who are ready to act right now.",
  },
  {
    question: "How long does Local SEO take?",
    answer: "Most businesses start seeing improved local visibility within a few weeks, but map-pack stability and stronger rankings usually build over a few months of steady optimization.",
  },
  {
    question: "Is Google Business Profile optimization the same as Local SEO?",
    answer: "They are closely connected. GBP optimization is a major part of Local SEO, but the full strategy also includes citations, site pages, reviews, and local authority signals.",
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
            { name: "Services", href: "/services" },
            { name: "Local SEO" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Geo-targeted visibility
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Local SEO that helps nearby customers choose you first.
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            If your business depends on local leads, Google Maps, and “near me” searches, local SEO is how you win. We help businesses show up where it matters most: in the Map Pack, in local search results, and in the minds of people ready to book, call, or visit now.
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
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to improve my local SEO and capture more nearby leads.")}`}
              target="_blank"
              rel="noopener noreferrer"
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
            Dedicated service page
          </div>
          <p className="text-lg font-bold text-white tracking-tight">Need a deeper Google Business Profile focus?</p>
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
            This is the core local SEO service, and the GBP optimization page is the more specialized version for profile-level rankings and map-pack visibility.
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
              A complete local growth system built around trust, visibility, and conversion-ready leads.
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
              { label: "Google Business Profile SEO", href: "/services/google-business-profile-seo" },
              { label: "On-Page SEO", href: "/services/on-page-seo" },
              { label: "Technical SEO", href: "/services/technical-seo" },
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

        <section className="p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 text-center">
          <h3 className="text-xl font-bold text-white tracking-tight">Ready to become the obvious local choice?</h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Let’s review your current local presence and build a realistic plan to win more nearby customers.
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
