import Navbar from "@/app/components/Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero z-1 flex w-full flex-col">
      {/* HERO CONTENT */}
      <div className="relative z-10 h-full w-full">
        {/* Background Typography */}

        <Image
          src="/images/bg-text-tight.svg"
          alt="Anuj – UI UX Designer"
          width={1430}
          height={600}
          priority
          className="absolute top-[72px] left-1/2 mx-auto max-w-[95%] -translate-x-1/2"
        />

        {/* Hero Image */}
        <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
          <Image
            src="/images/hero-image.png"
            alt="Anuj – UI UX Designer"
            width={1160}
            height={1754}
            priority
            className="max-w-105"
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
