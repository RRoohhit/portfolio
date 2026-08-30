"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * SmoothScrollHandler intercepts all in-page hash links (e.g. href="#features", href="#faq")
 * and smoothly scrolls the viewport with the proper top offset (88px) to account for the
 * fixed frosted navbar.
 */
export const SmoothScrollHandler: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href*='#']");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Handle pure hash links like "#faq" or same-page hashes "/blog/xyz/#section-1"
      const url = new URL(anchor.href, window.location.href);
      if (url.pathname === window.location.pathname && url.hash) {
        const hashTarget = document.querySelector(url.hash);
        if (hashTarget) {
          e.preventDefault();
          const targetTop = hashTarget.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: "smooth",
          });
          if (history.pushState) {
            history.pushState(null, "", url.hash);
          }
        }
      }
    };

    document.addEventListener("click", handleClick, { capture: true });

    // Also handle initial page load with hash in URL
    if (window.location.hash) {
      setTimeout(() => {
        const initialTarget = document.querySelector(window.location.hash);
        if (initialTarget) {
          const targetTop = initialTarget.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: "smooth",
          });
        }
      }, 250);
    }

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [pathname]);

  return null;
};

export default SmoothScrollHandler;
