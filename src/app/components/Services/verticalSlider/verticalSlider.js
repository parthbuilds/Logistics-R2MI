'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './verticalSlider.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSlider() {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const data = [
        {
            title: 'Your Cargo Across the Ocean',
            description: 'At Route To Export, ocean freight is a cornerstone of our services. Through exclusive partnerships with global and local networks, we ensure smooth, hassle-free shipping tailored to your needs.',
            image: '/images/services/Ship.png',
            alt: 'Service 1 Image'
        },
        {
            title: 'Your Cargo Flying in the Air',
            description: 'Through strong partnerships with leading airlines, we offer competitive rates and flexible scheduling for all air freight shipments. Our expert team handles customs clearance and paperwork, ensuring fast and seamless deliveries. We also provide specialized solutions such as on-board courier (OBC) and aircraft-on-ground (AOG) services. For chartering, we offer both full and partial options, tailored to meet your specific requirements.',
            image: '/images/services/baloon_rocket.png',
            alt: 'Service 2 Image'
        },
        {
            title: 'Service Your Cargo on the Road',
            description: 'As a leading export company in India, we collaborate with trusted road transport providers to deliver comprehensive freight solutions. From full truckload (FTL) and less-than-truckload (LTL) to seamless multimodal transport, we ensure efficient shipping by combining road freight with other transport modes for global deliveries.',
            image: '/images/services/truck.png',
            alt: 'Service 3 Image'
        },
        {
            title: 'Your Cargo on rails',
            description: 'Rail transport is the future of efficient, sustainable, and innovative shipping. With cost-effective solutions, reduced carbon footprints, and seamless connectivity, we ensure your cargo moves reliably across borders. Discover how our rail freight services provide a secure, timely, and eco-friendly way to transport goods worldwide.',
            image: '/images/services/train.png',
            alt: 'Service 4 Image'
        },
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        const container = containerRef.current;
        if (!slider || !container) return;

        const slides = gsap.utils.toArray(`.${styles.ServiceSlider_slide__sWHQ6}`);
        const slideWidth = slides[0].offsetWidth;
        const totalWidth = slideWidth * slides.length;

        gsap.set(slider, { width: totalWidth });

        gsap.to(slider, {
            x: () => -(totalWidth - window.innerWidth),
            ease: 'none', 
            duration: 1, 
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: true,
                end: () => `+=${totalWidth - window.innerWidth}`,
                invalidateOnRefresh: true,
            },
        });
    }, []);

    return (
        <section className={styles.ServiceSlider_section__tsvy4}>
            <div ref={containerRef} className={styles.ServiceSlider_container__ZYKXg}>
                <div ref={sliderRef} className={styles.ServiceSlider_slideWrapper__tEDks}>
                    {data.map((service, index) => (
                        <div key={index} className={styles.ServiceSlider_slide__sWHQ6} data-index={index + 1}>
                            <div className={styles.ServiceSlider_textWapper__CgzsO}>
                                <h3 className={styles.ServiceSlider_slideTitle__mTYcM}>
                                    <p>{service.title}</p>
                                </h3>
                                <div className={styles.ServiceSlider_slideInfo__ZrRFv}>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                            <div className={styles.ServiceSlider_imageWrapper__mcELX}>
                                <img
                                    alt={service.alt}
                                    loading="lazy"
                                    width="920"
                                    height="803"
                                    decoding="async"
                                    className={`${styles.ServiceSlider_image__zrDy4} ${styles.ServiceSlider_imageFallback__O_KME}`}
                                    src={service.image}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}