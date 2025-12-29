import Image from "next/image";
import React from "react";

function Philosophy() {
  return (
    <section
      id="philosophy"
      className="flex h-min flex-col items-center gap-[10px] p-[120px_20px_0] md:p-[180px_20px_0]"
    >
      <div className="flex h-min w-full max-w-[1600px] flex-col items-center gap-[10px]">
        <div className="flex h-min w-full max-w-[450px] flex-col items-center gap-[20px]">
          <p className="font-richmond text-center text-[2.88rem] md:text-[3.6rem] lg:text-[4.5rem]">
            I design experiences, not just interfaces.
          </p>
          <p className="max-w-[300px] text-center">
            I focus on usability, interaction, and clarity across the entire
            user journey.
          </p>
          <Image
            src="/images/signature.svg"
            alt="Philosophy"
            width={120}
            height={80}
          />
        </div>
        <div className="flex h-min w-full items-center justify-center">
          <Image
            src="/images/hero-image-2.png"
            alt="Hero Image"
            width={480}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
