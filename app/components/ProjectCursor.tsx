"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function ProjectCursor() {
  const [mounted, setMounted] = useState(false);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  console.log("pathname", pathname);

  useEffect(() => {
    if ("ontouchstart" in window) return; // disable on touch

    const move = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX + 14,
        y: e.clientY + 14,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 🔑 RESET ON ROUTE CHANGE
  useEffect(() => {
    gsap.set(cursorRef.current, {
      opacity: 0,
      scale: 0.95,
    });
  }, [pathname]);

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
