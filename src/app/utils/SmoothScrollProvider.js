// "use client";
// import { useEffect, useRef } from "react";
// import Lenis from "@studio-freight/lenis";

// const SmoothScrollProvider = ({ children }) => {
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 0.01, // Stops faster
//       easing: (t) => t, // No excessive easing for instant stops
//       smoothWheel: false, // Disable mouse smoothing
//       smoothTouch: true, // Only allow smooth scrolling on touch
//       lerp: 0.01, // 
//       gestureDirection: "vertical",
//       smooth: true,
//       mouseMultiplier: 1, // Normal mouse scroll speed
//       touchMultiplier: 1.8, // Reduced swipe power to prevent overscroll
//       infinite: false, // Hard stop at the end
//     });

//     lenisRef.current = lenis;

//     let rafId;
//     function raf(time) {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     }

//     rafId = requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//       cancelAnimationFrame(rafId);
//     };
//   }, []);

//   return <>{children}</>;
// };

// export default SmoothScrollProvider;
