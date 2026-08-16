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
        <h1 className="sr-only">
          Contact SEO Specialist &amp; Expert Rohit Gupta in Noida, Delhi, India
        </h1>
        <ContactSection />
      </div>
    </>
  );
}