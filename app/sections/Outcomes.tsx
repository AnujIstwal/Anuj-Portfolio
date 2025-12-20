"use client";

import { useState } from "react";
import { outcomes } from "../util/data";
import OutcomeItem from "../components/OutcomeItem";

const Outcomes = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const toggleItem = (id: string) => {
    setOpenItems(
      (prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id) // close
          : [...prev, id], // open
    );
  };

  return (
    <section
      id="outcomes"
      className="flex h-min w-full flex-col items-center px-[20px] pt-[150px] pb-[200px] md:px-[50px]"
    >
      <div className="flex h-min max-w-[1000px] flex-col items-center gap-[100px]">
        <div className="flex h-min w-full flex-col items-start gap-[30px] md:flex-row">
          <div className="flex w-[30%] items-center overflow-visible pt-[12px]">
            <p className="text-[17px] font-semibold uppercase">The Outcome.</p>
          </div>

          <div className="flex h-min flex-[1_0_0] items-center">
            <p className="font-richmond text-left text-[2.88rem] md:text-[3.6rem] lg:text-[4.5rem]">
              Designing experiences that are clear, usable, and scalable
            </p>
          </div>
        </div>

        <div className="flex h-min w-full flex-col items-center gap-[25px]">
          {outcomes.map((item) => (
            <OutcomeItem
              key={item.id}
              item={item}
              isActive={openItems.includes(item.id)}
              onClick={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
