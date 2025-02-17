"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null); // Ref to hold the Lenis instance

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.3, // Faster scroll speed
      easing: (t) => Math.min(1, 1.001 * t - 0.001 * Math.pow(t, 2)), // Your modified easing (can be tweaked)
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.08, // Adjust lerp for smoothness/responsiveness.  Lower is smoother.
      gestureDirection: "vertical", // For better touch experience
      smooth: true, // Enable smooth scrolling
      mouseMultiplier: 1, // Adjust mouse wheel sensitivity
      smoothTouch: true,
      touchMultiplier: 2, // Adjust touch scroll sensitivity
    });

    lenisRef.current = lenis; // Store Lenis instance in ref

    let rafId; // Store requestAnimationFrame ID for cleanup

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf); // Store ID
    }

    rafId = requestAnimationFrame(raf); // Start animation loop

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId); // Stop animation loop
    };
  }, []);

  // Expose Lenis instance if needed:
    // This allows child components to access and control Lenis directly if needed.
    // const getLenis = () => lenisRef.current;  

  return <>{children}</>;
};

export default SmoothScrollProvider;