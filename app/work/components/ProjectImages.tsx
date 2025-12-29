"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Project } from "@/app/util/data";

type Props = {
  project: Project;
};

export default function ProjectImages({ project }: Props) {
  const { mid_section_details, final_thoughts, projectNo } = project;

  useGSAP(() => {
    const img1 = `.project-image-1`;
    const img2 = `.project-image-2`;
    const img3 = `.project-image-3`;
    const img4 = `.project-image-4`;
    const img5 = `.project-image-5`;
    const img6 = `.project-image-6`;

    gsap.set(img1, {
      opacity: 0,
      y: 50,
    });

    gsap.to(img1, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: img1,
        start: "top 72%",
        // markers: true,
      }, // when element enters viewport
    });

    gsap.set(img2, {
      opacity: 0,
      y: 50,
    });

    gsap.to(img2, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: img2,
        start: "top 80%",
        // markers: true,
      }, // when element enters viewport
    });
    gsap.set(img3, {
      opacity: 0,
      y: 50,
    });

    gsap.to(img3, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: img3,
        start: "top 80%",
        // markers: true,
      }, // when element enters viewport
    });

    gsap.set(img4, {
      opacity: 0,
      y: 50,
    });
    gsap.to(img4, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: img4,
        start: "top 80%",
        // markers: true,
      }, // when element enters viewport
    });

    gsap.set(img5, {
      opacity: 0,
      y: 50,
    });
    gsap.to(img5, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: img5,
        start: "top 80%",
        // markers: true,
      }, // when element enters viewport
    });

    gsap.set(img6, {
      opacity: 0,
      y: 50,
    });
    gsap.to(img6, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: img6,
        start: "top 80%",
        // markers: true,
      }, // when element enters viewport
    });

    gsap.set(".body-content", {
      opacity: 0,
      y: 50,
    });
    gsap.to(".body-content", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".body-content",
        start: "top 80%",
        // markers: true,
      }, // when element enters viewport
    });
  }, []);

  return (
    <>
      <div className="relative flex h-min w-full items-center justify-center px-[20px] md:px-[30px] lg:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative h-[250px] w-full rounded-[10px] md:h-[500px] lg:h-[700px] lg:rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[10px] lg:rounded-[20px]">
              <Image
                src={`/images/projects/project${projectNo}/1.png`}
                width={2033}
                height={1403}
                alt={`Project ${projectNo} thumbnail`}
                className="project-image-1 h-full w-full rounded-[10px] object-cover object-center opacity-0 lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 4 */}
      <div className="flex h-min w-full max-w-[1600px] flex-col items-center justify-center px-[20px] py-[80px] md:px-[30px] md:py-[100px] lg:px-[50px]">
        <div className="body-content flex h-min w-full max-w-[1100px] flex-col items-center gap-x-[80px] gap-y-[40px] md:flex-row md:items-start">
          <div className="flex h-min flex-[1_0_0] flex-col items-center justify-center gap-[10px]">
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="font-semibold uppercase">challenge.</p>
            </div>
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="text-sm font-light">
                {mid_section_details?.challenge}
              </p>
            </div>
          </div>

          <div className="flex h-min flex-[1_0_0] flex-col items-center gap-[10px]">
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="font-semibold uppercase">approach.</p>
            </div>
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="text-sm font-light">
                {mid_section_details?.approach}
              </p>
            </div>
          </div>

          <div className="flex h-min flex-[1_0_0] flex-col items-center gap-[10px]">
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="font-semibold uppercase">outcome.</p>
            </div>
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="text-sm font-light">
                {mid_section_details?.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* part 5 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[20px] md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative aspect-[1.16667] w-full rounded-[10px] md:aspect-[1.875] lg:aspect-auto lg:h-[700px] lg:rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[10px] lg:rounded-[20px]">
              <Image
                src={`/images/projects/project${projectNo}/2.png`}
                width={2160}
                height={1536}
                alt={`Project ${projectNo} Image 2`}
                className="project-image-2 h-full w-full rounded-[10px] object-cover object-center opacity-0 lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 6 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[20px] md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
        <div className="project-image-3 relative flex h-min max-w-[1200px] flex-[1_0_0] flex-col items-end gap-[20px] md:flex-row md:gap-[30px] lg:gap-[50px]">
          <div className="relative aspect-[1.16667] w-full flex-none rounded-[10px] md:aspect-[1.2] md:flex-[1_0_0] lg:aspect-auto lg:h-[500px] lg:rounded-[20px]">
            <div className="absolute inset-0 rounded-[10px] lg:rounded-[20px]">
              <Image
                src={`/images/projects/project${projectNo}/3.png`}
                width={1866}
                height={1623}
                alt={`Project ${projectNo} Image 3`}
                className="project-image-3 h-full w-full rounded-[10px] object-cover object-center opacity-0 lg:rounded-[20px]"
              />
            </div>
          </div>

          <div className="relative aspect-[1.16667] w-full flex-none rounded-[10px] md:aspect-[1.2] md:flex-[1_0_0] lg:aspect-auto lg:h-[500px] lg:rounded-[20px]">
            <div className="absolute inset-0 rounded-[10px] lg:rounded-[20px]">
              <Image
                src={`/images/projects/project${projectNo}/4.png`}
                width={1866}
                height={1623}
                alt={`Project ${projectNo} Image 4`}
                className="project-image-4 h-full w-full rounded-[10px] object-cover object-center opacity-0 lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 7 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[20px] md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative aspect-[1.4] w-full rounded-[10px] md:aspect-[1.875] lg:aspect-auto lg:h-[700px] lg:rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[10px] lg:rounded-[20px]">
              <Image
                src={`/images/projects/project${projectNo}/5.png`}
                width={2528}
                height={1744}
                alt={`Project ${projectNo} Image 5`}
                className="project-image-5 h-full w-full rounded-[10px] object-cover object-center opacity-0 lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 8 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[20px] md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative aspect-[1.4] w-full rounded-[10px] md:aspect-[1.875] lg:aspect-auto lg:h-[700px] lg:rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[10px] lg:rounded-[20px]">
              <Image
                src={`/images/projects/project${projectNo}/6.png`}
                width={2033}
                height={1403}
                alt={`Project ${projectNo} Image 6`}
                className="project-image-6 h-full w-full rounded-[10px] object-cover object-center opacity-0 lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 9 */}
      <div className="flex h-min w-full max-w-[1600px] items-center justify-center px-[20px] pt-[50px] pb-[100px] md:px-[30px] lg:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] flex-col items-start gap-y-[30px] md:flex-row">
          <div className="flex h-[20px] flex-[1_0_0] items-center gap-[5px]">
            <p className="font-semibold uppercase">final thoughts.</p>
          </div>

          <div className="flex h-auto w-full whitespace-pre-wrap md:w-[40%]">
            <p className="text-sm font-light">{final_thoughts}</p>
          </div>
        </div>
      </div>
    </>
  );
}
