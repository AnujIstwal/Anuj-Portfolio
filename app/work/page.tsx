"use client";

import Navbar from "../components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import SelectedWork from "./components/SelectedWork";

export default function Work() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      <main className="bg-bg flex h-min min-h-screen w-auto flex-col items-center">
        {/* header */}
        <SelectedWork />

        {/* projects grid */}
        <ProjectGrid />
      </main>
    </div>
  );
}
