// Central JSON-LD builders + renderer.
// All schema URLs resolve from APP_URL so every environment (dev/preview/prod)
// emits the same entity graph with the correct canonical host.
import type { ReactElement } from "react";
import { SITE_URL, OG_IMAGE, SOCIALS } from "@/config/site";
import { CONTACT } from "@/config/site";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function renderJsonLd(data: object, id?: string): ReactElement {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
}

/** Organization-level graph: Person, ProfessionalService and WebSite (with sitelinks searchbox). */
export function organizationGraph(): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": "Rohit Gupta",
        "url": `${SITE_URL}/`,
        "image": OG_IMAGE,
        "jobTitle": "Full Stack Web Developer & SEO Specialist",
        "description":
          "SEO specialist and expert for hire. Technical SEO, Core Web Vitals, Local SEO, AI search optimization and full stack web development in Noida, Delhi and India.",
        "telephone": CONTACT.phone.replace(/\s+/g, ""),
        "email": CONTACT.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ayodhya",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "272130",
          "addressCountry": "IN",
        },
        "alumniOf": "Dronacharya Group of Institutions, AKTU University, Greater Noida",
        "worksFor": { "@id": `${SITE_URL}/#service` },
        "sameAs": [
          SOCIALS.linkedin,
          SOCIALS.github,
          SOCIALS.twitter,
        ],
        "knowsAbout": [
          "Search Engine Optimization",
          "Technical SEO",
          "On-Page SEO",
          "Off-Page SEO",
          "Local SEO",
          "Core Web Vitals",
          "Schema JSON-LD Structured Data",
          "AI Search Optimization",
          "Google Search Console",
          "Google Ads",
          "Keyword Research",
          "Full Stack Web Development",
          "React.js",
          "Next.js",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        "name": "Rohit Gupta — SEO Specialist & Web Developer (Noida, Delhi, India)",
        "url": `${SITE_URL}/`,
        "image": OG_IMAGE,
        "description":
          "Professional SEO and web development services. Helping businesses rank #1 on Google and AI search engines across Noida, Delhi, Gurgaon, Ghaziabad, Lucknow, Ayodhya and anywhere in India — plus remote clients worldwide.",
        "provider": { "@id": `${SITE_URL}/#person` },
        "telephone": CONTACT.phone.replace(/\s+/g, ""),
        "email": CONTACT.email,
        "priceRange": "₹₹",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.795,
          "longitude": 82.199,
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ayodhya",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "272130",
          "addressCountry": "IN",
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00",
        },
        "sameAs": [
          SOCIALS.linkedin,
          SOCIALS.github,
          SOCIALS.twitter,
        ],
        "areaServed": [
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Delhi" },
          { "@type": "City", "name": "Gurgaon" },
          { "@type": "City", "name": "Ghaziabad" },
          { "@type": "City", "name": "Lucknow" },
          { "@type": "City", "name": "Ayodhya" },
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "Worldwide" },
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Specialist Services India",
              "serviceType": "Search Engine Optimization",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO Audit & Core Web Vitals",
              "serviceType": "Technical SEO",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO Services (Google Business)",
              "serviceType": "Local SEO",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-Commerce SEO Expert",
              "serviceType": "E-Commerce SEO",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Stack Web Development (React, Next.js)",
              "serviceType": "Web Development",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": `${SITE_URL}/`,
        "name": "Rohit Gupta | SEO Specialist Expert India",
        "publisher": { "@id": `${SITE_URL}/#person` },
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/seo-tools?query={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

/** FAQPage graph derived from the same data the visible FAQ accordion renders. */
export function faqGraph(faqs: { question: string; answer: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };
}

/** BreadcrumbList for any page. */
export function breadcrumbGraph(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${items[items.length - 1].path}#breadcrumb`,
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
