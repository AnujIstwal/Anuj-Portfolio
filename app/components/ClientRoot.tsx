"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ReactLenis } from "@/app/util/lenis";

import ScrollManager from "./ScrollManager";
import InitialScrollSetup from "./InitialScrollSetup";
import ClientOnlyCursor from "./ClientOnlyCursor";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ClientRoot() {
  return (
    <ReactLenis root>
      <InitialScrollSetup />
      <ScrollManager />
      <ClientOnlyCursor />
      {/* <ProjectCursor /> */}
    </ReactLenis>
  );
}
