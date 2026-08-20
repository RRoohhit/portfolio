import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Ayodhya | Rohit Gupta",
  description:
    "Hire Rohit Gupta — SEO Expert in Ayodhya. Tourism SEO, hospitality search visibility, Google Business Profile setup, and website development in Ayodhya.",
  path: "/seo-expert-ayodhya/",
  keywords: [
    "SEO Expert in Ayodhya",
    "Local SEO Ayodhya",
    "Tourism SEO Ayodhya",
    "Hospitality SEO Ayodhya",
    "Rohit Gupta Ayodhya SEO",
  ],
});

export default function SeoExpertAyodhyaPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Ayodhya", path: "/seo-expert-ayodhya/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-ayodhya-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Ayodhya" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Ayodhya (Permanent Home Base)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Ayodhya — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Ayodhya's economy is expanding rapidly across tourism, hospitality, retail, real estate, and local services. Rohit Gupta is permanently rooted in Ayodhya (UP 272130) and delivers specialized Local SEO, Google Business Profile management, and fast web applications for businesses establishing search dominance in Ayodhya.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Ayodhya SEO Expert <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SEO &amp; Digital Growth Solutions for Ayodhya Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            As Ayodhya grows into a major national destination, establishing top organic search presence on Google and Google Maps ensures a steady flow of local customers and visiting travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Ayodhya Google Business Profile & Map Pack",
                desc: "Dominate Google Maps searches for hotels, homestays, restaurants, and local services in Ayodhya with verified citations, photos, and review strategies.",
              },
              {
                title: "Tourism & Travel Intent SEO",
                desc: "Capture high-volume visitor search queries across India. Target key commercial phrases for travel, booking, tour guides, and regional transportation.",
              },
              {
                title: "Mobile-First Speed & Performance",
                desc: "Ensure your business website loads in under 1 second on mobile networks with optimized images, clean CSS/JS rendering, and sub-second TTFB.",
              },
              {
                title: "Structured Schema & Local Entity Markup",
                desc: "Implement Hotel, LocalBusiness, Restaurant, and FAQPage JSON-LD schema markup so Google and AI search engines present your business in rich snippets.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 shadow-xl">
                <h3 className="text-base font-bold text-white tracking-tight">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight">Ayodhya Search Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Hotels, Homestays & Hospitality Search Optimization",
              "Google Maps 3-Pack Placement for Local Services",
              "Tourism & Heritage Travel Guide SEO",
              "Real Estate & Retail Business Visibility",
              "Fast, Mobile-First Multilingual Websites",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Grow Your Business in Ayodhya</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Rohit Gupta to audit your local search presence in Ayodhya.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Ayodhya SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
