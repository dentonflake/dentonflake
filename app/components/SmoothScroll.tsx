"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // --- Navigation Scroll Logic ---
    const handleScrollTo = (e: any) => {
      const target = document.querySelector(e.detail) as HTMLElement;
      if (!target) return;

      const targetHeight = target.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate centering offset
      const offset = (targetHeight < windowHeight) 
        ? -(windowHeight / 2 - targetHeight / 2)
        : 0;

      window.dispatchEvent(new CustomEvent('scroll-start'));

      lenis.scrollTo(target, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        offset: offset,
        onComplete: () => {
          window.dispatchEvent(new CustomEvent('scroll-complete'));
        }
      });
    };

    window.addEventListener('scroll-to' as any, handleScrollTo);

    return () => {
      window.removeEventListener('scroll-to' as any, handleScrollTo);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
