"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import type { Project } from "@/app/util/data";

type Props = {
  project: Project;
};

function Header({ project }: Props) {
  useGSAP(() => {
    const title = `.project-header-title`;
    const projectDesc = `.project-header-description`;
    const projectOverview = `.project-header-overview`;
    const metaInfo = `.meta-info`;

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

    gsap.set(projectOverview, {
      opacity: 0,
      x: -30,
    });

    gsap.to(projectOverview, {
      x: 0,
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

    gsap.set(metaInfo, {
      opacity: 0,
      y: 20,
    });

    gsap.to(metaInfo, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      delay: 0.2,
    });
  });

  return (
    <div className="relative flex h-min w-full max-w-[1600px] flex-row items-center justify-center px-[20px] md:px-[30px] lg:px-[50px]">
      <div className="z-10 flex h-min max-w-[1200px] flex-[1_0_0] flex-col items-start gap-[50px] pt-[150px] pb-[30px] md:gap-[60px] lg:gap-[100px]">
        <div className="flex h-min w-full flex-col items-end gap-[60px] border-b border-[#0c121e1a] pb-[35px]">
          <div className="flex h-min w-full items-center">
            <p className="project-header-title font-richmond text-[3.1rem] md:text-[3.75rem] lg:text-[5rem] xl:text-[6rem]">
              {project.title}
            </p>
          </div>

          <div className="flex h-min w-full flex-col items-start gap-y-[30px] md:flex-row">
            <div className="flex h-[20px] flex-[1_0_0] flex-row items-center gap-[5px]">
              <p className="project-header-overview text-[17px] font-bold uppercase">
                project overview.
              </p>
            </div>

            <div className="flex h-auto w-full flex-col justify-start whitespace-pre-wrap md:w-[40%]">
              <p className="project-header-description text-left text-sm">
                {project.header_details?.overview}
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-min w-full items-end">
          <p className="meta-info">
            <span className="opacity-50">Role:</span>{" "}
            {project.header_details?.role} <span className="text-lg">/</span>
            {"  "}
            <span className="opacity-50">Platform:</span>{" "}
            {project.header_details?.platform}{" "}
            <span className="text-lg">/</span>
            {"  "}
            <span className="opacity-50">Duration:</span>{" "}
            {project.header_details?.duration}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
