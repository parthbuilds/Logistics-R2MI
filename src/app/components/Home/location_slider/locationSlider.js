'use client'
import React, { useEffect, useRef } from 'react';
import styles from './location.module.css';

const LocationSlider = () => {
  const sliderRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sliderRefs.current.forEach((slider, index) => {
        if (slider) {
          const speed = index % 2 === 0 ? 0.3 : -0.4;
          const totalWidth = slider.scrollWidth;
          const viewportWidth = window.innerWidth; 

          // Calculate the maximum scroll position to avoid gaps
          const maxScroll = totalWidth - viewportWidth;

          // Apply scroll transformation, limiting it to avoid gaps
          let translateX = window.scrollY * speed;
          translateX = Math.max(-maxScroll, Math.min(0, translateX)); // Keep within bounds

          slider.style.transform = `translateX(${translateX}px)`;

        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locations = ["Spain", "France", "Germany", "Canada", "Italy", "Japan", "USA", "Australia"];

  return (
    <div className={styles.Wrapper} style={{ width: '100vw', overflow: 'hidden' }}>
      {[...Array(4)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={styles.LocationBlock_locations__jqljX}
          ref={(el) => (sliderRefs.current[rowIndex] = el)}
          style={{
            display: 'flex',
            width: 'max-content',
            gap: '4em',
            whiteSpace: 'nowrap',
            marginBottom: '4rem',
          }}
        >
          {[...locations, ...locations, ...locations, ...locations].map((location, index) => (
            <div key={index} className={styles.LocationsSlider_location__x6NQX} style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div className={`${styles.LocationsSlider_imageWrapper__noqux} ${styles.LocationsSlider_hasImage__pdKoo}`}>
                <img
                  alt={location}
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  className={`${styles.LocationsSlider_image__F7MqP} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`}
                  style={{
                    color: 'transparent',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: "url('/images/Project/Cargo-Business.png-2.png')"
                  }}
                  srcSet="/images/Project/Cargo-Business.png-2.png 1x, /images/Project/Cargo-Business.png-2.png 2x"
                  src="/images/Project/Cargo-Business.png-2.png"
                />
              </div>
              <h4 className={styles.LocationsSlider_title__vKaO_} style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>
                {location}
              </h4>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LocationSlider;