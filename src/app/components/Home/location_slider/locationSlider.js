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

  const locations = [
    { name: "Singapore", image: "/images/locations/Singapore.jpg" },
    { name: "Australia", image: "/images/locations/australia.jpg" },
    { name: "Malaysia", image: "/images/locations/malaysia.jpg" },
    { name: "USA", image: "/images/locations/usa.jpg" },
    { name: "Vietnam", image: "/images/locations/vietnam.jpg" },
    { name: "Nigeria", image: "/images/locations/nigeria.jpg" },
    { name: "South Africa", image: "/images/locations/SouthAfrica.jpg" },
    { name: "Mauritius", image: "/images/locations/mauritius.jpg" },
    { name: "Kenya", image: "/images/locations/kenya.jpg" },
    { name: "Uganda", image: "/images/locations/uganda.jpg" },
    { name: "Tanzania", image: "/images/locations/tanzania.jpg" },
    { name: "Belgium", image: "/images/locations/belgium.jpg" }
  ];

  return (
    <section style={{backgroundColor:'#2086ae', paddingTop:'3rem'}}>
    <div className={styles.Wrapper} style={{ width: '100vw', overflow: 'hidden' }}>
      {[...Array(4)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={styles.LocationBlock_locations__jqljX}
          ref={(el) => (sliderRefs.current[rowIndex] = el)}
          style={{
            display: 'flex',
            width: 'max-content',
            gap: '4rem',
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
                  alt={location.name}
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
                  }}
                  src={location.image}
                />
              </div>
              <h4 className={styles.LocationsSlider_title__vKaO_} style={{ fontSize: '2.4rem', fontWeight: 'bold', color:'white' }}>
                {location.name}
              </h4>
            </div>
          ))}
        </div>
      ))}
    </div>
    </section>
  );
};

export default LocationSlider;