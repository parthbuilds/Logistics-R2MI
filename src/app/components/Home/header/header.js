"use client";
import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./header.module.css";
import { FiMenu, FiX } from "react-icons/fi";

const Header = ({ color = "white" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smoothWheel: true,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && !menuOpen) {
        const scrollY = window.scrollY;
        headerRef.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  // Logo Handling
  const frontLogo = menuOpen
    ? "/images/Route To Export_290x80.svg"
    : color === "white"
    ? "/images/RTX_290x80.svg"
    : "/images/Asset 8.svg";

  const backLogo = menuOpen
    ? "/images/RTX_290x80.svg"
    : color === "white"
    ? "/images/Route To Export_290x80.svg"
    : "/images/Asset 9.svg";

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <div className={styles.flipContainer}>
            <img className={`${styles.logoImage} ${styles.front}`} src={frontLogo} alt="Front Logo" />
            <img className={`${styles.logoImage} ${styles.back}`} src={backLogo} alt="Back Logo" />
          </div>
        </a>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FiX size={35} className={styles.cross} /> : <FiMenu size={35} />}
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.navLinks}>
          <li><a href="/" style={{ color }}>{`Home`}</a></li>
          <li><a href="About" style={{ color }}>{`About`}</a></li>
          <li><a href="Services" style={{ color }}>{`Export`}</a></li>
          <li><a href="Careers" style={{ color }}>{`Careers`}</a></li>
          <li><a href="Contact" style={{ color }}>{`Contact`}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
