import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap.to(".hero-image", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power1.out",
    });

    gsap.to(".hero-bg-text", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power1.out",
      delay: 0.5,
    });
  }, []);

  return (
    <section className="hero z-1 flex w-full flex-col overflow-hidden">
      {/* HERO CONTENT */}
      <div className="relative z-10 h-full w-full">
        {/* Background Typography */}

        <Image
          src="/images/bg-text-tight.svg"
          alt="Anuj – UI UX Designer"
          width={1600}
          height={600}
          priority
          className="absolute top-[114px] left-1/2 mx-auto w-[95%] -translate-x-1/2"
        />

        {/* Hero Image */}
        <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
          <Image
            src="/images/hero-image.png"
            alt="Anuj – UI UX Designer"
            width={1160}
            height={1754}
            className="hero-image max-w-105 opacity-0"
            loading="lazy"
          />
        </div>

        {/* Background pattern (optional layer) */}

        <div className="absolute inset-0 -z-10">
          <Image src="/images/bg-pattern.png" alt="" fill priority />
        </div>
      </div>
    </section>
  );
};

export default Hero;
