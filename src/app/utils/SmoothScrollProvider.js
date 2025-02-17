"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.1, // Adjust duration for scroll speed.  Lower is faster.
      easing: (t) => Math.min(1, 1.001 * t - 0.001 * Math.pow(t, 2)), // Slightly modified easing
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.5, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  },);

  return <>{children}</>;
};

export default SmoothScrollProvider;