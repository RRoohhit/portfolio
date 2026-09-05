import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck, Star, Search, Phone } from "lucide-react";
import { CONTACT, SITE_URL } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Noida | Local SEO Services — Rohit Gupta",
  description:
    "Hire Rohit Gupta — SEO Expert in Noida. Technical SEO, Local SEO, Google Maps 3-Pack rankings, and custom web development for Noida businesses.",
  path: "/seo-expert-noida/",
  keywords: [
    "seo expert in noida",
    "local seo services in noida",
    "SEO Specialist Noida",
    "hire dedicated seo expert noida",
    "SEO Services Noida Sector 63",
    "Local SEO Noida",
    "SEO Consultant Greater Noida",
    "Rohit Gupta SEO Noida",
  ],
});

const SECTORS_COVERED = [
  "Sector 18 (Commercial & Retail)",
  "Sector 62 (IT & Corporate Hub)",
  "Sector 63 (Industrial & Tech)",
  "Sector 125/126 (Expressway EdTech)",
  "Sector 132/142 (Logistics & Enterprise)",
  "Greater Noida & Noida Extension",
];

const LOCAL_FAQS = [
  { question: "Why hire a local SEO expert in Noida instead of someone remote?", answer: "Because local SEO is genuinely different from regular SEO. A local expert knows the actual competition across Noida's sectors, how people in Delhi NCR search, and how the Google Map Pack behaves here. Being based in Noida also means I can meet you in person and actually understand your business — not just your website." },
  { question: "Do you offer face-to-face meetings in Noida?", answer: "Yes. I'm based in Mamura, Sector 66, so meeting clients around Sector 18, 62, 63, or Greater Noida is easy. For people outside Noida, we jump on a video call — the work is the same either way." },
  { question: "How long does local SEO take to work in Noida?", answer: "Honest answer: Google Business Profile and Map Pack improvements often show up within 4 to 8 weeks, because there's less competition there than on regular page-one results. Bigger organic ranking jumps for competitive keywords usually take 3 to 6 months. Anyone promising faster is probably cutting corners." },
  { question: "My business serves all over India. Do I still need local Noida SEO?", answer: "Yes — and here's why. Ranking in the Map Pack and for 'near me' searches builds trust and drives immediate calls, while your broader national pages bring in the wider traffic. Local and national SEO work together; most businesses start local because it converts faster and cheaper." },
  { question: "Which Noida businesses do you usually work with?", answer: "A good mix — IT and software companies around Sector 62 and 63, clinics and dentists, restaurants and cafés, real estate and property, plus agencies that outsource their SEO. If your customers search for what you sell in Noida, I can help." },
  { question: "What's different about SEO in Greater Noida vs Noida?", answer: "Greater Noida and Noida Extension have faster-growing residential and education areas, so the search behaviour and competition are different — more focus on schools, real estate, and new businesses. I tailor the strategy to where your customers actually are rather than treating the whole area as one blob." },
];

export default function SeoExpertNoidaPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Noida", path: "/seo-expert-noida/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-noida-breadcrumb")}
      {renderJsonLd(faqGraph(LOCAL_FAQS, new URL("/seo-expert-noida/", SITE_URL).href), "jsonld-seo-noida-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Noida" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Noida &amp; Delhi NCR Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Noida — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            I'm Rohit Gupta, and I do my SEO work right from <a href="https://maps.app.goo.gl/bjJDqfUJRuJPqHBT6" target="_blank" rel="noopener noreferrer" title="View Rohit Gupta Location on Google Maps" className="text-emerald-400 font-semibold underline hover:text-emerald-300">Sector 66, Noida</a>. I've helped IT companies, clinics, and local retail shops across Noida and Greater Noida get more customers from Google — real leads, not just vanity traffic numbers. My focus is the kind of SEO that actually works for a local business: getting you into the Google Map Pack and onto page one for the searches people around you are actually typing.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
              Consult Noida SEO Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors">
              <Phone className="w-4 h-4 text-emerald-400" />
              Call +91 96966 21216
            </a>
          </div>
        </header>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            What Noida Businesses Are Actually Competing For
          </h2>
          <p className="text-sm text-white/75 leading-relaxed">
            Noida is packed with IT firms, clinics, restaurants, and retail shops — all fighting for the same customers. Page one here doesn't come from stuffing keywords. It comes from clean, fast websites, consistent local listings and citations, and an active Google Business Profile that shows Google you're a real, trusted local business. That's exactly where I focus my effort.
          </p>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-400" />
            What a Local Noida SEO Campaign Looks Like
          </h3>
          <div className="space-y-3">
            {[
              { t: "Google Business Profile cleanup", b: "I fix your listing's categories, service areas, photos, and reviews so it ranks in the Map Pack for searches like 'SEO company near me' or 'clinic in Noida'." },
              { t: "Local on-page SEO", b: "Your key pages get rewritten to match how Noida customers actually search — your suburb, your services, your real contact details, all consistent." },
              { t: "Consistent citations & listings", b: "I make sure your business name, address, and phone number match across Google, Justdial, and local directories. Inconsistent info is one of the biggest reasons local businesses don't rank." },
              { t: "Real local backlinks", b: "I earn links from Noida-relevant sources — local news, business roundups, and genuine partnerships — the kind that tell Google you belong here." },
            ].map((s) => (
              <div key={s.t} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">{s.t}</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            Noida Sectors &amp; Commercial Areas Covered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SECTORS_COVERED.map((sector) => (
              <div key={sector} className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{sector}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-400" />
            Frequently Asked Questions — Noida SEO
          </h3>
          <div className="space-y-4">
            {LOCAL_FAQS.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready to Rank #1 in Noida?</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free local SEO audit for your Noida business today.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Noida SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
