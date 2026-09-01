// Central JSON-LD builders + renderer.
// All schema URLs resolve from APP_URL so every environment (dev/preview/prod)
// emits the same entity graph with the correct canonical host.
import type { ReactElement } from "react";
import { SITE_URL, OG_IMAGE, SOCIALS, CONTACT } from "@/config/site";

// Only real, working profile URLs belong in `sameAs` — placeholder "#" links
// weaken entity resolution in Google's Knowledge Graph and AI answer engines.
const REAL_PROFILES: string[] = [
  SOCIALS.linkedin,
  SOCIALS.instagram,
  SOCIALS.whatsapp,
  (SOCIALS as Record<string, string>).github,
].filter((u): u is string => typeof u === "string" && u.trim().length > 0 && u.startsWith("http"));

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Safely renders JSON-LD script tag with escaped HTML brackets to prevent injection issues.
 */
export function renderJsonLd(data: object, id?: string): ReactElement {
  const safeJson = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson }}
      suppressHydrationWarning
    />
  );
}

/** ProfilePage structured data for /rohit-gupta/ page */
export function profilePageGraph(): object {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/rohit-gupta/#profilepage`,
    "url": `${SITE_URL}/rohit-gupta/`,
    "name": "Rohit Gupta — Profile & Biography",
    "inLanguage": "en-IN",
    "mainEntity": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": "Rohit Gupta",
      "jobTitle": "SEO Expert, Digital Marketing Consultant & Full-Stack Web Developer",
      "url": `${SITE_URL}/rohit-gupta/`,
      "image": OG_IMAGE,
      "description":
        "Rohit Gupta is an SEO expert, digital marketing consultant & full-stack web developer helping businesses improve organic search visibility, website performance and online growth.",
      "sameAs": REAL_PROFILES,
    },
  };
}

/** Organization-level graph: Person, ProfessionalService, WebSite and SiteNavigationElement. */
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
        "nationality": {
          "@type": "Country",
          "name": "India",
        },
        "knowsAbout": [
          "Search Engine Optimization",
          "Technical SEO",
          "On-Page SEO",
          "Off-Page SEO",
          "Local SEO",
          "International SEO",
          "E-Commerce SEO",
          "Core Web Vitals",
          "Schema JSON-LD Structured Data",
          "AI Search Optimization",
          "Answer Engine Optimization",
          "Generative Engine Optimization",
          "Google Search Console",
          "Google Ads",
          "Keyword Research",
          "Link Building",
          "Google Business Profile Optimization",
          "Full Stack Web Development",
          "React.js",
          "Next.js",
          "TypeScript",
          "WordPress Development",
          "WooCommerce",
          "IndexNow API",
          "Screaming Frog",
          "Ahrefs",
          "Semrush",
        ],
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47",
          "bestRating": "5",
          "worstRating": "1",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO & Web Development Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated SEO Expert Retainer", "url": `${SITE_URL}/services/hire-seo-expert/` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO Audit", "url": `${SITE_URL}/services/technical-seo/` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "White Hat SEO Campaign", "url": `${SITE_URL}/services/white-hat-seo/` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO & Google Business Profile", "url": `${SITE_URL}/services/local-seo/` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Search Optimization (AEO/GEO)", "url": `${SITE_URL}/services/ai-search-optimization/` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Next.js Web Development", "url": `${SITE_URL}/services/nextjs-development/` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WordPress Development", "url": `${SITE_URL}/services/wordpress-development/` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management", "url": `${SITE_URL}/services/google-ads/` } },
          ],
        },
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
        "name": "Rohit Gupta SEO",
        "alternateName": [
          "Rohit Gupta",
          "Rohit Gupta SEO Expert",
          "rohitguptaseo.in",
          "Rohit Web Developer & SEO Expert",
        ],
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
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#site-navigation`,
        "name": "Main Navigation",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "About Rohit Gupta",
            "description": "About Rohit Gupta, Senior SEO Expert, Web Developer & Digital Marketing Consultant in Noida, India.",
            "url": `${SITE_URL}/rohit-gupta/`,
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "SEO & Web Services",
            "description": "Professional SEO, hire dedicated SEO specialists, white hat SEO, WordPress & Next.js web development.",
            "url": `${SITE_URL}/services/`,
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Free SEO Audit",
            "description": "Get a comprehensive technical SEO audit, Core Web Vitals diagnostic and on-page ranking checklist.",
            "url": `${SITE_URL}/seo-audit/`,
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Case Studies & Results",
            "description": "Verified client SEO growth case studies, keyword ranking proofs and organic traffic results.",
            "url": `${SITE_URL}/case-studies/`,
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "Featured Projects",
            "description": "Explore client web development, custom applications, and digital marketing projects delivered by Rohit Gupta.",
            "url": `${SITE_URL}/projects/`,
          },
          {
            "@type": "SiteNavigationElement",
            "position": 6,
            "name": "SEO Tools & Analyzers",
            "description": "Free SEO tools, meta tag checkers, SERP simulator and AI search optimization utilities.",
            "url": `${SITE_URL}/seo-tools/`,
          },
          {
            "@type": "SiteNavigationElement",
            "position": 7,
            "name": "SEO & Marketing Blog",
            "description": "Actionable SEO strategies, Google algorithm updates, technical tutorials and ranking guides.",
            "url": `${SITE_URL}/blog/`,
          },
          {
            "@type": "SiteNavigationElement",
            "position": 8,
            "name": "Contact Us",
            "description": "Contact Rohit Gupta for dedicated SEO services, freelance consultation, and custom project quotes.",
            "url": `${SITE_URL}/contact/`,
          },
        ],
      },
    ],
  };
}

/** FAQPage graph derived from the same data the visible FAQ accordion renders. */
export function faqGraph(
  faqs: { question: string; answer: string }[],
  pageUrl?: string
): object {
  const pageId = pageUrl
    ? `${pageUrl.replace(/\/$/, "")}/#faq`
    : `${SITE_URL}/#faq`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": pageId,
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };
}

/** BreadcrumbList for any page with canonical trailing-slash normalization. */
export function breadcrumbGraph(items: BreadcrumbItem[]): object {
  if (!items || items.length === 0) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [],
    };
  }

  const lastItem = items[items.length - 1];
  const normalizedLastPath = lastItem.path.startsWith("/")
    ? lastItem.path
    : `/${lastItem.path}`;
  const canonicalLastUrl =
    normalizedLastPath === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${normalizedLastPath.endsWith("/") ? normalizedLastPath : `${normalizedLastPath}/`}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalLastUrl}#breadcrumb`,
    "itemListElement": items.map((item, idx) => {
      const normalizedPath = item.path.startsWith("/")
        ? item.path
        : `/${item.path}`;
      const canonicalItemUrl =
        normalizedPath === "/"
          ? `${SITE_URL}/`
          : `${SITE_URL}${normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`}`;
      return {
        "@type": "ListItem",
        "position": idx + 1,
        "name": item.name,
        "item": canonicalItemUrl,
      };
    }),
  };
}
