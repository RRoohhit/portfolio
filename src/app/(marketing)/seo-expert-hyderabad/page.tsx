import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Globe2, Building2 } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Hyderabad | Rohit Gupta — Local & Growth SEO",
  description:
    "Hire Rohit Gupta — SEO expert in Hyderabad. Technical SEO, local SEO, Google Business Profile & white hat link building for Hyderabad businesses.",
  path: "/seo-expert-hyderabad/",
  keywords: [
    "SEO Expert in Hyderabad",
    "SEO services Hyderabad",
    "Local SEO Hyderabad",
    "SEO specialist Hyderabad",
    "Real estate SEO India",
    "Digital marketing Hyderabad",
  ],
});

export default function SeoExpertHyderabadPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Hyderabad", path: "/seo-expert-hyderabad/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-hyderabad-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Hyderabad" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            Hyderabad Growth &amp; Local SEO Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Hyderabad — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Hyderabad is a fast-growing market where IT, real estate, and healthcare all compete for attention. I&apos;m Rohit Gupta, and I help IT firms, clinics, and local brands in HITEC City, Gachibowli, and Banjara Hills grow on Google with fast sites, stronger map-pack presence, and search traffic that actually converts.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Hyderabad SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SEO &amp; Growth Solutions for Hyderabad Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            I focus on the searches that bring Hyderabad businesses real customers — clean site fixes, Google Maps growth, and pages built around local buying intent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Hyderabad Local SEO & Map Pack",
                desc: "I get you into the Google Maps 3-Pack in HITEC City and Gachibowli, so your business shows up when nearby customers search — and they actually call.",
              },
              {
                title: "Real Estate & Healthcare SEO",
                desc: "I target the local buyer terms that matter for property and clinics, with schema and fast pages that turn searches into leads.",
              },
              {
                title: "Technical SEO & Speed Fixes",
                desc: "I fix slow page loads and crawl errors directly in the code, so your site passes Google's speed tests instead of just being told to.",
              },
              {
                title: "Content & AI Search Rankings",
                desc: "I write clear answers to the questions your customers ask, so Google AI Overviews and ChatGPT quote your brand.",
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
          <h3 className="text-xl font-black text-white tracking-tight">Key Service Areas in Hyderabad</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "HITEC City & Madhapur Tech Corridor",
              "Gachibowli & Financial District",
              "Banjara Hills & Jubilee Hills",
              "Secunderabad & Old City",
              "Kompally, Kukatpally & Miyapur",
            ].map((region) => (
              <div key={region} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{region}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Grow Your Hyderabad Business on Google</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free SEO &amp; visibility audit for your Hyderabad business today — pan India &amp; worldwide support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
              Request Hyderabad SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/international-seo/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors">
              <Globe2 className="w-4 h-4 text-emerald-400" /> International SEO Services
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}