"use client";

import Work from "./sections/Work";
import Hero from "./sections/Hero";
import Subhero from "./sections/Subhero";
import ScrollAnimation from "./util/ScrollAnimation";
import Navbar from "./components/Navbar";
import Philosophy from "./sections/Philosophy";
import Outcomes from "./sections/Outcomes";
import Footer from "./sections/Footer";

export default function Home() {
  // Default Lenis implementation
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

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
      <Footer />
    </div>
  );
}
