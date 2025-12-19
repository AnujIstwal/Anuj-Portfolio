"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Pin hero
      ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "+=140%",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });

      // Slide description with delayed feel
      gsap.fromTo(
        ".subhero",
        { yPercent: 0 },
        {
          yPercent: -6,
          scrollTrigger: {
            trigger: ".subhero",
            start: "top bottom",
            end: "top top",
            scrub: 2.2,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollAnimation;
