import { organizationGraph, renderJsonLd } from "@/lib/jsonld";

/**
 * Global organization-level structured data, rendered once in the root layout.
 * FAQPage schema is emitted by the FAQ accordion component (page-level),
 * and page-specific BreadcrumbList graphs are emitted per route.
 */
export const StructuredData: React.FC = () => renderJsonLd(organizationGraph(), "jsonld-organization");
