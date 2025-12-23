"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";

function Subhero() {
  const titleRef = useRef(null);

  useGSAP(
    () => {
      const heroSplit = new SplitText(titleRef.current, {
        type: "chars,words",
      });

      // IMPORTANT: set initial state
      gsap.set(heroSplit.chars, {
        y: 60,
        opacity: 0,
      });

      gsap.to(heroSplit.chars, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
        stagger: 0.04,
        delay: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%", // when element enters viewport
          toggleActions: "play none none none",
          once: true,
        },
      });
    },
    { scope: titleRef },
  );
  return (
    <section className="subhero bg-bg border-border relative z-2 flex h-min w-full items-center justify-center border-t">
      {/* Subhero content goes here */}
      <div className="relative flex w-full max-w-400 flex-col-reverse items-start justify-between gap-[24px] overflow-visible px-[20px] py-[50px] pt-[150px] md:flex-row md:px-[50px]">
        <div className="min-h-min max-w-[800px] md:mb-40">
          <p
            ref={titleRef}
            className="sub-hero-title font-richmond text-left text-[4.3rem] md:text-[3.75rem] lg:text-[7rem]"
          >
            I help teams turn complex ideas into simple,clean & usable
            interfaces.
          </p>
        </div>
        <div className="pt-2.5">
          <p className="text-xl font-light tracking-widest uppercase">
            anuj kumar
          </p>
        </div>
      </div>
    </section>
  );
}

export default Subhero;
