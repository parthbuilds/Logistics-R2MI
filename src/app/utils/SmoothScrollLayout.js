"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import '../../assets/global.css'

const SmoothScrollLayout= ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      smooth: true,
      easing: (t) => t * (2 - t),
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScrollLayout;
