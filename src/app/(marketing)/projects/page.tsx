import type { Metadata } from "next";
import { ProjectsPage } from "@/components/views/projects/ProjectsPage";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbGraph, renderJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "Live Website Projects Built From Scratch | Rohit Gupta India",
  description:
    "Two live websites designed, built and SEO-optimized from scratch by Rohit Gupta: MegaMind India (Next.js + Supabase dynamic site) and AttendanceSolution.in (HTML + Tailwind) — technical SEO, on-page, local SEO, GBP, AEO & GEO.",
  path: "/projects",
  keywords: [
    "live website projects",
    "nextjs supabase portfolio",
    "web developer portfolio india",
    "seo specialist Noida",
    "seo optimized websites",
  ],
});

export default function Projects() {
  return (
    <>
      {renderJsonLd(
        breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects/" },
        ]),
        "jsonld-projects-breadcrumb"
      )}
      <div className="space-y-6 pt-24 lg:pt-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Projects" },
          ]}
        />
        <ProjectsPage />
      </div>
    </>
  );
}
