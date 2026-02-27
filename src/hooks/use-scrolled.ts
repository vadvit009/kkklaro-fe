"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether the page is scrolled past a given threshold (in pixels)
 * using IntersectionObserver instead of a scroll event listener.
 *
 * Creates an invisible sentinel element at the top of <body>
 * and observes its visibility via rootMargin.
 * When the sentinel leaves the viewport — returns true.
 */
export function useScrolled(threshold = 200): boolean {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sentinel = Object.assign(document.createElement("div"), {
      style: `position:absolute;top:0;left:0;width:1px;height:${threshold}px;pointer-events:none`,
    });
    document.body.prepend(sentinel);
    sentinelRef.current = sentinel;

    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [threshold]);

  return scrolled;
}
