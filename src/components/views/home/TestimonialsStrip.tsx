"use client";

import React from "react";
import Link from "next/link";
import { Star, Quote, ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const STRIP_REVIEWS = [
  {
    name: "MegaMind Technosoft — Delhi",
    company: "Full Stack Development & Technical SEO",
    location: "megamindindia.in + attendancesolution.in — built from scratch",
    service: "Next.js · Supabase · HTML/Tailwind · SEO + AEO + GEO",
    rating: 5,
    quote:
      "Dono live websites scratch se design, develop aur SEO-optimize ki — dynamic catalog, admin panel, on-page/technical SEO aur AI-search-ready content ke saath.",
  },
  {
    name: "Thingbiz Hightech — Noida",
    company: "On-Page, Off-Page & Local SEO",
    location: "Client portals · keyword research · Google Ads",
    service: "White-hat SEO · technical audits · campaign optimization",
    rating: 5,
    quote:
      "Client portals par on-page, off-page aur technical SEO plus Google Ads optimization — clean white-hat workflow me kaam kiya.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export const TestimonialsStrip: React.FC = () => {
  return (
    <section className="space-y-6 sm:space-y-8">
      <Reveal className="space-y-3 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
          <BadgeCheck className="w-3 h-3" />
          <span>Live client work — Delhi & Noida</span>
        </div>
        <p id="social-proof-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
          Work I <span className="text-gradient">Actually Did</span>
        </p>
        <div className="flex items-center justify-center gap-2 pt-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs font-mono text-white/70">2 work engagements · Delhi & Noida</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {STRIP_REVIEWS.map((review, idx) => (
          <Reveal key={review.company} delay={idx * 0.08} className="h-full">
            <div className="card-3d-interactive p-5 sm:p-6 space-y-4 h-full flex flex-col relative overflow-hidden group">
              <Quote className="w-8 h-8 text-emerald-400/20 absolute top-4 right-4" />
              <Stars n={review.rating} />
              <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed font-light flex-1">"{review.quote}"</p>
              <div className="pt-3 border-t border-white/10 space-y-1">
                <div className="text-xs font-bold text-white">{review.name}</div>
                <div className="text-[10px] font-mono text-white/50 flex items-center gap-1.5">
                  {review.service}
                </div>
                <div className="text-[10px] font-mono text-white/40 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400/70" />
                  {review.company} · {review.location}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="flex justify-center">
        <Link
          href="/testimonials/"
          className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5 transition-colors group"
        >
          Read all client testimonials
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
};

export default TestimonialsStrip;