"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

function SelectedWork() {
  useGSAP(() => {
    const title = `.selected-work-title`;
    const projectDesc = `.description`;

    const para = new SplitText(projectDesc, {
      type: "lines,words,chars",
    });

    // IMPORTANT: set initial state
    gsap.set(title, {
      opacity: 0,
      y: 30,
    });

    gsap.to(title, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      delay: 0.2,
    });

    gsap.set(para.lines, {
      opacity: 0,
      y: 30,
    });

    gsap.to(para.lines, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.04,
      delay: 0.2,
    });
  });
  return (
    <div className="flex h-min w-full flex-col items-center">
      <div className="flex h-min w-full max-w-[1600px] items-start px-[20px] pt-[150px] md:px-[50px]">
        <div className="flex h-min flex-[1_0_0] flex-col items-start justify-between gap-y-[25px] xl:flex-row xl:items-end">
          <p className="selected-work-title font-richmond text-[3.1rem] md:text-[3.75rem] lg:text-[5rem] xl:text-[6rem]">
            Selected work.
          </p>

          <div className="flex h-auto w-full max-w-[500px] flex-col justify-start xl:w-[25%]">
            <p className="description text-left text-sm">
              These are some of the projects I am the most proud of. Read more
              about every project by clicking on them. Hopefully they will give
              you an idea of my design style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedWork;
