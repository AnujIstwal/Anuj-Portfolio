"use client";

import ExploreProjectChip from "@/app/components/ExploreProjectChip";
import type { Project } from "@/app/util/data";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import gsap from "gsap";

type Props = {
  moreProjects: Project[];
};

export default function MoreProject({ moreProjects }: Props) {
  const isMedium = useMediaQuery("(max-width: 1024px)", {
    initializeWithValue: false,
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
    <>
      <div className="border-border flex h-min w-full max-w-[1600px] items-center justify-center border-t px-[20px] pt-[50px] pb-[100px] md:px-[30px] lg:px-[50px]">
        <div className="flex h-min w-full max-w-[1200px] flex-col items-center justify-center gap-[35px]">
          <div className="flex w-full items-center">
            <div className="h-auto w-[100%] lg:w-[40%]">
              <p className="font-richmond text-[2.88rem] md:text-[3.6rem] lg:text-[4.5rem]">
                More Projects
              </p>
            </div>
          </div>

          <div className="flex h-min w-full flex-col items-center justify-center gap-[20px] md:flex-row">
            {moreProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-border relative aspect-[1.09816] w-full flex-none rounded-[10px] md:flex-[1_0_0]"
                onMouseEnter={customCursorEnter}
                onMouseLeave={customCursorLeave}
              >
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
        </div>
      </div>
    </>
  );
}
