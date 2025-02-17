"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.1, // Slower scrolling effect
      easing: (t) => 1 - Math.pow(1 - t, 2), 
      smoothWheel: true,
      smoothTouch: true, // Ensure smoothness on touch devices
      lerp: 0.07, // Adjust linear interpolation for less fluid motion
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
