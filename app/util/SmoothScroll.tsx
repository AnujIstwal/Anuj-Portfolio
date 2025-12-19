"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9, // 👈 smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 👈 easing
      smoothWheel: true, // important
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update(); // 🔥 sync GSAP
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
