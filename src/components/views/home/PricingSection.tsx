"use client";

import Link from "next/link";
import { MessageSquare, Check, ArrowRight, Zap, Shield, TrendingUp, Globe } from "lucide-react";
import { CONTACT } from "@/config/site";

const PACKAGES = [
  {
    name: "Essential Growth",
    tag: "Best for Small Businesses",
    description: "A focused digital growth setup for businesses that need a stronger online presence and better local visibility.",
    services: [
      "✓ On-Page SEO Optimization",
      "✓ Technical SEO Audit & Fixes",
      "✓ Google Business Profile Setup",
      "✓ Local Search Visibility Support",
      "✓ Content Improvement & Schema",
      "✓ Monthly Performance Guidance",
    ],
    cta: "Discuss My Scope",
    highlighted: false,
    color: "emerald",
  },
  {
    name: "Recommended — The Complete Package",
    tag: "Most Recommended",
    description: "Instead of hiring 4 different people, I become your single growth partner and handle your entire online presence — SEO, local listing, content, social media and ads.",
    services: [
      "✓ Full website SEO (on-page + off-page + technical)",
      "✓ Google Business Profile optimization",
      "✓ Content writing & image optimization",
      "✓ Social media management",
      "✓ Google Ads setup & management",
      "✓ Website speed & Core Web Vitals fixes",
      "✓ E-commerce SEO & product visibility support",
    ],
    cta: "Chat on WhatsApp",
    highlighted: true,
    color: "blue",
  },
  {
    name: "Custom Growth System",
    tag: "Built Around Your Goal",
    description: "A tailored digital marketing and SEO stack based on your industry, competition, goals, and current website performance.",
    services: [
      "✓ Custom SEO Strategy Based on Your Market",
      "✓ Google Ads / Meta Ads Planning",
      "✓ E-commerce, Local SEO or Brand Growth Setup",
      "✓ Dedicated Campaign Prioritization",
      "✓ Reporting & Strategy Calls",
      "✓ Flexible Add-ons Based on Your Business",
    ],
    cta: "Custom Quote",
    highlighted: false,
    color: "violet",
  },
];

const CUSTOMIZATION_OPTIONS = [
  {
    icon: Shield,
    title: "Google Business Profile Only",
    description: "Dedicated GBP management and optimization for local visibility and lead generation.",
    priceNote: "Discuss scope and project fit",
  },
  {
    icon: TrendingUp,
    title: "Website SEO Only",
    description: "Focused technical, on-page, and ranking improvements for your website and pages.",
    priceNote: "Custom quote after audit",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Social media growth, content planning, and digital presence support for your brand.",
    priceNote: "Project-based pricing",
  },
  {
    icon: Zap,
    title: "Google Ads & Meta Ads",
    description: "Campaign setup, optimization, and paid media strategy based on your business goals.",
    priceNote: "Scope-based custom planning",
  },
];

export function PricingSection() {
  return (
    <section className="space-y-8 sm:space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-mono uppercase font-bold tracking-widest">
          <Zap className="w-3.5 h-3.5" />
          Pricing & Packages
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Project Pricing Based on <span className="text-gradient">Your Goals</span>
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
          Instead of forcing a fixed price, we discuss your business, growth goals, website status, and required services — then decide the right package and budget together.
        </p>
      </div>

      {/* Main Pricing Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {PACKAGES.map((pkg, idx) => {
          const bgClass = pkg.highlighted ? "bg-emerald-950/40 border-emerald-500/50 ring-2 ring-emerald-500/30" : "bg-zinc-900/50 border-white/10 hover:border-white/20";
          const ctaBg = pkg.highlighted ? "bg-emerald-400 hover:bg-emerald-300 text-black" : "bg-white/10 hover:bg-white/20 text-white border border-white/20";

          return (
            <div
              key={idx}
              className={`relative p-6 sm:p-7 rounded-3xl border shadow-2xl transition-all duration-300 hover:scale-[1.02] ${bgClass}`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider">
                  {pkg.tag}
                </div>
              )}

              <div className="space-y-4 sm:space-y-5 h-full flex flex-col">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">{pkg.name}</h3>
                  <p className="text-xs sm:text-sm text-white/65 mt-3 leading-relaxed">{pkg.description}</p>
                </div>

                {/* Services List */}
                <div className="space-y-2.5 flex-grow">
                  {pkg.services.map((service, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-white/80 leading-relaxed">{service}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact/"
                  className={`w-full py-3 px-4 rounded-xl font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors mt-6 ${ctaBg}`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Customization Section */}
      <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10">
        <div className="text-center space-y-3 sm:space-y-4 mb-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Need a Custom Package?
          </h3>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Every business is different. Tell us about your goals, website, and marketing needs — and we&apos;ll decide the right project price and customization together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {CUSTOMIZATION_OPTIONS.map((option, idx) => {
            const Icon = option.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white tracking-tight">{option.title}</h4>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{option.description}</p>
                <p className="text-xs font-mono font-bold text-emerald-400 pt-2 border-t border-white/10">
                  {option.priceNote}
                </p>
              </div>
            );
          })}
        </div>

        {/* Custom Package CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-900/50 to-zinc-900/50 border border-emerald-500/30 text-center space-y-5">
          <p className="text-lg sm:text-xl font-bold text-white">Chat on WhatsApp and Decide the Right Project Price</p>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Share your website, business goals, and current challenges. We&apos;ll discuss the project scope, required services, and final pricing together — no guessing, no fixed one-size-fits-all package.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Request Custom Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to discuss my project requirements and decide the custom price for my SEO and marketing work.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-emerald-500/30 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10 space-y-5">
        <h3 className="text-xl sm:text-2xl font-bold text-white text-center">Pricing FAQs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: "Do you offer month-to-month or long-term contracts?",
              a: "Month-to-month is our standard, but we require a minimum 3-month commitment for best results. Most clients see meaningful improvements within 8-12 weeks.",
            },
            {
              q: "What's included in the monthly fee?",
              a: "All listed services and deliverables. There are no hidden costs, but ad spend for Google Ads/Meta Ads is separate from management fees.",
            },
            {
              q: "Can I upgrade or downgrade packages?",
              a: "Yes, absolutely. You can scale up at any time, or downgrade with 15 days' notice. We're flexible based on your evolving needs.",
            },
            {
              q: "Do you guarantee rankings?",
              a: "No SEO provider can guarantee #1 rankings. We guarantee White Hat practices, monthly progress reports, and measurable improvements. Results vary by competition and market.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-emerald-500/30 transition-colors group cursor-pointer"
            >
              <summary className="flex items-center justify-between font-bold text-white tracking-tight text-sm">
                {faq.q}
                <span className="text-emerald-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed mt-3">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
