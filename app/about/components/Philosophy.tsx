import Image from "next/image";
import React from "react";

function Philosophy() {
  return (
    <section
      id="philosophy"
      className="flex h-min flex-col items-center gap-[10px] px-[20px] pt-[180px]"
    >
      <div className="flex h-min w-full max-w-[1600px] flex-col items-center gap-[10px]">
        <div className="flex h-min w-full max-w-[450px] flex-col items-center gap-[20px] lg:max-w-[600px]">
          <p className="font-richmond text-center text-[2.88rem] md:text-[3.6rem] lg:text-[4.5rem]">
            I believe clarity is the most underrated feature.
          </p>
          <p className="max-w-[300px] text-center lg:max-w-[400px]">
            I design experiences that guide users naturally, removing noise and
            distractions so the product feels simple, intuitive, and
            trustworthy.
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
