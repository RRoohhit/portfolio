import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Visible breadcrumb navigation that mirrors the JSON-LD BreadcrumbList
 * emitted by each marketing/tool page. The last item renders as the current
 * page (non-link). Rendered as a server component so it works on SSG pages.
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => (
  <nav
    aria-label="Breadcrumb"
    className={`flex flex-wrap items-center gap-1.5 text-xs font-mono text-white/50 ${className}`}
  >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={`${item.name}-${i}`} className="flex items-center gap-1.5 min-w-0">
              {i > 0 && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-white/25 shrink-0"
                  aria-hidden="true"
                />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors whitespace-nowrap"
                >
                  {i === 0 && <Home className="w-3 h-3 shrink-0" aria-hidden="true" />}
                  {item.name}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  title={isLast ? item.name : undefined}
                  className={`flex items-center gap-1.5 ${
                    isLast ? "text-emerald-400 truncate max-w-[260px]" : "whitespace-nowrap"
                  }`}
                >
                  {i === 0 && <Home className="w-3 h-3 shrink-0" aria-hidden="true" />}
                  <span className="truncate">{item.name}</span>
                </span>
              )}
            </span>
          );
        })}
  </nav>
);

export default Breadcrumbs;
