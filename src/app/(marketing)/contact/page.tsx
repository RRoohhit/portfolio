import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/shared/ContactSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { CONTACT } from "@/config/site";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  HelpCircle,
  Award,
  Zap
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Rohit Gupta | SEO Specialist India",
  description: "Contact Rohit Gupta, SEO specialist in Noida & India. Get a free website audit, pricing proposal, or consultation. Call/WhatsApp +91-9696621216.",
  path: "/contact/",
  keywords: [
    "hire SEO specialist",
    "SEO consultant India",
    "free SEO audit",
    "contact SEO expert Noida",
    "SEO specialist for hire",
    "dedicated SEO expert India",
    "hire web developer freelancer",
    "SEO audit proposal",
  ],
});

const CONTACT_FAQS = [
  {
    question: "How quickly do you respond to new inquiries?",
    answer:
      "I personally review every inquiry and typically respond within 2 to 4 hours on business days (Monday to Saturday, 09:00 to 19:00 IST). For immediate discussions, WhatsApp is the fastest channel.",
  },
  {
    question: "What is included in the free technical SEO audit?",
    answer:
      "The initial complimentary audit includes a deep review of your website's crawlability, Google indexing status, Core Web Vitals speed scores, on-page title/heading structure, schema markup validation, and top 3 high-impact ranking bottlenecks.",
  },
  {
    question: "Do you offer in-person meetings in Noida or Delhi NCR?",
    answer:
      "Yes. I am based in Sector 66, Noida, and regularly meet clients across Sector 18, Sector 62, Sector 63, Greater Noida, and South/East Delhi for project kickoffs and strategy sessions. For remote clients across India and globally, we connect via Google Meet or Zoom.",
  },
  {
    question: "What are your starting SEO retainer and project rates?",
    answer:
      "Monthly SEO retainers start at ₹12,000/month for focused campaigns and ₹15,000/month for dedicated specialist support with direct code access. One-time technical SEO audits start at ₹8,000, and custom Next.js/WordPress websites start at ₹20,000 to ₹25,000.",
  },
  {
    question: "Do I need to sign a long-term lock-in contract?",
    answer:
      "No. All SEO retainers operate on a transparent month-to-month agreement. You stay because you see compounding organic rankings, qualified inbound leads, and measurable business growth — not because of rigid lock-in clauses.",
  },
];

const WORKING_STEPS = [
  {
    step: "01",
    title: "Initial Discovery & Goal Alignment",
    desc: "We analyze your business niche, target audience, primary competitors, and organic search objectives to define exact measurable KPIs.",
  },
  {
    step: "02",
    title: "Comprehensive Technical & Keyword Audit",
    desc: "A thorough crawl of your current site reveals crawl depth errors, layout shifts, schema gaps, and untapped high-intent commercial keywords.",
  },
  {
    step: "03",
    title: "Transparent Strategy & Custom Proposal",
    desc: "You receive a prioritized month-by-month roadmap with clear deliverables, timeline expectations, and flat transparent pricing.",
  },
  {
    step: "04",
    title: "Execution, Optimization & Weekly Reporting",
    desc: "Direct code-level fixes, editorial content optimization, authoritative link acquisition, and real-time Search Console ranking tracking.",
  },
];

const CORE_SERVICES_LINKS = [
  { title: "Hire Dedicated SEO Expert", href: "/services/hire-seo-expert/", desc: "Senior SEO specialist with direct code access on monthly retainer." },
  { title: "Technical SEO Audit", href: "/services/technical-seo/", desc: "Sub-second Core Web Vitals, indexation fixes, and schema graphs." },
  { title: "White Hat SEO Firm", href: "/services/white-hat-seo/", desc: "100% penalty-free Google Search Essentials compliant growth." },
  { title: "Local SEO & Google Maps", href: "/services/local-seo/", desc: "Google Business Profile optimization and Map 3-Pack domination." },
  { title: "WordPress Development", href: "/services/wordpress-development/", desc: "Fast Gutenberg themes, WooCommerce stores, and clean code." },
  { title: "Full-Stack Web Development", href: "/services/web-development/", desc: "High-performance React & Next.js web applications." },
  { title: "Free Technical SEO Audit", href: "/seo-audit/", desc: "Automated instant technical diagnosis and ranking bottlenecks check." },
  { title: "Verified Case Studies", href: "/case-studies/", desc: "Real client ranking proofs, traffic data, and revenue evidence." },
  { title: "About Rohit Gupta", href: "/rohit-gupta/", desc: "Full biography, technical certifications, and entity credentials." },
  { title: "SEO & Growth Blog", href: "/blog/", desc: "Actionable 2026 ranking tutorials, algorithm guides, and tools reviews." },
];

export default function ContactPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-contact-breadcrumb")}
      {renderJsonLd(faqGraph(CONTACT_FAQS, "https://rohitguptaseo.in/contact/"), "jsonld-contact-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact" },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase font-bold tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Free Consultation • Custom Ranking Proposal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Contact SEO Specialist Rohit Gupta — Free Strategy Call &amp; Audit
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-3xl">
            Ready to take your business to Position #1 on Google, dominate local Google Maps, or engineer a sub-second high-converting website? Get in touch with Rohit Gupta for an honest, actionable discussion about your organic growth roadmap.
          </p>
        </header>

        {/* Main Interactive Contact Section (Form + Direct Info) */}
        <section aria-label="Direct Consultation and Contact Form" className="space-y-4">
          <ContactSection />
        </section>

        {/* 4-Step Process Section */}
        <section className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-8 shadow-2xl">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Transparent Collaboration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              What Happens After You Contact Rohit Gupta?
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light max-w-3xl">
              We respect your time. When you reach out, you speak directly with the specialist doing the work — not an aggressive salesperson or an account manager. Here is our 4-step onboarding flow:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WORKING_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
                <div className="text-xs font-mono font-black text-emerald-400 uppercase tracking-wider">{step.step} · Process</div>
                <h3 className="text-base font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Service Navigation Hub (Passes PageRank & Discovers All Pages) */}
        <section className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Explore Full Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Explore Core SEO Services &amp; Growth Solutions
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Discover dedicated services, diagnostic tools, and in-depth educational resources tailored for modern search visibility:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {CORE_SERVICES_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-4 rounded-2xl bg-black border border-white/10 hover:border-emerald-500/40 transition-colors group flex flex-col justify-between space-y-2"
              >
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    <span>{link.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light mt-1">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="bg-zinc-950 border border-white/10 p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono font-bold uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Direct Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Frequently Asked Questions About Consultation &amp; Hiring
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Clear answers regarding turnaround times, audit inclusions, retainer terms, and working methodologies.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            {CONTACT_FAQS.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black border border-white/10 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Direct CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Prefer Direct Conversation Right Now?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
            Skip the form and message Rohit Gupta directly on WhatsApp for an immediate response within 2 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I would like to schedule an SEO consultation for my website.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25"
            >
              Chat on WhatsApp ({CONTACT.phone})
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/seo-audit/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-mono font-bold hover:border-emerald-500/40 transition-colors"
            >
              Run Instant SEO Audit
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}