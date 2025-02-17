'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './verticalSlider.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSlider() {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const container = containerRef.current;
        if (!slider || !container) return;

        const slides = gsap.utils.toArray(`.${styles.ServiceSlider_slide__sWHQ6}`);
        const totalWidth = slides.reduce((acc, slide) => acc + slide.offsetWidth, 0);

        gsap.set(slider, { width: totalWidth });

        gsap.to(slider, {
            x: () => -(totalWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: () => `+=${totalWidth}`,
                invalidateOnRefresh: true,
            },
        });
    }, []);

    return (
        <section className={styles.ServiceSlider_section__tsvy4}>
            <div ref={containerRef} className={styles.ServiceSlider_container__ZYKXg}>
                <div ref={sliderRef} className={styles.ServiceSlider_slideWrapper__tEDks}>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className={styles.ServiceSlider_slide__sWHQ6} data-index={index + 1}>
                            <div className={styles.ServiceSlider_textWapper__CgzsO}>
                                <h3 className={styles.ServiceSlider_slideTitle__mTYcM}>
                                    <p>Your Cargo</p>
                                    <p>Across the Ocean</p>
                                </h3>
                                <div className={styles.ServiceSlider_slideInfo__ZrRFv}>
                                    <p>
                                        Ocean freight is one of the most important services that Manuport Logistics offers. We have unique partnerships with both global and local actors to deliver a frictionless service. Additionally, we provide full reporting services and shipment follow-up through our
                                        <a href="/digital" target="_self" aria-label="/digital"> customer portal.</a>
                                    </p>
                                </div>
                                <div className={styles.ServiceSlider_button__vaKTa}>
                                    <a href="/services/ocean-freight" className={`${styles.button} ${styles.primary} ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE}`} aria-label="More Information">
                                        <span className={styles.Button_titleWrapper__Glw9g}>More Information</span>
                                        <div className={`${styles.Button_icon__Rt_Hz} ${styles.Button_back___SPoE} ${styles.iconwrapper}`}>
                                            <i className={`${styles.Icon_icon___Kgo7} ${styles.icon}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                                                    <path fill="currentColor" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                </svg>
                                            </i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.ServiceSlider_imageWrapper__mcELX}>
                                <img
                                    alt="Sugar Business image"
                                    loading="lazy"
                                    width="920"
                                    height="803"
                                    decoding="async"
                                    className={`${styles.ServiceSlider_image__zrDy4} ${styles.ServiceSlider_imageFallback__O_KME}`}
                                    sizes="(max-width: 768px) 640px, (max-width: 1200px) 1024px, 1024px"
                                    srcSet="/images/Sugar-Business.png?w=16&q=75 16w, /images/Sugar-Business.png?w=1024&q=75 1024w, /images/Sugar-Business.png?w=1720&q=75 1720w"
                                    src="/images/Sugar-Business.png?w=1720&q=75"
                                    style={{ color: 'transparent' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}