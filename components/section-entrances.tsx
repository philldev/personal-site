"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SectionEntrances() {
  const pathname = usePathname();
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const pending = new Map<HTMLElement, Animation>();
    const seen = new WeakSet<HTMLElement>();
    const animate = (element: HTMLElement, delay = 0, child = false) => {
      const animation = element.animate(
        [
          {
            opacity: 0,
            filter: child ? "blur(0px)" : "blur(6px)",
            transform: `translateY(${child ? 8 : 20}px)`,
          },
          { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
        ],
        {
          duration: child ? 420 : 560,
          delay,
          easing: "cubic-bezier(0.23, 1, 0.32, 1)",
          fill: "both",
        },
      );
      animations.add(animation);
      animation.finished
        .then(() => {
          animation.cancel();
          animations.delete(animation);
        })
        .catch(() => {});
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          pending.get(element)?.cancel();
          pending.delete(element);
          if (media.matches) continue;
          animate(element);
          element
            .querySelectorAll<HTMLElement>(".work-list > li, .experience-row")
            .forEach((child, index) => animate(child, 70 + index * 70, true));
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );
    const discover = () => {
      if (media.matches) return;
      document
        .querySelectorAll<HTMLElement>(
          ".site-header, .home-sections > *, .inner-page > *",
        )
        .forEach((element) => {
          if (seen.has(element)) return;
          seen.add(element);
          // Keep a scrolled-to section readable if navigation restores scroll position.
          if (element.getBoundingClientRect().bottom < 0) return;
          // WAAPI avoids changing React-owned attributes before streamed hydration.
          pending.set(element, element.animate(
            [{ opacity: 0 }, { opacity: 0 }],
            { duration: 1, fill: "both" },
          ));
          observer.observe(element);
        });
    };
    const showAll = () => {
      if (!media.matches) return;
      observer.disconnect();
      pending.forEach((animation) => animation.cancel());
      pending.clear();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    discover();
    // Server-rendered activity can arrive after the initial hydration pass.
    const mutation = new MutationObserver(discover);
    const main = document.querySelector("main");
    if (main) mutation.observe(main, { childList: true, subtree: true });
    media.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      mutation.disconnect();
      media.removeEventListener("change", showAll);
      pending.forEach((animation) => animation.cancel());
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname]);
  return null;
}
