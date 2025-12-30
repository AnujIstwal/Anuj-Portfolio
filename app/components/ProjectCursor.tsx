"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX + 12,
        y: e.clientY + 12,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="project-cursor pointer-events-none fixed top-0 left-0 z-[999] cursor-none opacity-0"
    >
      <div className="border-border bg-border/80 flex w-min items-center justify-center rounded-full border-[.5px] px-[15px] py-2 whitespace-nowrap">
        <div>Explore project</div>
      </div>
    </div>
  );
}
