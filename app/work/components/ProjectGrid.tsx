"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectGrid() {
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
          {/* row 1 */}
          <div className="work-row">
            {/* project card */}
            <div className="work-row-card"></div>
            <div className="work-row-card"></div>
            <div className="work-row-card"></div>
          </div>

          {/* row 2 */}
          <div className="work-row">
            {/* project card */}
            <div className="work-row-card"></div>
            <div className="work-row-card"></div>
            <div className="work-row-card"></div>
          </div>

          {/* row 3 */}
          <div className="work-row">
            {/* project card */}
            <div className="work-row-card"></div>
            <div className="work-row-card"></div>
            <div className="work-row-card"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
