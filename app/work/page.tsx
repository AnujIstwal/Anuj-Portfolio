"use client";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      <main className="h-screen w-full bg-red-200"></main>

      <Footer />
    </div>
  );
}
