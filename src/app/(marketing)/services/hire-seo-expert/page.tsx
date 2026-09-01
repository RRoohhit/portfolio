import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, faqGraph, renderJsonLd } from "@/lib/jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT } from "@/config/site";
import {
  Search, CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe, Target,
  Users, Award, TrendingUp, HelpCircle, Phone, MessageSquare, Briefcase,
  DollarSign, Clock, FileCheck, Check
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Hire SEO Expert India | Dedicated SEO Specialist",
  description:
    "Hire a dedicated SEO expert in India for #1 Google rankings, Core Web Vitals speed, and 100% white hat organic search growth.",
  path: "/services/hire-seo-expert/",
  keywords: [
    "hire seo expert india",
    "hire seo expert",
    "hire seo specialist",
    "hire professional seo expert",
    "hiring an seo expert",
    "hire dedicated seo expert",
    "hire seo professional",
    "hire seo expert in india",
    "hire seo",
    "hire seo experts",
    "hire seo expert team",
    "hire dedicated seo expert india",
    "seo ekspert",
    "freelance seo expert india",
    "dedicated seo consultant",
    "hire technical seo specialist",
  ],
});

const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated SEO Specialist (Full-Time / Part-Time)",
    tag: "Most Popular for Growing Brands",
    desc: "You work directly with me — no account manager in the middle. I handle the technical fixes, keyword research, and on-page work myself, and you get daily or weekly updates on exactly what's changing on your site.",
    deliverables: [
      "100% dedicated focus on your domain(s)",
      "Daily/Weekly sprint updates via Slack or WhatsApp",
      "Comprehensive technical SEO & Core Web Vitals fixes",
      "Continuous competitor SERP analysis & keyword expansion",
      "No agency markups or junior account managers",
    ],
    pricing: "Flexible monthly retainer",
  },
  {
    title: "Hire Dedicated SEO Expert Team",
    tag: "For E-Commerce & Enterprise Scale",
    desc: "Need more than one pair of hands? I put together a small team around your project — so you get technical SEO, white hat link building, content writing, and React/Next.js development running in parallel instead of waiting on one person.",
    deliverables: [
      "Multi-disciplinary execution (Tech + Content + Links)",
      "Large-scale programmatic SEO & faceted navigation fixes",
      "Digital PR and contextual high-DA link acquisition",
      "Custom analytics & Looker Studio live dashboard",
      "Dedicated weekly strategy and revenue sync calls",
    ],
    pricing: "Custom enterprise roadmap",
  },
  {
    title: "SEO Advisory & Technical Audit Retainer",
    tag: "For In-House Marketing Teams",
    desc: "You already have writers and marketers — you just need a senior SEO brain to set the strategy, fix the technical stuff, and keep the plan on track. I step in as your consultant and audit specialist without taking over your whole team.",
    deliverables: [
      "Deep crawl audits (Screaming Frog, GSC, Semrush)",
      "Custom JSON-LD schema engineering & architecture",
      "AI Search (AEO/GEO) citation optimization playbook",
      "Developer-ready Jira/GitHub technical issue tickets",
      "Quarterly algorithmic core update risk assessments",
    ],
    pricing: "Project or monthly advisory",
  },
];

const WHY_HIRE_ROHIT = [
  {
    icon: ShieldCheck,
    title: "100% White Hat & Penalty-Free",
    desc: "I follow Google's Search Essentials to the letter. No automated link spam, no private blog networks, no low-quality tricks. That's how I keep sites safe from penalties while they grow.",
  },
  {
    icon: Zap,
    title: "Developer + SEO Specialist Hybrid",
    desc: "I don't just hand over audit spreadsheets and hope your developers figure them out. I write the clean React, Next.js, and TypeScript code myself to fix speed and schema issues.",
  },
  {
    icon: TrendingUp,
    title: "Proven 4,700%+ Organic Traffic Growth",
    desc: "I've scaled niche portals, e-commerce stores, and B2B platforms to top-3 rankings on tough commercial keywords — and I can show you the actual before/after data.",
  },
  {
    icon: Globe,
    title: "AI Search & AEO/GEO Ready",
    desc: "Search isn't just Google anymore. I set up your content so it gets picked up and cited by ChatGPT Search, Google AI Overviews, and Perplexity too.",
  },
  {
    icon: Award,
    title: "Direct Access to Senior Expert",
    desc: "No middlemen, no handoffs to juniors. You talk to me — the person who plans your strategy and writes the code — from day one.",
  },
  {
    icon: Target,
    title: "Measurable Revenue & ROI Focus",
    desc: "Rankings only matter if they bring customers. I tie every piece of work to leads and sales, not just vanity metrics.",
  },
];

