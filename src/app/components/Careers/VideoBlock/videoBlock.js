'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './video.module.css';

const VideoBlock = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const carouselContainer = useRef(null);
  const [itemWidth, setItemWidth] = useState(0); // To track item width for translation

  useEffect(() => {
    // Calculate item width dynamically after component mounts and videos are available
    if (carouselContainer.current && videos && videos.length > 0) {
      const firstItem = carouselContainer.current.querySelector(`.${styles.VideoBlock_carousel__item___kdpC}`);
      if (firstItem) {
        setItemWidth(firstItem.offsetWidth);
      }
    }
  }, [videos]); // Recalculate if videos prop changes

  const handlePrev = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  useEffect(() => {
    // Update carousel position when currentVideoIndex changes
    if (carouselContainer.current && itemWidth) {
      const translateValue = -currentVideoIndex * itemWidth;
      carouselContainer.current.style.transform = `translate3d(${translateValue}px, 0px, 0px)`;
    }
  }, [currentVideoIndex, itemWidth]);


  if (!videos || videos.length === 0) {
    return null; // Or render a placeholder if no videos are provided
  }

  return (
    <section className={styles.VideoBlock_section__ZOJyc}>
      <div className={styles.VideoBlock_container__AMMln}>
        <div className={styles.VideoBlock_background__abLep}></div>
        <div className={styles.VideoBlock_content__5IbZO}>
          <h3 className={styles.VideoBlock_title__i8um1}>Let your future colleagues convince you</h3>
        </div>
        <div className={styles.VideoBlock_contentWrapper__MLz4U} style={{ opacity: 1, transform: 'none' }}>
          <div className={styles.VideoBlock_carouselButtonWrapper__aN2k_}>
            <button
              aria-disabled={currentVideoIndex === 0}
              className={`${styles.VideoBlock_emblabutton__d4G1X} ${styles.VideoBlock_prev__iRqQG}`}
              onClick={handlePrev}
              disabled={currentVideoIndex === 0}
              aria-label="carouselbutton previous"
            >
              <span className={styles.Icon_icon___Kgo7} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                  <path fill="currentColor" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                </svg>
              </span>
            </button>
            <button
              aria-disabled={currentVideoIndex === videos.length - 1}
              className={styles.VideoBlock_emblabutton__d4G1X}
              onClick={handleNext}
              disabled={currentVideoIndex === videos.length - 1}
              aria-label="carouselbutton next"
            >
              <span className={styles.Icon_icon___Kgo7} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                  <path fill="currentColor" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className={styles.VideoBlock_carouselWrapper__fnrgi}>
            <div className={styles.VideoBlock_carousel__MuAnE}>
              <div className={`${styles.VideoBlock_carousel__container__R2arb} carousel__container`} ref={carouselContainer}>
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={`${styles.VideoBlock_carousel__item___kdpC} ${styles.VideoBlock_items_1__Cv7l0} ${index!== currentVideoIndex? styles.VideoBlock_nonActive__otSIC: ''}`} // Conditionally apply nonActive class
                  >
                    <div className={`${styles.Video_videowrapper__UxMrZ} ${styles.VideoBlock_imageWrapper__YU9aC}`} style={{ opacity: 1, transform: 'none' }}>
                      <iframe
                        width="560"
                        height="315"
                        className={styles.Video_video__YrKhY}
                        src={video.url}
                        title={`YouTube video player ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;