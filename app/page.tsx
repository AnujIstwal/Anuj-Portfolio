"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Work from "./sections/Work";
import Hero from "./sections/Hero";
import Subhero from "./sections/Subhero";
import ScrollAnimation from "./sections/ScrollAnimation";
import Navbar from "./components/Navbar";
import Philosophy from "./sections/Philosophy";
import Outcomes from "./sections/Outcomes";

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
      <Philosophy />
      <Outcomes />
    </div>
  );
}
