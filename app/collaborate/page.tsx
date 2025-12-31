"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Phone, Mail, MapPin } from "lucide-react";

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
          "-=0.4",
        )
        .from(
          formRef.current,
          {
            y: 30,
            opacity: 0,
          },
          "-=0.3",
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
        <div className="mx-auto flex max-w-[800px] flex-col gap-[80px] md:flex-row md:items-start">
          {/* Contact info */}
          <div ref={contactRef} className="md:w-1/2">
            <h2 className="mb-[20px] text-sm font-semibold tracking-wide uppercase">
              Contact
            </h2>

            <ul className="space-y-[20px]">
              <li className="flex items-center gap-[12px]">
                <span className="flex h-8 w-8 items-center justify-center rounded border border-[#0c121e]/20">
                  <Phone size={16} strokeWidth={1.5} />
                </span>
                <span>+91 89680 59548</span>
              </li>

              <li className="flex items-center gap-[12px]">
                <span className="flex h-8 w-8 items-center justify-center rounded border border-[#0c121e]/20">
                  <Mail size={16} strokeWidth={1.5} />
                </span>
                <span>anujistwal80@gmail.com</span>
              </li>

              <li className="flex items-center gap-[12px]">
                <span className="flex h-8 w-8 items-center justify-center rounded border border-[#0c121e]/20">
                  <MapPin size={16} strokeWidth={1.5} />
                </span>
                <span>Haryana, India</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form ref={formRef} className="w-full max-w-[500px] space-y-[32px]">
            {/* inputs */}
            <div>
              <label className="block text-sm">Name</label>
              <input
                type="text"
                className="mt-[8px] w-full border-b bg-transparent py-[6px] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                className="mt-[8px] w-full border-b bg-transparent py-[6px] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm">Message</label>
              <textarea
                rows={4}
                className="mt-[8px] w-full rounded border bg-transparent p-[12px] outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-text text-bg rounded px-[24px] py-[10px]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
