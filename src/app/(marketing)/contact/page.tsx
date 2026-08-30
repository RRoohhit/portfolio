import type { Metadata } from "next";
import { ContactSection } from "@/components/shared/ContactSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";
import { CONTACT } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact SEO Specialist Rohit Gupta | Free SEO Audit",
  description: `Contact Rohit Gupta - SEO specialist & full stack web developer in Noida, Delhi & India. Get a free technical SEO audit. Call/WhatsApp ${CONTACT.phone}.`,
  path: "/contact/",
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
          { name: "Contact", path: "/contact/" },
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
        <div className="space-y-4 max-w-5xl mx-auto text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-mono uppercase font-bold tracking-widest">
            <span>Free Consultation • Custom Quote</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Book a Free SEO Consultation &amp; Growth Strategy Call
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-3xl">
            Whether you need local SEO, technical website fixes, e-commerce growth, Google Business Profile optimization, paid ads strategy, or a full digital marketing setup — this is where we define the right scope, budget, and next steps for your business.
          </p>
        </div>
        <ContactSection />
      </div>
    </>
  );
}