const VETTING_CHECKLIST = [
  {
    step: "01",
    title: "Review Verifiable Case Studies & Real SERP Data",
    desc: "Don't accept \"we get great results\" on faith. Ask for real before/after traffic curves, keyword position histories, and Core Web Vitals screenshots — not vague promises.",
  },
  {
    step: "02",
    title: "Check They Can Actually Code",
    desc: "A good SEO person understands JavaScript, server-side rendering, canonicals, and schema. If they can't speak to these, they'll leave the hard fixes to your developers.",
  },
  {
    step: "03",
    title: "Ask Exactly How They Build Links",
    desc: "Real experts earn links through digital PR, guest spots, and genuinely useful resources — not by buying them. Anyone hesitating on this is hiding something.",
  },
  {
    step: "04",
    title: "Demand Plain-English Monthly Reports",
    desc: "You should be able to read your report and understand it. If it's full of jargon and vanity numbers, they're managing your impression, not your rankings.",
  },
];

const HIRE_FAQS = [
  {
    question: "Why hire an SEO expert in India instead of a US/UK agency?",
    answer:
      "An SEO expert in India like Rohit Gupta gives you senior-level skill at 60–75% lower cost than a Western agency. You work directly with a developer-SEO specialist — not a junior account manager.",
  },
  {
    question: "What is the difference between a freelancer and a dedicated SEO team?",
    answer:
      "A dedicated SEO specialist is ideal for small to mid-sized businesses. They handle audits, on-page fixes, and keyword strategy directly. An SEO team is better for large e-commerce stores that need content, links, and web development at scale.",
  },
  {
    question: "How quickly will my site rank after hiring an SEO expert?",
    answer:
      "Technical fixes and schema changes often show results in 1–2 weeks. Keyword ranking gains typically appear in 4–8 weeks. Competitive terms usually reach top 3 in 3–6 months of consistent White Hat SEO.",
  },
  {
    question: "What tools do you use for SEO audits and tracking?",
    answer:
      "I use Google Search Console, Google Analytics 4, Screaming Frog, Ahrefs, Semrush, PageSpeed Insights, and Chrome UX Report (CrUX) for comprehensive tracking.",
  },
  {
    question: "Are your SEO services 100% White Hat with no penalty risk?",
    answer:
      "Yes. Every strategy follows Google's Search Essentials guidelines. I never buy links, use PBNs, or keyword-stuff content. Your domain authority grows safely through real editorial links and quality content.",
  },
  {
    question: "How do we get started?",
    answer:
      "Click 'Hire Dedicated SEO Expert' or WhatsApp +91 96966 21216. We will schedule a discovery call, run a free 24-hour technical audit, and share a 90-day SEO growth roadmap.",
  },
  {
    question: "How much does it cost to hire an SEO expert in India?",
    answer:
      "It honestly depends on your goals. A one-time technical audit usually runs ₹8,000 to ₹20,000, while an ongoing monthly retainer with me is typically in the ₹15,000 to ₹60,000 range depending on how much content, link building, and development you need. You'll always know exactly what's included before you commit — no hidden surprises at renewal.",
  },
  {
    question: "Can you improve my Core Web Vitals and site speed?",
    answer:
      "That's one of my strengths, because I'm a developer too. Instead of just listing what's slow, I go in and fix the actual code — image formats, render-blocking scripts, server response times — so your site is genuinely fast, not just 'scheduled for later' by another consultant.",
  },
  {
    question: "I already have a marketing team. Do I still need an SEO expert?",
    answer:
      "If your marketing team is doing paid ads and social media while organic search is stuck, then yes — SEO is too specialised to wing it. Plenty of my clients are agencies and in-house teams who bring me in just for the technical SEO and strategy layer they can't cover themselves. You keep your team; I handle what they can't.",
  },
  {
    question: "Should I hire one SEO expert or build my own in-house team?",
    answer:
      "For most businesses, hiring an experienced SEO expert is far cheaper and faster than building an in-house team. A full-time SEO hire plus a link builder plus a content writer can cost a lakh or more every month. With me you get a senior specialist who writes code too, without the overhead of multiple salaries and training.",
  },
];

