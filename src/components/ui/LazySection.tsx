"use client";
import React, { useEffect, useRef, useState } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  /** IntersectionObserver rootMargin — start loading this far before the section enters the viewport. */
  rootMargin?: string;
  /** Include a stable min-height wrapper so the page height does not jump. */
  minHeight?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className,
  rootMargin = "700px 0px",
  minHeight,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={minHeight && !visible ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  );
};