"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./sections/hero/Hero";
import Work from "./sections/Work";
import Subhero from "./sections/Subhero";
import ScrollAnimation from "./sections/ScrollAnimation";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      <main>
        <ScrollAnimation>
          <Hero />
          <Subhero />
        </ScrollAnimation>
      </main>

      <Work />
    </div>
  );
}