export default function HireSeoExpertPage() {
  const breadcrumbData = breadcrumbGraph([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Hire SEO Expert", path: "/services/hire-seo-expert/" },
  ]);

  return (
    <>
      {renderJsonLd(breadcrumbData, "jsonld-hire-seo-breadcrumb")}
      {renderJsonLd(faqGraph(HIRE_FAQS), "jsonld-hire-seo-faq")}

      <div className="space-y-12 sm:space-y-16 pt-24 lg:pt-28 pb-16 max-w-5xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Hire SEO Expert India" },
          ]}
        />

        {/* Hero Section */}
        <header className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Top-Ranked SEO Specialist &amp; Consultant in India
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Hire SEO Expert India —{" "}
              <span className="text-emerald-400">Dedicated SEO Specialist &amp; Team</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl font-light">
              I'm Rohit Gupta — a freelance SEO expert and full-stack developer working out of Noida. For years I've helped small businesses, online stores, and even other agencies get more customers from Google. The difference? I do the work myself. I don't hand you a pretty report and disappear — I dig into your site, fix the code, build the links, and stay on top of it. You can hire me directly as your dedicated <strong>SEO specialist</strong>, or bring in my small team when you need content, links, and web development at scale. Every project is clean, white hat SEO — no spam, no shortcuts, nothing that puts your domain at risk.
            </p>
          </div>

          {/* Quick CTA & Contact Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact/"
              className="btn-3d-emerald text-xs font-mono font-black py-3.5 px-6 flex items-center gap-2"
            >
              <span>Hire Dedicated SEO Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Rohit, I would like to discuss hiring you as our SEO expert / specialist.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-5 flex items-center gap-2 text-emerald-400"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Instant Chat</span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="card-3d text-xs font-mono text-white/70 py-3.5 px-4 flex items-center gap-2 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 96966 21216</span>
            </a>
          </div>

          {/* Highlight badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs font-mono text-white/70">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>100% White Hat</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>No Long Contracts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Core Web Vitals 99+</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>AI Search Ready</span>
            </div>
          </div>
        </header>

        {/* How I Work - human/E-E-A-T section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
              <Check className="w-3.5 h-3.5" />
              <span>How I Actually Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              What It Looks Like When You <span className="text-emerald-400">Hire Me</span>
            </h2>
            <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
              I've noticed most business owners are burned by SEO before they even start — an agency sold them a package, nothing moved, and they cancelled after six months. So let's be clear about how I work from the very first week.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Week one — I dig in before I promise anything",
                body: "I start with a real technical audit of your site, not a template. I look at your crawl, your code, your speed, your keywords, and what your competitors are actually ranking for. Within a week you get a plain-language breakdown of what's broken and what's worth fixing first.",
              },
              {
                title: "I fix problems myself, not just report them",
                body: "Because I write code, I don't send you a list of issues and wait. If your site needs schema, faster images, or a cleaner crawl path, I implement it. This is the part most agencies simply hand back to your already-busy developers.",
              },
              {
                title: "We agree on honest targets",
                body: "I won't tell you 'guaranteed #1 in a week', because anyone who does is lying. Instead we set realistic goals — which keywords we're after, what timeline is fair, and how we'll measure it — and I report against those same numbers every month.",
              },
              {
                title: "Monthly reports you can actually read",
                body: "Every month you get: what I did, what moved (organic sessions, keyword positions, Core Web Vitals), and what's next. In plain words. If something isn't working, you'll hear it from me first — not when it's too late to fix.",
              },
            ].map((step) => (
              <div key={step.title} className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-1.5">
                <h3 className="text-base font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Models */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Flexible Hiring Models</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Choose How You Want to <span className="text-emerald-400">Hire SEO Talent</span>
            </h2>
            <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
              Startups, mid-size companies, and even other agencies all hire SEO help for different reasons. Pick the setup that fits how much work you need and how you like to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div
                key={idx}
                className="card-3d-interactive p-6 rounded-3xl space-y-4 flex flex-col justify-between border border-white/10 hover:border-emerald-500/40 transition-colors shadow-xl"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 inline-block">
                    {model.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">{model.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{model.desc}</p>

                  <div className="pt-2 space-y-2">
                    <p className="text-[11px] font-mono uppercase text-white/40 font-bold tracking-wider">Key Deliverables:</p>
                    <ul className="space-y-1.5">
                      {model.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="text-xs font-mono text-emerald-400 font-bold">{model.pricing}</div>
                  <Link
                    href="/contact/"
                    className="btn-3d-dark w-full py-2.5 px-4 text-xs font-mono font-bold flex items-center justify-center gap-1.5"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Hire Rohit Gupta Section */}
        <section className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Why Businesses Hire Rohit Gupta as Their <span className="text-emerald-400">SEO Professional</span>
            </h2>
            <p className="text-sm text-white/65 leading-relaxed max-w-3xl">
              Most SEO consultants send static recommendations and wait for your developers to act. As a seasoned full-stack engineer and technical SEO specialist, I audit, code, optimize, and rank your web assets from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {WHY_HIRE_ROHIT.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs text-white/65 leading-relaxed font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Vetting Checklist */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono uppercase tracking-widest font-bold">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Hiring Best Practices</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              The 4-Step Checklist for <span className="text-amber-400">Hiring an SEO Expert</span>
            </h2>
            <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
              Use this short list when you interview candidates — it's the same checklist I'd use if I were hiring for my own clients. It separates real SEO professionals from people who talk a good game.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VETTING_CHECKLIST.map((step) => (
              <div key={step.step} className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-2 shadow-xl">
                <div className="text-xs font-mono font-black text-amber-400">{step.step}</div>
                <h3 className="text-base font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO FAQs */}
        <section className="card-3d-interactive p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-emerald-400" />
              Frequently Asked Questions About Hiring an SEO Expert
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Straight answers on pricing, how long results take, what's white hat, and how we'd work together.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {HIRE_FAQS.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950 border border-emerald-500/30 text-center space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Hire a Top-Rated <span className="text-emerald-400">SEO Expert in India</span>?
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
            Claim your free 24-hour technical SEO audit and discover how we can take your target keywords to Position #1 on Google.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact/"
              className="btn-3d-emerald text-xs font-mono font-black py-3.5 px-8"
            >
              Get Free SEO Audit &amp; Proposal
            </Link>
            <Link
              href="/case-studies/"
              className="btn-3d-dark text-xs font-mono font-bold py-3.5 px-6"
            >
              View Verified Case Studies
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
