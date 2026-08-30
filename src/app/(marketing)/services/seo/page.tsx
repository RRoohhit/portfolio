import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  MapPin,
  Target,
  FileText,
  ShoppingCart,
  Sparkles,
  MessageSquare,
  Users,
} from "lucide-react";
import { CONTACT } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Hire SEO Expert India | SEO Services — Rohit Gupta",
  description:
    "Hire a dedicated SEO expert or team: Technical SEO, White Hat SEO, On-Page, Local SEO in Noida, E-Commerce & AI Search Optimization.",
  path: "/services/seo/",
  keywords: [
    "hire seo expert india",
    "hire dedicated seo expert",
    "hire seo specialist",
    "hire seo professional",
    "hire seo experts",
    "white hat seo services",
    "seo expert in noida",
    "Technical SEO Specialist",
    "White Hat SEO Specialist",
  ],
});

const SEO_HUB_SECTIONS = [
  {
    id: "hire-seo-expert",
    title: "Hire a dedicated SEO expert",
    badge: "Hiring Retainers",
    icon: Users,
    desc: "You get direct support, strategic SEO execution, and a clear roadmap without juggling multiple freelancers or generic agencies.",
    link: "/services/hire-seo-expert/",
  },
  {
    id: "technical-seo",
    title: "Technical SEO and site health",
    badge: "Infrastructure",
    icon: Zap,
    desc: "We fix crawl issues, indexing gaps, page speed problems, schema gaps, redirects, and technical blockers that stop Google from trusting the site.",
    link: "/services/technical-seo/",
  },
  {
    id: "on-page-seo",
    title: "On-page SEO and content strategy",
    badge: "Content",
    icon: FileText,
    desc: "We improve keyword intent, titles, meta descriptions, headings, content structure, internal linking, and the pages that convert traffic into enquiries.",
    link: "/services/on-page-seo/",
  },
  {
    id: "off-page-seo",
    title: "Off-page SEO and authority growth",
    badge: "Authority",
    icon: Target,
    desc: "We build the backlinks, citations, and digital PR signals that make your website stronger in the eyes of search engines and customers alike.",
    link: "/services/off-page-seo/",
  },
  {
    id: "local-seo",
    title: "Local SEO and Google Maps growth",
    badge: "Local",
    icon: MapPin,
    desc: "Perfect for service businesses that want more calls, local leads, and visibility in “near me” searches and the map pack.",
    link: "/services/local-seo/",
  },
  {
    id: "google-business-profile-seo",
    title: "Google Business Profile SEO",
    badge: "GBP",
    icon: MapPin,
    desc: "We improve your profile visibility, categories, reviews, posts, service catalog, and photos so more people trust and choose your business.",
    link: "/services/google-business-profile-seo/",
  },
  {
    id: "ecommerce-seo",
    title: "E-commerce SEO",
    badge: "Store",
    icon: ShoppingCart,
    desc: "We optimize category pages, product pages, internal linking, and technical structure so more shoppers find your products and buy.",
    link: "/services/ecommerce-seo/",
  },
  {
    id: "international-seo",
    title: "International SEO and geo targeting",
    badge: "Global",
    icon: Globe,
    desc: "We help brands reach new countries and language audiences with the right architecture, hreflang setup, and segmented keyword strategy.",
    link: "/services/international-seo/",
  },
  {
    id: "ai-search-optimization",
    title: "AI search optimization (AEO / GEO)",
    badge: "AI Search",
    icon: Sparkles,
    desc: "We structure content and signals so your brand is easier to discover in Google AI Overviews, ChatGPT, and answer-based search experiences.",
    link: "/services/ai-search-optimization/",
  },
  {
    id: "white-hat-seo",
    title: "White-hat SEO that builds lasting trust",
    badge: "Ethical",
    icon: ShieldCheck,
    desc: "No shortcuts, no spammy tricks. Just clean execution based on usability, search intent, and long-term domain quality.",
    link: "/services/white-hat-seo/",
  },
];

