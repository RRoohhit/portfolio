import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Star, Quote, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Work Experience & Live Projects | Rohit Gupta",
  description:
    "Rohit Gupta work summary — MegaMind Technosoft (Delhi) me 2 live websites scratch se build + SEO, aur Thingbiz (Noida) me on-page/off-page/technical SEO aur Google Ads work.",
  path: "/testimonials/",
  keywords: [
    "rohit web developer & seo expert freelancer noida reviews",
    "rohit gupta reviews",
    "seo expert in noida reviews",
    "hire seo expert reviews",
    "web developer reviews noida",
    "Rohit Gupta Testimonials",
    "Client Feedback SEO",
  ],
});

const TESTIMONIALS_LIST = [
  {
    name: "Work Engagement — MegaMind Technosoft",
    company: "MegaMind Technosoft",
    location: "Delhi, India",
    service: "Full Stack Development & Technical SEO",
    rating: 5,
    date: "2025 – 2026",
    quote:
      "Wahan maine megamindindia.in aur attendancesolution.in dono websites scratch se design, develop aur SEO-optimize ki — dynamic product catalog, admin panel, on-page aur technical SEO setup ke saath.",
  },
  {
    name: "Work Engagement — Thingbiz Hightech",
    company: "Thingbiz Hightech Private Limited",
    location: "Noida, UP",
    service: "On-Page, Off-Page & Local SEO",
    rating: 5,
    date: "2025 - 2026",
    quote:
      "Wahan maine client portals par on-page, off-page aur technical SEO, keyword research aur Google Ads optimization par kaam kiya — white-hat practices ke saath.",
  },
];

export default function TestimonialsPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Reviews & Testimonials", path: "/testimonials/" },
  ]);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rohit Gupta — SEO & Web Development Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "2",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": TESTIMONIALS_LIST.map((t) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "datePublished": "2026-01-15",
      "reviewBody": t.quote,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString(),
        "bestRating": "5",
        "worstRating": "1",
      },
    })),
  };

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-testimonials-breadcrumb")}
      {renderJsonLd(reviewSchema, "jsonld-testimonials-reviews")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Testimonials" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Work Experience &amp; Live Project Notes
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Rohit Gupta — Work Experience & Live Projects
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Mere do work engagements ka summary aur unme kiye gaye kaam ka honest note — <strong>Rohit Gupta</strong>, Web Developer & SEO (Delhi & Noida).
          </p>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Work Done In Delhi & Noida Engagements
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Kaam ka summary — live websites aur SEO engagements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_LIST.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-white/40">{item.date}</span>
                </div>

                <Quote className="w-8 h-8 text-emerald-400/30" />

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.name}</h3>
                  <p className="text-xs font-mono text-white/50">{item.company} · {item.location}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold uppercase border border-emerald-500/20">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/10 text-center space-y-5 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Want to Achieve Similar Results?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Discuss your website SEO, search rankings, or technical development needs today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
