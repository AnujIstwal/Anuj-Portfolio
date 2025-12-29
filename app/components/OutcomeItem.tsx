"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  item: {
    id: string;
    index: string;
    title: string;
    description: string;
  };
  isActive: boolean;
  onClick: () => void;
};

const OutcomeItem = ({ item, isActive, onClick }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;

      if (isActive) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.6,
          ease: "power3.Out",
        });
      }
    },
    { dependencies: [isActive] }, //  re-run on toggle
  );

  return (
    <div
      onClick={onClick}
      className="flex h-min w-full cursor-pointer flex-row items-start gap-[30px]"
    >
      {/* Index */}
      <div className="text-muted w-[30%]">0{item.index}</div>

      {/* Content */}
      <div className="flex w-full flex-[1_0_0] items-start border-b border-[#0c121e66] pb-[20px]">
        {/* Text block */}
        <div className="flex w-[80%] flex-col items-start gap-[10px]">
          <span className="text-sm font-semibold tracking-wide uppercase">
            {item.title}
          </span>

          {/* Description (accordion body) */}
          <div
            ref={contentRef}
            className="overflow-hidden"
            style={{ height: 0, opacity: 0 }}
          >
            <p className="text-sm">{item.description}</p>
          </div>
        </div>

        {/* Icon */}
        <div className="flex flex-[1_0_0] justify-end">
          <span className="text-xl select-none">{isActive ? "−" : "+"}</span>
        </div>
      </div>
    </div>
  );
};

export default OutcomeItem;
