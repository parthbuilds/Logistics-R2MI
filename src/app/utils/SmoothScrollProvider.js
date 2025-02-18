"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.1, // Reduce duration to stop scrolling faster
      easing: (t) => t, // Linear easing for instant response
      smoothWheel: false, // Disable smooth wheel scrolling to prevent glide
      smoothTouch: true, // Enable smooth scrolling only for touch gestures
      lerp: 0.05, // Lower lerp for minimal smoothing, reducing excessive glide
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1, // Keep mouse scroll natural without excessive smoothing
      touchMultiplier: 2.5, // Make swipe more responsive and snappy
      infinite: false, // Prevent any looping behavior
    });

    lenisRef.current = lenis;

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
