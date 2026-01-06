"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "../../util/data";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import ExploreProjectChip from "@/app/components/ExploreProjectChip";

const ROW_SIZE = 3;

const rows = Array.from(
  { length: Math.ceil(projects.length / ROW_SIZE) },
  (_, i) => projects.slice(i * ROW_SIZE, i * ROW_SIZE + ROW_SIZE),
);
// [
//   [p1, p2, p3],
//   [p4, p5, p6],
//   [p7, p8, p9],
// ]

function ProjectGrid() {
  const isMedium = useMediaQuery("(max-width: 1024px)", {
    initializeWithValue: false,
  });

  useGSAP(() => {
    // IMPORTANT: set initial state

    gsap.set(".tag", {
      opacity: 0,
      y: 30,
    });

    gsap.set(".project-grid", {
      y: 40,
      opacity: 0,
    });

    gsap.to(".project-grid", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      delay: 1,
    });

    gsap.to(".tag", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "expo.out",
      delay: 1.5,
    });
  });

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
    <div className="flex h-min w-full items-center py-[100px]">
      <div className="flex h-min max-w-[1600px] flex-[1_0_0] flex-col items-center gap-[10px] px-[20px] md:px-[50px]">
        <div className="flex h-min w-full items-center justify-end gap-[10px] pb-[20px]">
          <div className="tag flex h-[20px] items-center gap-[5px] p-[10px]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#c1d9a8]"></span>
            <p>Quality over quantity</p>
          </div>
        </div>

        <div className="project-grid flex h-min w-full flex-col items-center gap-[10px_13px]">
          {rows.map((row, rowIndex) => (
            <div className="work-row" key={rowIndex}>
              {row.map((project) => (
                <div
                  className="work-row-card"
                  key={project.projectNo}
                  onMouseEnter={customCursorEnter}
                  onMouseLeave={customCursorLeave}
                >
                  {/* Project Card UI */}
                  {isMedium && (
                    <Link href={`/work/${project.slug}`}>
                      <ExploreProjectChip />
                    </Link>
                  )}
                  <Link href={`/work/${project.slug}`} className="cursor-none">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="project-thumbnail z-40"
                    />
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
