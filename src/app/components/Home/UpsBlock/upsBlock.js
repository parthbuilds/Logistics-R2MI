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
            <p>World's Leading Home Appliances Exporter.</p>
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
            "We Believe in PeopleWe Believe in Accessible Modern Appliances",
            "We Resolve Every Export Challenge",
            "Single Point of Contact",
            "Quick and Adaptive Decision-Making"
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
                    {title === "We Believe in PeopleWe Believe in Accessible Modern Appliances" &&
                      "We believe that essential home appliances with the latest technology should be accessible and affordable in every corner of the world. We help every home stay equipped with essential modern appliances for a better and more efficient lifestyle."}
                    {title === "We Resolve Every Export Challenge" &&
                      "Our dedicated teams specialize in each commodity, using their expertise to provide high-quality solutions and insights for any product or request. With a global presence, we have in-depth knowledge of local markets, regulations, and customs."}
                    {title === "Single Point of Contact" &&
                      "Our team guides customers through every stage of the export process, from customs clearance to tendering and procurement services."}
                    {title === "Quick and Adaptive Decision-Making" &&
                      "What sets us apart is our dedication to supporting customers in every aspect, combined with our flexibility. Our swift decision-making is fueled by a culture of open communication within the company."}
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
