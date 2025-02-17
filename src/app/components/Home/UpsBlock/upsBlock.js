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
  const swiper = new Swiper('.swiper', {
    loop: true, // Important for infinite loop
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Add these for infinite scroll behavior
    on: {
      slideChange: function () {
        // Check if we need to add more slides
        if (this.activeIndex >= this.slides.length - 2) { // Adjust the number (2) as needed
          appendSlides(3); // Add 3 more slides
          this.update(); // Important: Update Swiper after adding slides
        } else if (this.activeIndex < 2) {
            prependSlides(3);
            this.update();
        }
      },
    },
  });

  let nextSlideId = 4; // Start from 4 since we have 1, 2, 3 already
  let prevSlideId = 0;

  function appendSlides(numSlides) {
    const wrapper = swiper.wrapperEl;
    for (let i = 0; i < numSlides; i++) {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.textContent = `Slide ${nextSlideId++}`;
      wrapper.appendChild(slide);

    }
  }

    function prependSlides(numSlides) {
        const wrapper = swiper.wrapperEl;
        const firstSlide = wrapper.querySelector('.swiper-slide:first-child');

        for (let i = 0; i < numSlides; i++) {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.textContent = `Slide ${--prevSlideId}`;
            wrapper.insertBefore(slide, firstSlide);
        }
        swiper.slideTo(swiper.activeIndex + numSlides, 0, false);
    }



  // Initialize with some extra slides
  appendSlides(5);
  prependSlides(5);
  swiper.update(); // Very important to update after adding slides

  return (
    <section className={`${styles.UspBlock_section__SSpPU} ${styles.UspBlock_dark__576q1}`}>
      <div className={styles.UspBlock_container__BsBlZ}>
        <div
          className={styles.UspBlock_titleWrapper__0bZaZ}
          style={{ transform: 'translateY(24px) translateZ(0)' }}
        >
          <h2 className={styles.UspBlock_title__5syXk}>
            <p>Worlds Leading Home appliances Exporter.</p>
          </h2>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
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
