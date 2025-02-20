'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./loadingScreen.module.css";
import Image from 'next/image';

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

  const imagePaths = [
    "/images/micro.png",
    "/images/mixer.png",
    "/images/sandmaker.png",
    "/images/iron.png",
    "/images/micro.png",
    "/images/mixer.png",
    "/images/sandmaker.png",
    "/images/iron.png",
    "/images/micro.png",
    "/images/mixer.png",
    "/images/sandmaker.png",
    "/images/iron.png",
  ];

  const imageWidth = 70; // Set a variable for image width
  const imageSpacing = 30; // Set a variable for spacing

  return (
    <div className={styles.loadingContainer}>
      <AnimatePresence>
        {loading && (
          <motion.div
            className={styles.loadingBox}
            initial={{ width: "500px", height: "250px", backgroundColor: "white" }}
            animate={expand ? { width: "200vw", height: "200vh", transition: { duration: 0.3 } } : {}}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
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
                  className={styles.carSvg}
                  initial={{ x: "0%" }}
                  animate={{ x: "-100%" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                >
                  {imagePaths.map((path, i) => (
                    <Image
                      key={i}
                      src={path}
                      alt={`Appliance ${i + 1}`}
                      width={imageWidth} // Use the variable
                      height={imageWidth} // Maintain aspect ratio (or adjust)
                      style={{
                        position: 'absolute',
                        left: `${i * (imageWidth + imageSpacing)}px`, 
                        top: 4,  // Adjust vertical positioning as needed
                        objectFit: 'contain', // Or 'cover', 'fill', etc.
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}