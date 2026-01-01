"use client";

import dynamic from "next/dynamic";

const ProjectCursor = dynamic(() => import("./ProjectCursor"), { ssr: false });

export default function ClientOnlyCursor() {
  return <ProjectCursor />;
}
