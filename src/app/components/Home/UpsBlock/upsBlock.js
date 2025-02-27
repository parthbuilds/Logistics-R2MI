'use client';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import styles from './upsBlock.module.css';
import AutoPlaySwiper from '@/app/utils/swiper/swiper';
import LoadingLine from './loadingline/loadingline';

export default function UpsBlock() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [autoPlayIndex, setAutoPlayIndex] = useState(0);
  const titles = ["We Believe in Accessible Modern Appliances", "We Resolve Every Export Challenge", "Single Point of Contact", "Quick and Adaptive Decision-Making"];
  const titleRefs = useRef([]);

  useEffect(() => {
    let timer;

    if (loadingIndex !== null) {
      timer = setTimeout(() => {
        setLoadingIndex(null);
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [loadingIndex]);


  useEffect(() => {
    const interval = setInterval(() => {
      handleAutoPlay();
    }, 10000);
    return () => clearInterval(interval);
  }, [autoPlayIndex]);


  const handleAutoPlay = () => {
    handleToggle(autoPlayIndex);
    setAutoPlayIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      setLoadingIndex(index);
    }
  };

  const getTitleStyle = (index) => {
    return {
      cursor: 'pointer',
      color: expandedIndex === index ? '#fff' : '#d7d7d7', 
    };
  };

  return (
    <section className={`${styles.UspBlock_section__SSpPU} ${styles.UspBlock_dark__576q1}`}>
      <div className={styles.UspBlock_container__BsBlZ}>
        <div className={styles.UspBlock_titleWrapper__0bZaZ} style={{ transform: 'translateY(24px) translateZ(0)' }}>
          <h2 className={styles.UspBlock_title__5syXk}>
            <p className={styles.paragraph}>World's Leading Home Appliances Exporter.</p>
          </h2>
          <div className={styles.UspBlock_imageSection__Pe14P}>
            <AutoPlaySwiper width="200px" height="200px" />
          </div>
        </div>

        <div className={styles.UspBlock_uspWrapper__dzsDK}>
          {titles.map((title, index) => (
            <div key={index} className={styles.UspBlock_uspWrapperInside__00mFz}>
              <div className={styles.UspItem_uspItem__qkMCK} style={{ opacity: 1 }}>
                <h6
                  className={styles.UspItem_uspItemTitle__pyK16}
                  onClick={() => handleToggle(index)}
                  style={getTitleStyle(index)} // Apply dynamic style
                  ref={el => titleRefs.current[index] = el} // Ref for title
                >
                  {title}
                </h6>

                <div
                  className={styles.UspItem_uspItemText__6aUpv}
                  style={{
                    opacity: expandedIndex === index ? 1 : 0,
                    maxHeight: expandedIndex === index ? '1000px' : '0',
                    height: expandedIndex === index ? 'auto' : '0',
                    transition: '0.5s ease-in-out',
                  }}
                >
                  <p>
                    {title === "We Believe in Accessible Modern Appliances" &&
                      "We believe that essential home appliances with the latest technology should be accessible and affordable in every corner of the world."}
                    {title === "We Resolve Every Export Challenge" &&
                      "Our dedicated teams specialize in each commodity, providing high-quality solutions and insights for any product or request."}
                    {title === "Single Point of Contact" &&
                      "Our team guides customers through every stage of the export process, ensuring a seamless experience."}
                    {title === "Quick and Adaptive Decision-Making" &&
                      "We support customers through quick decision-making and open communication, setting us apart."}
                  </p>
                </div>

                <LoadingLine isLoading={loadingIndex === index} duration={10000} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}