import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Star, Quote, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Client Testimonials & Feedback — Rohit Gupta",
  description:
    "Read client feedback and testimonials for Rohit Gupta's technical SEO, local SEO, digital marketing, and web development services.",
  path: "/testimonials/",
  keywords: [
    "Rohit Gupta Testimonials",
    "SEO Expert Reviews",
    "Client Feedback SEO",
    "Web Developer Reviews India",
  ],
});

const TESTIMONIALS_LIST = [
  {
    name: "Megamind Technosoft Team",
    company: "Megamind Technosoft",
    location: "Delhi, India",
    service: "Full Stack Development & Technical SEO",
    rating: 5,
    date: "2026",
    quote:
      "Rohit transformed our web performance and technical SEO architecture. Our Core Web Vitals went from failing grades to top 99/100 Lighthouse scores, and organic search traffic increased substantially across key commercial queries.",
  },
  {
    name: "Thingbiz Management",
    company: "Thingbiz Hightech Private Limited",
    location: "Noida, UP",
    service: "On-Page, Off-Page & Local SEO",
    rating: 5,
    date: "2025 - 2026",
    quote:
      "Working with Rohit on our Google Ads and local SEO positioning delivered impressive ROI. He restructured our campaign keywords and technical setup, giving us steady qualified inbound leads.",
  },
  {
    name: "Ayodhya Hospitality Partner",
    company: "Ayodhya Heritage Stays",
    location: "Ayodhya, UP",
    service: "Local SEO & Google Maps Ranking",
    rating: 5,
    date: "2026",
    quote:
      "Rohit optimized our Google Business Profile and local citation presence in Ayodhya. We saw a dramatic rise in direct calls and Map Pack visibility for local tourism and stay searches.",
  },
  {
    name: "E-Commerce Brand Director",
    company: "Direct-to-Consumer Apparel",
    location: "India & Global",
    service: "Shopify SEO & Speed Tuning",
    rating: 5,
    date: "2025",
    quote:
      "Our store speed and product page indexation improved dramatically. Rohit fixed faceted navigation issues, added Product Schema JSON-LD, and helped us scale revenue through white-hat organic search.",
  },
];

export default function TestimonialsPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-testimonials-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Testimonials" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Verified Client Reviews &amp; Feedback
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Client Testimonials &amp; Reviews
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Real feedback from clients and companies who have worked with Rohit Gupta for technical SEO, local search optimization, digital marketing, and web development.
          </p>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Verified Client Experience &amp; Organic Results
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Read authentic reviews from business owners, founders, and marketing leaders.
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
