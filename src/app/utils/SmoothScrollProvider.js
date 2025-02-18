"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null); // Ref to hold the Lenis instance

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2, // Decreased duration for more instant response
      easing: (t) => t, // Linear easing for better scroll responsiveness
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.1, // Slightly increased for better responsiveness
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1.2, // Increased for better control with mouse scroll
      touchMultiplier: 2, // Keeps touch scroll responsive without being too fast
    });

    lenisRef.current = lenis; // Store Lenis instance in ref

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
