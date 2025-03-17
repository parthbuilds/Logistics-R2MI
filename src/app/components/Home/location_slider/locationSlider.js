'use client';
import React, { useEffect, useRef } from 'react';
import styles from './location.module.css';

const LocationSlider = ({ speed = 1 }) => { // Default speed if not passed
  const sliderRef = useRef(null);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollSpeed = window.scrollY - lastScrollY;
        lastScrollY = window.scrollY;
        
        let currentTransform = sliderRef.current.style.transform.match(/-?\d+/g);
        let translateX = currentTransform ? parseFloat(currentTransform[0]) : 0;
        
        translateX -= scrollSpeed * speed; // Apply speed prop
        sliderRef.current.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]); // Depend on speed so updates take effect

  const locations = [
    { name: "Singapore", image: "/images/locations/Singapore.jpg" },
    { name: "Australia", image: "/images/locations/Australia.jpg" },
    { name: "Malaysia", image: "/images/locations/Malaysia.jpg" },
    { name: "USA", image: "/images/locations/USA.jpg" },
    { name: "Vietnam", image: "/images/locations/Vietnam.jpg" },
    { name: "Nigeria", image: "/images/locations/Nigeria.jpg" },
    { name: "South Africa", image: "/images/locations/SouthAfrica.jpg" },
    { name: "Mauritius", image: "/images/locations/Mauritius.jpg" },
    { name: "Kenya", image: "/images/locations/Kenya.jpg" },
    { name: "Uganda", image: "/images/locations/Uganda.jpg" },
    { name: "Tanzania", image: "/images/locations/Tanzania.jpg" },
    { name: "Belgium", image: "/images/locations/Belgium.jpg" }
  ];

  return (
    <div className={styles.Wrapper} style={{ width: '100vw', whiteSpace: 'nowrap', overflow: 'hidden' }}>
      <div
        ref={sliderRef}
        className={styles.LocationBlock_locations__jqljX}
        style={{ display: 'flex', gap: '4rem', willChange: 'transform' }}
      >
        {[...locations, ...locations, ...locations].map((location, index) => (
          <div key={index} className={styles.LocationsSlider_location__x6NQX} style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop:'3rem'
          }}>
            <div className={`${styles.LocationsSlider_imageWrapper__noqux} ${styles.LocationsSlider_hasImage__pdKoo}`}>
              <img
                alt={location.name}
                loading="lazy"
                width="100"
                height="100"
                src={location.image}
                className={`${styles.LocationsSlider_image__F7MqP} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`}
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>
            <h4 className={styles.LocationsSlider_title__vKaO_} style={{ fontSize: '1.7rem', fontWeight: 'bold', color: 'white' }}>
              {location.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const LocationSlidersContainer = () => {
  return (
    <div style={{ backgroundColor: '#2086ae', paddingTop: '1rem', overflow: 'hidden', paddingBottom: '3rem' }}>
      <LocationSlider speed={.8} />
      <LocationSlider speed={.5} />
      <LocationSlider speed={.7} />
      <LocationSlider speed={.6} />
    </div>
  );
};

export default LocationSlidersContainer;
