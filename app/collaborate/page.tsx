"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { SubmitButton } from "./components/SubmitButtons";
import Image from "next/image";

export default function CollaboratePage() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power3.out",
        },
      });

      tl.from(headerRef.current, {
        y: 30,
        opacity: 0,
      })
        .from(
          contactRef.current,
          {
            y: 30,
            opacity: 0,
          },
          "-=.8",
        )
        .from(
          formRef.current,
          {
            y: 30,
            opacity: 0,
          },
          "-=0.75",
        );
    },
    { scope: headerRef }, // GSAP auto-cleanup
  );

  return (
    <main className="bg-bg h-min px-[20px]">
      <section className="mx-auto max-w-[800px] pt-[120px] pb-[100px]">
        {/* Header */}
        <div ref={headerRef} className="mb-[80px] text-center">
          <h1 className="font-richmond text-[2.88rem] md:text-[3.6rem] lg:text-[4.5rem]">
            Let’s build something meaningful.
          </h1>

          <p className="mt-[20px]">
            Open to collaborating on ideas, products, and thoughtful design.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto flex max-w-[800px] flex-col gap-[80px] md:flex-col md:items-center">
          {/* Contact info */}
          <div
            ref={contactRef}
            className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Phone */}
            <div className="bg-bg border-text/20 rounded-[24px] border p-[28px] text-center">
              <div className="mx-auto mb-[16px] flex h-[60px] w-[60px] items-center justify-center rounded-full">
                <Image
                  src="/images/call-icon.png"
                  alt="Phone Icon"
                  width={60}
                  height={60}
                />
              </div>

              <p className="text-text text-sm font-semibold">Phone</p>
              <p className="mt-[4px] text-sm text-black/50">
                Mon–Fri from 8am to 10pm
              </p>

              <a
                href="tel:+918968059548"
                className="mt-[12px] inline-block font-medium hover:underline"
              >
                +91 89680 59548
              </a>
            </div>

            {/* Email */}
            <div className="bg-bg border-text/20 rounded-[24px] border p-[28px] text-center">
              <div className="mx-auto mb-[16px] flex h-[60px] w-[60px] items-center justify-center rounded-full">
                <Image
                  src="/images/email-icon.png"
                  alt="Email Icon"
                  width={60}
                  height={60}
                />
              </div>

              <p className="text-text text-sm font-semibold">Email</p>
              <p className="mt-[4px] text-sm text-black/50">
                We’ll get back to you
              </p>

              <a
                href="mailto:anujistwal80@gmail.com"
                className="mt-[12px] inline-block font-medium break-all hover:underline"
              >
                anujistwal80@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-bg border-text/20 rounded-[24px] border p-[28px] text-center">
              <div className="mx-auto mb-[16px] flex h-[60px] w-[60px] items-center justify-center rounded-full">
                <Image
                  src="/images/location-icon.png"
                  alt="Location Icon"
                  width={60}
                  height={60}
                />
              </div>

              <p className="text-text text-sm font-semibold">Location</p>

              <p className="text-text/70 mt-[12px] text-sm">Ambala Cantt</p>

              <p className="text-text/70 mt-[1px] text-sm">Haryana, India</p>
            </div>
          </div>

          {/* Map Image */}
          <div className="w-full">
            <div className="relative w-full overflow-hidden rounded-[30px]">
              <Image
                src="/images/map.png"
                alt="Map"
                width={800}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
