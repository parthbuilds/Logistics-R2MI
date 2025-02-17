'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./loadingScreen.module.css";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setExpand(true), 500);
          setTimeout(() => setLoading(false), 1500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <AnimatePresence>
        {loading && (
          <motion.div
            className={styles.loadingBox}
            initial={{ width: "500px", height: "250px", backgroundColor: "white" }}
            animate={expand ? { width: "200vw", height: "200vh", transition: { duration: .3 } } : {}}
            exit={{ opacity: 0, transition: { duration: 5.0 } }}
          >
            {!expand && (
              <div className={styles.contentWrapper}>
                <motion.div
                  className={`${styles.loadingText} ${styles.outline}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {progress}%
                </motion.div>
                <motion.div
                  className={styles.loadingSvg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#335da3" strokeWidth="4" />
                  </svg>
                </motion.div>
                <motion.div
                  className={styles.carSvg}
                  initial={{ x: "100%" }}
                  animate={{ x: "-100%" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                >
                  <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="30" rx="5" fill="#ffcc00" />
                    <circle cx="20" cy="40" r="8" fill="#333" />
                    <circle cx="80" cy="40" r="8" fill="#333" />
                  </svg>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
