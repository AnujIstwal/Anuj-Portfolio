"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (open) {
      gsap.fromTo(
        menuRef.current,
        {
          opacity: 0,
          y: -10,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
          pointerEvents: "auto",
        },
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.98,
        duration: 0.25,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-center gap-[10px] px-[20px] py-6">
        {/* Logo */}
        <div className="flex flex-[1_0_0] items-center justify-start">
          <Image
            src="/images/logo.svg"
            alt="Anuj logo"
            width={72}
            height={72}
            className="h-auto"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <div className="flex h-[30px] flex-[1_0_0] items-center justify-center">
          <nav className="border-app bg-bg/60 hidden items-center gap-8 rounded-full border px-4 py-2 text-sm backdrop-blur-md md:flex">
            <Link href="/">Home</Link>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>

        {/* CTA */}
        <div className="hidden flex-[1_0_0] items-center justify-end md:flex">
          <Link
            href="/collaborate"
            className="border-app bg-bg/60 flex cursor-pointer items-center gap-[6px] rounded-full border px-4 py-2 backdrop-blur-md"
          >
            <span className="bg-accent h-[5px] w-[5px] rounded-full"></span>
            <p>Collaborate</p>
          </Link>
        </div>

        <div className="flex flex-[1_0_0] items-center justify-end md:hidden">
          <div className="flex gap-[10px]">
            {/* Mobile Menu Button */}

            <button
              onClick={() => setOpen(!open)}
              className="border-app bg-bg/60 flex h-10 w-10 items-center justify-center rounded-[10px] border backdrop-blur-md"
            >
              {open ? (
                <X size={16} className="opacity-65" />
              ) : (
                <Menu size={16} className="opacity-65" />
              )}
            </button>

            <Link
              href="/collaborate"
              className="border-app bg-bg/60 flex cursor-pointer items-center gap-[6px] rounded-full border px-4 py-2 backdrop-blur-md"
            >
              <span className="bg-accent h-[5px] w-[5px] rounded-full"></span>
              <p>Collaborate</p>
            </Link>
          </div>
        </div>
      </header>

      {/* MOBILE DROPDOWN */}
      <div
        ref={menuRef}
        className="pointer-events-none fixed top-[78px] left-0 z-40 w-full px-[20px] opacity-0 md:hidden"
      >
        <div className="border-app bg-bg/80 rounded-[15px] border-[.5] px-[15px] py-[20px]">
          <nav className="flex flex-col items-center gap-6 text-sm">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/work" onClick={() => setOpen(false)}>
              Work
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
