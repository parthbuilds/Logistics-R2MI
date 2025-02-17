'use client'
import { useState } from 'react';
import React from 'react';
import styles from './upsBlock.module.css';

export default function UpsBlock() {
  // State to manage the expanded section
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Handle click to toggle the description visibility
  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close the accordion if it's already open
    } else {
      setExpandedIndex(index); // Open the clicked accordion
    }
  };

  return (
    <section className={`${styles.UspBlock_section__SSpPU} ${styles.UspBlock_dark__576q1}`}>
      <div className={styles.UspBlock_container__BsBlZ}>
        <div
          className={styles.UspBlock_titleWrapper__0bZaZ}
          style={{ transform: 'translateY(24px) translateZ(0)' }}
        >
          <h2 className={styles.UspBlock_title__5syXk}>
            <p>We’re Different Because</p>
          </h2>
          <div className={styles.UspBlock_imageSection__Pe14P}>
            {/* Single Image from Public Folder */}
            <img
              alt="Manuport logistics"
              loading="lazy"
              width="424"
              height="232"
              decoding="async"
              className={styles.UspBlock_image__O4ZSe}
              srcSet="/images/Wood-Business.png"
            />
          </div>
        </div>
        <div className={styles.UspBlock_uspWrapper__dzsDK}>
          {[
            "We Believe in People",
            "We Solve Each and Any Shipping Problem",
            "Single Point of Contact",
            "Flexible & Fast Decision-Making"
          ].map((title, index) => (
            <div key={index} className={styles.UspBlock_uspWrapperInside__00mFz}>
              <div className={styles.UspItem_uspItem__qkMCK} style={{ opacity: 1 }}>
                {/* Heading */}
                <h6
                  className={styles.UspItem_uspItemTitle__pyK16}
                  onClick={() => toggleAccordion(index)}
                >
                  {title}
                </h6>

                {/* Description */}
                <div
                  className={styles.UspItem_uspItemText__6aUpv}
                  style={{
                    opacity: expandedIndex === index ? 1 : 0,
                    maxHeight: expandedIndex === index ? '1000px' : '0',
                    minHeight: expandedIndex === index ? 'auto' : '0',
                    height: expandedIndex === index ? 'auto' : '0',
                    transition: '.5 0.3s ease-in-out, max-height 0.3s ease-in-out, height 0.3s ease-in-out'
                  }}
                >
                  <p>
                    {title === "We Believe in People" &&
                      "Our people are our greatest asset, and we deeply believe in them. At MPL, we embrace a unique culture together where everyone is valued, supported, and empowered to achieve their full potential."}
                    {title === "We Solve Each and Any Shipping Problem" &&
                      "We collaborate with dedicated teams for each commodity, leveraging their specialized expertise to deliver high-quality solutions and insights for any product or request. With a global presence, we possess deep knowledge of local markets, regulations, and customs."}
                    {title === "Single Point of Contact" &&
                      "Our team helps customers navigate every step of the logistics process, including customs clearance, tendering, and procurement services."}
                    {title === "Flexible & Fast Decision-Making" &&
                      "Our flexibility and commitment to supporting customers in every way make us unique. Our rapid decision-making is driven by the open communication strategy we cultivate within the company."}
                  </p>
                </div>

                {/* Line */}
                <div className={styles.UspItem_lineWrapper__CaFPf}>
                  <div
                    className={styles.UspItem_line__xiQ1n}
                    style={{ transform: 'scaleX(0) translateZ(0)', transformOrigin: '100% 50% 0' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