const SEO_PROCESS = [
  {
    step: "01",
    title: "Deep audit and diagnosis",
    desc: "We review the site from the perspective of both users and Google to identify technical blockers, ranking gaps, and growth opportunities.",
  },
  {
    step: "02",
    title: "Strategy with business context",
    desc: "We define the right opportunities based on your market, your ideal customer, and what will actually drive leads or revenue.",
  },
  {
    step: "03",
    title: "Implementation and cleanup",
    desc: "We fix technical problems, strengthen on-page content, and improve the site structure so rankings can improve with real momentum.",
  },
  {
    step: "04",
    title: "Authority building",
    desc: "We strengthen backlinks, citations, and topical relevance so the site grows in trust and visibility over time.",
  },
  {
    step: "05",
    title: "Tracking and reporting",
    desc: "We monitor traffic, rankings, and conversions to make sure the SEO work is actually moving the business forward.",
  },
];

const FAQS = [
  {
    question: "What does a good SEO service actually include?",
    answer: "A good SEO service includes technical fixes, keyword strategy, content improvements, internal linking, local visibility, and authority growth. The right mix depends on your site and market.",
  },
  {
    question: "How long does SEO take to show results?",
    answer: "Most businesses see early movement in a few weeks to a few months, while stronger ranking gains usually build over several months of consistent implementation and authority work.",
  },
  {
    question: "Do you work with current websites or new ones?",
    answer: "Both. We can optimize an existing website, fix technical issues, improve the content, and create a roadmap for growth, or help build the right foundation from the start.",
  },
  {
    question: "Do you only do SEO or can you help with growth beyond that?",
    answer: "We can support the wider growth system too, including Google Ads, local SEO, content strategy, and web improvements that make the site stronger for both users and search engines.",
  },
];

export default function SeoServicesPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "SEO Services", path: "/services/seo/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-seo-services-hub-breadcrumb")}
      {renderJsonLd(faqGraph(FAQS), "jsonld-seo-services-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "SEO Services Hub" },
          ]}
        />

        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Search className="w-4 h-4" />
            Organic search & growth system
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            SEO that helps your business get found, trusted, and chosen.
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl font-light">
            SEO is not just rankings. It is how your website earns trust, shows up at the right moment, and turns searches into real enquiries.
            We build a practical SEO system around your business, your market, and your growth goals so the traffic you attract is both relevant and valuable.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <Link
              href="/seo-audit/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Request Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to discuss SEO services for my website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp Strategy Call
            </a>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Search, title: "Ranking is not enough", text: "We care about the quality of traffic, not just vanity numbers." },
            { icon: ShieldCheck, title: "White-hat and practical", text: "No risky shortcuts. Just durable SEO built around trust and user intent." },
            { icon: Target, title: "Built for business goals", text: "The work is aligned to leads, calls, sales, and long-term brand growth." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-5 rounded-2xl bg-zinc-950 border border-white/10">
              <Icon className="w-5 h-5 text-emerald-400 mb-3" />
              <h2 className="text-base font-bold text-white mb-2">{title}</h2>
              <p className="text-sm text-white/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              SEO services designed for real business growth
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Whether you need technical fixes, better content, local rankings, or a full search growth strategy, these are the core services that power it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEO_HUB_SECTIONS.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.id}
                  className="p-6 rounded-3xl bg-zinc-950 border border-white/10 hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                        {sec.badge}
                      </span>
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug">{sec.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">{sec.desc}</p>
                  </div>

                  <Link
                    href={sec.link}
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-white/5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>View dedicated page</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              The SEO process
            </h2>
            <p className="text-xs sm:text-sm text-white/60">Simple, structured, and focused on sustainable growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SEO_PROCESS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black font-mono text-emerald-400/40">{step.step}</span>
                  <h3 className="text-sm font-bold text-white tracking-tight">{step.title}</h3>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to grow your visibility without guessing?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            Let’s review your current site, identify what is holding rankings back, and map out a realistic growth plan.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/seo-audit/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
            >
              Get Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I want to improve my SEO and need a strategy call.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Ask on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
