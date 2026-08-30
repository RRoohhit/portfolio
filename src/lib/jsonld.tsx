// Central JSON-LD builders + renderer.
// All schema URLs resolve from APP_URL so every environment (dev/preview/prod)
// emits the same entity graph with the correct canonical host.
import type { ReactElement } from "react";
import { SITE_URL, OG_IMAGE, SOCIALS } from "@/config/site";
import { CONTACT } from "@/config/site";

// Only real, working profile URLs belong in `sameAs` — placeholder "#" links
// weaken entity resolution in Google's Knowledge Graph and AI answer engines.
const REAL_PROFILES: string[] = [
  SOCIALS.linkedin,
  SOCIALS.instagram,
  SOCIALS.whatsapp,
].filter((u) => Boolean(u) && u.startsWith("http"));

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

/** ProfilePage structured data for /rohit-gupta/ page */
export function profilePageGraph(): object {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Rohit Gupta",
      "jobTitle": "SEO Expert, Digital Marketing Consultant & Full-Stack Web Developer",
      "url": `${SITE_URL}/rohit-gupta/`,
      "sameAs": [
        SOCIALS.linkedin,
        SOCIALS.instagram,
        SOCIALS.github,
        SOCIALS.twitter,
      ],
    },
  };
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
        "url": `${SITE_URL}/rohit-gupta/`,
        "image": OG_IMAGE,
        "jobTitle": "SEO Expert, Digital Marketing Consultant & Full-Stack Web Developer",
        "description":
          "Rohit Gupta is an SEO expert, digital marketing consultant & full-stack web developer helping businesses improve organic search visibility, website performance and online growth.",
        "telephone": CONTACT.phone.replace(/\s+/g, ""),
        "email": CONTACT.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gali No. 7, Block M, Mamura, Sector 66",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201309",
          "addressCountry": "IN",
        },
        "homeLocation": {
          "@type": "PostalAddress",
          "addressLocality": "Ayodhya",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN",
        },
        "alumniOf": "Dronacharya Group of Institutions, AKTU University, Greater Noida",
        "worksFor": { "@id": `${SITE_URL}/#service` },
        "sameAs": REAL_PROFILES,
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
        "hasMap": CONTACT.googleMaps,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": CONTACT.phone.replace(/\s+/g, ""),
          "contactType": "sales",
          "availableLanguage": ["en", "hi"],
        },
        "availableLanguage": ["en", "hi"],
        "currenciesAccepted": "INR",
        "paymentAccepted": "UPI, Bank Transfer, PayPal",
        "sameAs": REAL_PROFILES,
        "areaServed": [
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Delhi" },
          { "@type": "City", "name": "Gurgaon" },
          { "@type": "City", "name": "Ghaziabad" },
          { "@type": "City", "name": "Lucknow" },
          { "@type": "City", "name": "Ayodhya" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Bengaluru" },
          { "@type": "City", "name": "Hyderabad" },
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Kolkata" },
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "Worldwide" },
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hire Dedicated SEO Expert & Specialist India",
              "serviceType": "Search Engine Optimization",
              "url": `${SITE_URL}/services/hire-seo-expert/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WordPress Development Company Services",
              "serviceType": "WordPress Development",
              "url": `${SITE_URL}/services/wordpress-development/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Specialist Services India",
              "serviceType": "Search Engine Optimization",
              "url": `${SITE_URL}/services/seo/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "White Hat SEO Firm & Services",
              "serviceType": "White Hat SEO",
              "url": `${SITE_URL}/services/white-hat-seo/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO Audit & Core Web Vitals",
              "serviceType": "Technical SEO",
              "url": `${SITE_URL}/services/technical-seo/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Business Profile SEO & Map Pack",
              "serviceType": "Local SEO",
              "url": `${SITE_URL}/services/google-business-profile-seo/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Page SEO & Content Optimization",
              "serviceType": "On-Page SEO",
              "url": `${SITE_URL}/services/on-page-seo/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-Page SEO & Link Building",
              "serviceType": "Off-Page SEO",
              "url": `${SITE_URL}/services/off-page-seo/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO Services in Noida",
              "serviceType": "Local SEO",
              "url": `${SITE_URL}/local-seo-noida/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-Commerce SEO Expert (Shopify & WooCommerce)",
              "serviceType": "E-Commerce SEO",
              "url": `${SITE_URL}/services/ecommerce-seo/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Search Optimization (AEO Tools / GEO)",
              "serviceType": "AI Search Optimization",
              "url": `${SITE_URL}/services/ai-search-optimization/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rohit Digital Marketing Services & Google Ads",
              "serviceType": "Digital Marketing",
              "url": `${SITE_URL}/services/digital-marketing/`,
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Stack Web Development (React, Next.js)",
              "serviceType": "Web Development",
              "url": `${SITE_URL}/services/web-development/`,
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
