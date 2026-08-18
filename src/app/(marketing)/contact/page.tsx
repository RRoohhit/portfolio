import type { Metadata } from "next";
import { ContactSection } from "@/components/shared/ContactSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { CONTACT } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact SEO Specialist Rohit Gupta | Free SEO Audit",
  description: `Contact Rohit Gupta - SEO specialist & full stack web developer in Noida, Delhi & India. Get a free technical SEO audit. Call/WhatsApp ${CONTACT.phone}.`,
  path: "/contact",
  keywords: [
    "hire SEO specialist",
    "SEO consultant India",
    "free SEO audit",
    "contact SEO expert Noida",
    "SEO specialist for hire",
  ],
});

export default function Contact() {
  return (
    <>
      {renderJsonLd(
        breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
        "jsonld-contact-breadcrumb"
      )}
      <div className="space-y-6 pt-24 lg:pt-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact" },
          ]}
        />
        <div className="space-y-4 max-w-4xl mx-auto text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact SEO Specialist &amp; Web Developer Rohit Gupta
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            Ready to scale your organic search visibility, eliminate technical SEO bottlenecks, or build a high-speed React / Next.js web application? Get in touch directly with Rohit Gupta. Whether you need a comprehensive website audit, local Google Maps 3-Pack optimization in Noida/Delhi NCR, or a full digital growth strategy, submit your inquiry below or reach out via WhatsApp and phone for immediate assistance.
          </p>
        </div>
        <ContactSection />
      </div>
    </>
  );
}