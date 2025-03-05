'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './stepperSection.module.css';

const data = [
    {
        id: '01',
        title: 'Multimodal Transport Services',
        description: 'Ensuring your shipment reaches its final destination often requires multiple transport modes. Our seamless multimodal export solutions integrate air, sea, road, and rail, optimizing routes for speed, cost-effectiveness, and reliability. Whether it’s cross-border deliveries or intercontinental exports, we streamline logistics to guarantee smooth and efficient global shipments.',
    },
    {
        id: '02',
        title: 'Export Tender & Procurement Services',
        description: 'We provide expert guidance for tenders, offering tailored 3PL, 4PL, or direct account (BCO) solutions to simplify procurement for exporters. From budgeting for maritime transport to coordinating supplier negotiations, we ensure a structured, cost-effective approach. Our team supports you through supplier selection, data management, and final carrier evaluation, ensuring a seamless and efficient export procurement process.',
    },
    {
        id: '03',
        title: 'In-House Customs Expertise',
        description: 'Navigating international customs regulations is crucial for export success. Our specialized in-house customs team ensures smooth, cost-effective clearance by managing export documentation, fiscal representation, inspections, and compliance checks. With expertise in global trade regulations, we minimize delays and maximize efficiency, ensuring hassle-free export operations.',
    },
    
];

export default function StepperSection () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = data.length;
    const carouselRef = useRef(null);
    const touchStartX = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
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
                    <h3>More Services</h3>
                </div>
                <div className={styles.Stepper_stepperWrapper__Y2Scs}>
                    <div className={styles.StepperCarousel_carouselContainer__Q0BAq}>
                        {/* <div className={styles.StepperCarousel_carouselButtonWrapper__t20mg}>
                            <button
                                className={`${styles.BlogCarousel_emblabutton__t5aLE} ${styles.BlogCarousel_prev__vAE6w}`}
                                aria-label="carouselbutton previous"
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                            >
                                <i className={`${styles.Icon_icon___Kgo7} icon`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="M11.674 1.076a.6.6 0 0 0-.848 0l-10.5 10.5a.6.6 0 0 0 0 .848l10.5 10.5a.6.6 0 0 0 .848-.848L1.6 12l10.074-10.074a.6.6 0 0 0 0-.848Z" clipRule="evenodd"></path>
                                        <path fill="currentColor" fillRule="evenodd" d="M23.85 12a.6.6 0 0 0-.6-.6H1.85a.6.6 0 0 0 0 1.2h21.5a.6.6 0 0 0 .6-.6Z" clipRule="evenodd"></path>
                                    </svg>
                                </i>
                            </button>
                            <button
                                className={styles.BlogCarousel_emblabutton__t5aLE}
                                aria-label="carouselbutton next"
                                onClick={handleNext}
                                disabled={currentIndex === data.length - 1}
                            >
                                <i className={`${styles.Icon_icon___Kgo7} icon`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                                        <path fill="currentColor" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                    </svg>
                                </i>
                            </button>
                        </div> */}
                        <div
                            className={styles.StepperCarousel_carouselWrapper__v0h6t}
                            ref={carouselRef}
                        >
                            <div
                                className={styles.StepperCarousel_carousel__qtKCt}
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
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