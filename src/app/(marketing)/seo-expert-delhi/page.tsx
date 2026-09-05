import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MapPin, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO Expert in Delhi | Rohit Gupta",
  description:
    "Hire Rohit Gupta — premier SEO Expert in Delhi. Technical SEO, local search optimization, content strategy, and Google Ads management across Delhi NCR.",
  path: "/seo-expert-delhi/",
  keywords: [
    "SEO Expert in Delhi",
    "SEO Specialist Delhi",
    "SEO Services Delhi NCR",
    "Technical SEO Consultant Delhi",
    "Local SEO Delhi",
    "Rohit Gupta SEO Delhi",
  ],
});

const LOCAL_FAQS = [
  {
    question: "Is SEO in Delhi really more competitive than other Indian cities?",
    answer:
      "Yes, honestly. Delhi has a density of businesses competing for the same commercial searches — from Connaught Place to South Delhi markets — that you rarely see elsewhere. But that competition is also why a properly executed technical and local SEO foundation wins so decisively here: most competitors still rely on shortcuts. I focus on the fundamentals that actually hold up: fast pages, clean site structure, real local signals, and content that answers what Delhi customers actually type.",
  },
  {
    question: "Do you meet Delhi clients in person?",
    answer:
      "Yes. I'm based in Noida, Sector 66, so meeting clients around South Delhi, Connaught Place, or the NCR border areas is easy for project kickoffs and monthly reviews. For clients outside Delhi or who prefer remote, we run the same process over video calls with shared dashboards — the work itself never depends on location.",
  },
  {
    question: "My business serves all of Delhi NCR, not just one neighbourhood. Can you help?",
    answer:
      "Absolutely — and that's a common situation. Instead of one cramped page trying to rank for everything, I build geo-targeted pages for the specific areas you serve (South Delhi, West Delhi, Noida, Gurgaon), align your Google Business Profile service areas, and structure internal links so each location has its own chance to rank. It's more work, but it's how a multi-area business wins across NCR instead of ranking for nothing everywhere.",
  },
  {
    question: "How long does it take to see results for competitive Delhi keywords?",
    answer:
      "Realistically, map-pack and local visibility improvements can show up within 4 to 8 weeks because the Google Maps 3-Pack is decided by a smaller set of factors. Solid organic rankings for competitive commercial keywords in Delhi usually take 3 to 6 months of consistent work. If someone promises faster for a competitive Delhi market, they're probably planning to cut corners you'll pay for later.",
  },
  {
    question: "Which Delhi businesses do you usually work with?",
    answer:
      "A practical mix — clinics and dentists, CA and law firms, real estate developers, restaurants and cafés, retail shops, and digital agencies that want white-hat SEO done properly. If your customers search for what you offer in Delhi, I can build a strategy that fits your industry's actual buying behaviour.",
  },
];

export default function SeoExpertDelhiPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "SEO Expert in Delhi", path: "/seo-expert-delhi/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-delhi-breadcrumb")}
      {renderJsonLd(faqGraph(LOCAL_FAQS, new URL("/seo-expert-delhi/", SITE_URL).href), "jsonld-seo-delhi-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "SEO Expert in Delhi" }]} />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            Delhi NCR Search Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO Expert in Delhi — Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            Delhi is one of the most competitive search markets in India — everyone is fighting for the same customers. I'm Rohit Gupta, and I help businesses across Connaught Place, South Delhi, and West Delhi actually get found on Google. Not with gimmicks, but with solid technical SEO, local Google Maps optimization, and fast, clean websites that turn searches into customers.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg">
            Consult Delhi SEO Specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            SEO &amp; Web Growth for Delhi Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Here's the honest truth about ranking in Delhi: it takes more than a few keywords. It takes a site that loads fast, content that answers real questions, and local signals that prove to Google you're a genuine Delhi business. That's exactly what I focus on — let me walk you through what that looks like.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              {
                title: "Delhi Local SEO & Google Map Pack",
                desc: "Get more calls and store visits from Delhi customers. I optimize your Google Business Profile, fix inconsistent local listings, and get you into the Map Pack for 'near me' searches.",
              },
              {
                title: "Technical Audits & Core Web Vitals",
                desc: "I go beyond pointing out crawl errors and slow loads — I fix them in the code. So your site actually passes Google's Core Web Vitals instead of just being told it should.",
              },
              {
                title: "High-Intent Keyword Mapping",
                desc: "I target the search terms your Delhi customers actually type when they're ready to buy — and match each one to the page that answers their intent.",
              },
              {
                title: "Custom Next.js & React Web Apps",
                desc: "Fast, mobile-friendly websites built with clean code and built-in schema markup, so speed and structure help your rankings instead of hurting them.",
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
          <h3 className="text-xl font-black text-white tracking-tight">Key Service Areas in Delhi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Central Delhi (Connaught Place, Barakhamba)",
              "South Delhi (Hauz Khas, Saket, Nehru Place)",
              "West Delhi (Janakpuri, Rajouri Garden, Dwarka)",
              "North & East Delhi (Laxmi Nagar, Preet Vihar)",
              "Gurgaon & Noida Border Regions",
            ].map((region) => (
              <div key={region} className="p-4 rounded-2xl bg-black border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/85">{region}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-400" />
            Frequently Asked Questions — Delhi SEO
          </h3>
          <div className="space-y-4">
            {LOCAL_FAQS.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                <h4 className="text-sm font-bold text-white">{faq.question}</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Outrank Competitors in Delhi</h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Get a free search visibility audit for your Delhi business today.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25">
            Request Delhi SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
