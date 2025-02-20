'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import styles from './upsBlock.module.css';
import AutoPlaySwiper from '@/app/utils/swiper/swiper';

export default function UpsBlock() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={`${styles.UspBlock_section__SSpPU} ${styles.UspBlock_dark__576q1}`}>
      <div className={styles.UspBlock_container__BsBlZ}>
        <div className={styles.UspBlock_titleWrapper__0bZaZ} style={{ transform: 'translateY(24px) translateZ(0)' }}>
          <h2 className={styles.UspBlock_title__5syXk}>
            <p>World's Leading Home Appliances Exporter.</p>
          </h2>
          <div className={styles.UspBlock_imageSection__Pe14P}>
            <AutoPlaySwiper width="180px" height="160px" />
          </div>
        </div>

        <div className={styles.UspBlock_uspWrapper__dzsDK}>
          {["We Believe in Accessible Modern Appliances", "We Resolve Every Export Challenge", "Single Point of Contact", "Quick and Adaptive Decision-Making"].map((title, index) => (
            <div key={index} className={styles.UspBlock_uspWrapperInside__00mFz}>
              <div className={styles.UspItem_uspItem__qkMCK} style={{ opacity: 1 }}>
                <h6 
                  className={styles.UspItem_uspItemTitle__pyK16} 
                  onClick={() => toggleExpand(index)}
                  style={{ cursor: 'pointer' }}
                >
                  {title}
                </h6>

                <div
                  className={styles.UspItem_uspItemText__6aUpv}
                  style={{
                    opacity: expandedIndex === index ? 1 : 0,
                    maxHeight: expandedIndex === index ? '1000px' : '0',
                    height: expandedIndex === index ? 'auto' : '0',
                    transition: '0.4s ease-in-out, max-height 0.3s ease-in-out, height 0.3s ease-in-out',
                    overflow: 'hidden',
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
