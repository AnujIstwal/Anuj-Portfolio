"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

let homeScrollY = 0;

export default function ScrollManager() {
  const pathname = usePathname();
  const lenis = useLenis();
  const prevPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    if (!lenis) return;

    const prev = prevPath.current;

    // 🔹 Leaving HOME → save scroll
    if (prev === "/" && pathname !== "/") {
      homeScrollY = lenis.scroll;
    }

    // 🔹 Entering HOME → restore scroll
    if (pathname === "/" && prev !== "/") {
      lenis.scrollTo(homeScrollY, { immediate: true });
    }

    // 🔹 Entering PROJECT pages → force top BEFORE paint
    if (pathname.startsWith("/work/")) {
      lenis.scrollTo(0, { immediate: true });
    }

    prevPath.current = pathname;
  }, [pathname, lenis]);

  return null;
}
