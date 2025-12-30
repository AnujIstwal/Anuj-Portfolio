import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Hero = () => {
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const bgTextRef = useRef<HTMLImageElement | null>(null);
  const bgPatternRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Initial states (before paint)
    gsap.set(bgPatternRef.current, {
      opacity: 0,
    });

    gsap.set(heroImageRef.current, {
      opacity: 0,
      y: 40,
    });

    gsap.set(bgTextRef.current, {
      opacity: 0,
      y: 20,
    });

    // Timeline for nicer sequencing
    const tl = gsap.timeline();

    tl.to(bgPatternRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    })
      .to(bgTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        heroImageRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4",
      );
  }, []);

  return (
    <section className="hero z-1 flex w-full flex-col overflow-hidden">
      {/* HERO CONTENT */}
      <div className="relative z-10 h-full w-full">
        {/* Background Typography */}

        <Image
          ref={bgTextRef}
          src="/images/bg-text-tight.svg"
          alt="Anuj – UI UX Designer"
          width={1600}
          height={600}
          className="absolute top-[114px] left-1/2 mx-auto w-[95%] -translate-x-1/2 opacity-0"
        />

        {/* Hero Image */}
        <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
          <Image
            ref={heroImageRef}
            src="/images/hero-image.png"
            alt="Anuj – UI UX Designer"
            width={1160}
            height={1754}
            className="hero-image max-w-105 opacity-0"
            loading="lazy"
          />
        </div>

        {/* Background pattern (optional layer) */}

        <div ref={bgPatternRef} className="absolute inset-0 -z-10 opacity-0">
          <Image src="/images/bg-pattern.png" alt="" fill />
        </div>
      </div>
    </section>
  );
};

export default Hero;
