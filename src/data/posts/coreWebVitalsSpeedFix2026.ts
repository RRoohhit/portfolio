import { BlogPost } from "../../types";

export const coreWebVitalsSpeedFix2026: BlogPost = {
  id: "blog-70",
  title: "Website Speed Optimisation India: Core Web Vitals That Rank (2026)",
  h1: "Website Speed Optimisation: Core Web Vitals Fixes That Actually Rank",
  slug: "website-speed-optimisation-core-web-vitals-2026",
  excerpt:
    "Slow site killing rankings and enquiries? LCP, INP, CLS fixes explained in plain words — what slows Indian sites down and how I fix it in code.",
  date: "2026-10-19",
  readTime: "11 min read",
  category: "Technical SEO",
  keywords: [
    "website speed optimisation india",
    "core web vitals fix india",
    "page speed optimisation",
    "lcp optimisation",
    "inp optimisation",
    "cls fix",
    "lighthouse 90 score",
    "site speed expert india",
  ],
  content: `
## Your Visitors Leave Before Your Site Loads

Here is an uncomfortable number: a one-second delay in mobile load time cuts conversions by up to 20%. On Indian 4G connections with mid-range phones, most business sites I audit take 6–9 seconds to become usable. Visitors do not wait. They hit back and call your competitor.

Google made this official — Core Web Vitals (LCP, INP, CLS) directly influence rankings. But forget Google for a second. Speed is money first, rankings second.

---

## The Three Scores in Plain Words

**LCP — how fast your main content appears.** Usually your hero image or headline. Google wants it under 2.5 seconds; I aim under 1.2 for competitive keywords. Slow LCP almost always means unoptimised hero images, slow server response, or a slideshow script blocking everything.

**INP — how fast your site reacts to taps.** Every tap, click, form fill. Under 200ms passes; under 100ms wins. Bad INP means too much JavaScript fighting on the main thread — chat widgets, page builders, five analytics tools all shouting at once.

**CLS — does your page jump around while loading?** Buttons shifting just as someone taps, text reflowing as fonts arrive. Above 0.1 fails. The fix is embarrassingly simple: reserve space for every image, ad and embed before they load.

---

## What Slows Down Indian Business Sites

After dozens of audits, the same culprits repeat: 4MB hero images uploaded straight from a photographer, page builders loading 800KB of CSS for a 5-page site, three chat widgets plus two popups, cheap shared hosting with 2-second server response, YouTube embeds loading five scripts before anyone presses play, and no caching at all.

The pattern: nobody chose slowness. It accumulated one plugin at a time.

---

## How I Fix It — In Code, Not Slides

Images go to WebP/AVIF with exact dimensions and lazy loading below the fold. Render-blocking CSS and JS get deferred or split. Fonts use display-swap with preloading. Heavy embeds get click-to-load facades. Server response gets caching, CDN and database cleanup. Typical result: 35–45 Lighthouse to 90+ within two to four weeks, verified on real field data — not just my laptop.

One Noida client — a clinic site — went from 7.1s mobile LCP to 1.1s. Their "book appointment" clicks tripled before rankings even moved. Speed pays first.

Here is the fortnight-by-fortnight reality. Days 1–3: measurement on real devices — lab scores plus Chrome UX Report field data, image audit (4MB hero found), plugin inventory (three chat widgets, two popup tools). Days 4–7: hero rebuilt to AVIF with preload, render-blocking scripts deferred, font-display swapped with preloading, YouTube embeds converted to click-to-load facades. LCP fell from 7.1s to 2.4s in the first week. Days 8–14: server caching plus CDN, database cleanup, lazy loading below the fold, layout-shift reservations for every banner and embed. LCP landed at 1.1s, CLS at 0.02, INP at 78ms. Appointment clicks tripled before a single ranking moved — speed converts the traffic you already have before earning new traffic.

---

## 5 Speed Mistakes That Cost Lakhs Silently

**Mistake 1: photographer-direct uploads.** 4MB hero images straight from the camera roll. One image often outweighs the entire rest of the page — compress and convert before upload, always.

**Mistake 2: widget stacking.** Chat plus popup plus review-badge plus analytics — each "small" script fights on the main thread until taps lag seconds behind fingers. Audit every third-party script quarterly; kill what does not earn its milliseconds.

**Mistake 3: page-builder bloat.** 800KB of CSS for a five-page site. Builders ship everything for every page whether used or not. Custom or lean themes cut the dead weight permanently.

**Mistake 4: lab-score obsession.** Chasing 100 on office WiFi while real users on 4G suffer. Field data (CrUX 75th percentile) is the score that matters — lab green with field red converts nothing.

**Mistake 5: embed autoload.** YouTube, maps and social feeds loading five scripts before anyone presses play. Click-to-load facades recover seconds for the price of one thumbnail.

---

## Your 14-Day Speed Checklist

**Days 1–3 — measure honestly.** Lab plus field scores, image audit, script inventory, hosting response check. List the three biggest drags by millisecond impact — fix order follows impact, not ease.

**Days 4–7 — biggest wins.** Hero rebuild (AVIF, preload, exact dimensions), render-blocking deferral, font swap, embed facades. Re-measure — most sites halve LCP in week one.

**Days 8–11 — server layer.** Caching, CDN, database cleanup, lazy loading, shift reservations. Verify on a mid-range Android over 4G, not your laptop.

**Days 12–14 — lock it.** Image-upload rules for the team, script-approval policy, monthly field-data monitoring. Speed decays without governance — one careless plugin undoes a fortnight.

---

## What Speed Work Costs

Part of any technical retainer with me (Rs 15k–40k/month according to work), or scoped standalone for smaller sites. You get before/after Lighthouse plus Chrome UX Report field data, and a list of everything changed. [Ask for a free speed check here](/contact/) — I will tell you your real scores and the three biggest drags, free.

### Continue Reading
- [Core Web Vitals for React and Next.js](/blog/core-web-vitals-react-nextjs/)
- [Technical SEO services in India](/blog/technical-seo-services-india-2026/)
- [Technical SEO audit checklist](/blog/technical-seo-audit-checklist-guide-2026/)
  `,
  faqs: [
    {
      question: "What is a good page speed score in 2026?",
      answer:
        "Pass marks are LCP under 2.5s, INP under 200ms, CLS under 0.1 — but competitive sites aim for LCP under 1.2s and INP under 100ms on real-user field data, not just lab tests. Green on the 75th percentile of real users is the real target.",
    },
    {
      question: "Does website speed affect Google rankings?",
      answer:
        "Yes. Core Web Vitals are confirmed ranking signals, and speed also lifts conversions and engagement which compound rankings indirectly. A faster site earns more clicks, longer visits and more enquiries from the same traffic.",
    },
    {
      question: "Why is my WordPress site so slow?",
      answer:
        "Usually heavy page builders, oversized images, too many plugins and widgets, cheap shared hosting and zero caching. Each adds a little; together they add seconds. A proper optimisation pass fixes all five layers together.",
    },
    {
      question: "How long does speed optimisation take?",
      answer:
        "Most business sites go from red to green within two to four weeks including testing. Large e-commerce or React apps take longer due to template volume, but the biggest wins still land in the first fortnight.",
    },
  ],
};
