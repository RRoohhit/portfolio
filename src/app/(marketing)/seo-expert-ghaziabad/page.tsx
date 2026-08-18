import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Ghaziabad — Local SEO & Technical Growth | Rohit Gupta",
  description:
    "Hire Rohit Gupta — top SEO Expert in Ghaziabad. Technical SEO, Google Business Profile optimization, local citation building, and web development.",
  path: "/seo-expert-ghaziabad/",
  keywords: [
    "SEO Expert in Ghaziabad",
    "SEO Specialist Ghaziabad",
    "Local SEO Indirapuram",
    "SEO Services Vaishali Ghaziabad",
    "Rohit Gupta SEO Ghaziabad",
  ],
});

export default function SeoExpertGhaziabadPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Ghaziabad", path: "/seo-expert-ghaziabad/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-ghaziabad-breadcrumb")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Ghaziabad" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Ghaziabad &amp; NCR Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Ghaziabad — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Grow your organic search traffic in Ghaziabad, Indirapuram, Vaishali, Vasundhara, and Raj Nagar. Rohit Gupta provides white-hat SEO, Google Business Profile optimization, and fast web development tailored to the Ghaziabad market.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Ghaziabad SEO Expert <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight">Areas Covered in Ghaziabad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Indirapuram",
              "Vaishali",
              "Vasundhara",
              "Raj Nagar & Raj Nagar Extension",
              "Crossings Republik",
              "Kavi Nagar & Central Ghaziabad",
            ].map((area) => (
              <div key={area} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{area}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Rank #1 in Ghaziabad Search Results</h2>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free local search diagnostic for your Ghaziabad business.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Ghaziabad SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
