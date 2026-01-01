"use client";

import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../util/data";
import ExploreProjectChip from "../components/ExploreProjectChip";

const columns = [
  { key: "row1", cardClass: "row1-card" },
  { key: "row2", cardClass: "row2-card" },
  { key: "row3", cardClass: "row3-card" },
];

function Work() {
  const gridRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 767px)", {
    initializeWithValue: false,
  });

  const isMedium = useMediaQuery("(max-width: 1024px)", {
    initializeWithValue: false,
  });

  useGSAP(
    () => {
      const startValue = isMobile ? "top 90%" : "top 80%";
      const initialScale = isMobile ? 0.9 : 0.8;

      // Initial state
      gsap.set(gridRef.current, {
        scale: initialScale,
        transformOrigin: "center center",
      });

      // Scroll animation
      gsap.to(gridRef.current, {
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: startValue,
          toggleActions: "play none none none",
          once: true,
          // markers: true,
        },
      });
    },
    { scope: gridRef, dependencies: [isMobile] },
  );

  const customCursorEnter = () => {
    if (isMedium) return;

    gsap.to(".project-cursor", {
      opacity: 1,
      scale: 1,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  const customCursorLeave = () => {
    if (isMedium) return;

    gsap.to(".project-cursor", {
      opacity: 0,
      scale: 0.95,
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <section
      id="work"
      className="bg-bg relative z-2 -mt-13 flex h-min w-full justify-center pt-25"
    >
      <div className="relative flex w-full max-w-400 flex-[1_0_0] flex-col gap-[10px] px-[20px] md:px-[50px]">
        <div className="flex w-full items-center justify-between">
          <div className="w-[60%] text-xl font-semibold whitespace-pre-wrap">
            WORK.
          </div>

          <div className="flex h-[20px] items-center gap-[5px] p-[10px]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#c1d9a8]"></span>
            <p>Case Studies.</p>
          </div>
        </div>

        <div
          ref={gridRef}
          className="project-grid flex h-min w-full flex-col items-center gap-[10px_13px] lg:flex-row"
        >
          {columns.map((column, colIndex) => (
            <div
              key={column.key}
              className="relative flex w-full flex-[1_0_0] flex-col items-center gap-[10px] md:flex-row lg:flex-col"
            >
              {[0, 1, 2].map((cardIndex) => {
                const projectIndex = colIndex * 3 + cardIndex;
                const project = projects[projectIndex];

                if (!project) return null;

                return (
                  <div
                    key={`${column.key}-${cardIndex}`}
                    className={`${column.cardClass} ${!isMedium ? "cursor-none" : ""}`}
                    onMouseEnter={customCursorEnter}
                    onMouseLeave={customCursorLeave}
                  >
                    {isMedium && <ExploreProjectChip />}

                    <Link
                      href={`/work/${project.slug}`}
                      className="cursor-none"
                    >
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="project-thumbnail z-40"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
