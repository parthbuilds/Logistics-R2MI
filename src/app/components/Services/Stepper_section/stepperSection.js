'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './stepperSection.module.css';

const data = [
    {
        id: '01',
        title: 'Merchant export/Trading export',
        description: 'we specialize in merchant exports, delivering streamlined and efficient trade solutions for businesses expanding into international markets. With a strong global network and deep expertise in export operations, we offer comprehensive, customized solutions to meet diverse business requirements.',
    },
    {
        id: '02',
        title: 'Product sourcing and procurement',
        description: 'We assist businesses in acquiring high-quality products at competitive prices through a well-structured and efficient process. Our approach includes thorough market research, identifying the right sources, and negotiating the best terms to ensure cost-effectiveness and consistency. With strong industry connections, we simplify procurement by handling compliance, logistics, and quality assurance. Our expertise ensures a smooth flow of goods while adhering to regulatory standards, allowing businesses to focus on growth without supply chain disruptions.',
    },
    {
        id: '03',
        title: 'Market research and product identification',
        description: 'We analyze market trends and industry demands to identify the most suitable products for businesses. Through strategic research and competitive analysis, we ensure informed decision-making, helping businesses select products that drive growth and profitability. Our expertise enables businesses to stay ahead in dynamic markets, optimize their product offerings, and capitalize on emerging opportunities for long-term success.',
    },
    
];

export default function StepperSection () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = data.length;
    const carouselRef = useRef(null);
    const touchStartX = useRef(null);

    // Handle next slide by 5 items
    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 5, totalSlides - 1));
    };

    // Handle previous slide by 5 items
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 5, 0));
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (!touchStartX.current || !carouselRef.current) return;

        const touchCurrentX = e.touches[0].clientX;
        const diffX = touchStartX.current - touchCurrentX;
        const sensitivity = 5;

        if (Math.abs(diffX) > sensitivity) {
            if (diffX > 0) {
                handleNext();
            } else {
                handlePrev();
            }
            touchStartX.current = null;
        }
    };

    const handleTouchEnd = () => {
        touchStartX.current = null;
    };

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.addEventListener('touchstart', handleTouchStart);
            carouselRef.current.addEventListener('touchmove', handleTouchMove);
            carouselRef.current.addEventListener('touchend', handleTouchEnd);

            return () => {
                if (carouselRef.current) {
                    carouselRef.current.removeEventListener('touchstart', handleTouchStart);
                    carouselRef.current.removeEventListener('touchmove', handleTouchMove);
                    carouselRef.current.removeEventListener('touchend', handleTouchEnd);
                }
            };
        }
    }, []);

    return (
        <section className={styles.Stepper_section__s_Und}>
            <div className={styles.Stepper_container__oFfO_}>
                <div className={styles.Stepper_containerTitleWrapper___TcKF}>
                    <h3>Export Experts</h3>
                </div>
                <div className={styles.Stepper_stepperWrapper__Y2Scs}>
                    <div className={styles.StepperCarousel_carouselContainer__Q0BAq}>
                        <div
                            className={styles.StepperCarousel_carouselWrapper__v0h6t}
                            ref={carouselRef}
                        >
                            <div
                                className={styles.StepperCarousel_carousel__qtKCt}
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / 5)}%)`,  // Adjusts to 5 slides at a time
                                    transition: 'transform 0.5s ease-in-out',
                                    display: 'flex',
                                }}
                            >
                                {data.map((item) => (
                                    <div key={item.id} className={styles.Stepper_item____1Dn} >
                                        <div className={styles.Stepper_itemIcon__6trkX}>
                                            <img src='/images/Logo.svg' alt='' height='40px' width='40px'></img>
                                        </div>
                                        <div className={styles.Stepper_titleWrapper__oATRq}>
                                            <h3 className={styles.Stepper_number__Syhmc}>{item.id}</h3>
                                            <h6 className={styles.Stepper_title__dXCXT}>{item.title}</h6>
                                        </div>
                                        <div className={styles.Stepper_info__udxYT}>
                                            <p>{item.description}</p>
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
}
