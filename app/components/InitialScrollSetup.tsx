"use client";

import { useEffect } from "react";

function InitialScrollSetup() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return null;
}

export default InitialScrollSetup;
