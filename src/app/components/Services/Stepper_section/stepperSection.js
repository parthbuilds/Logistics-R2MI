'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './stepperSection.module.css';

const data = [
    {
        id: '01',
        title: 'Multimodal Transport Services',
        description: 'Getting your shipment to its final destination often requires a combination of transport modes. That’s why we provide seamless multimodal solutions, ensuring smooth and efficient deliveries across the globe. By integrating air, sea, road, and rail, we optimize routes for speed, cost-effectiveness, and reliability.',
    },
    {
        id: '02',
        title: 'Tender & Procurement Services',
        description: 'Our team provides expert support for tenders, offering 3PL, 4PL, or direct account (BCO) solutions tailored to your needs. With a structured and customized approach, we assist in budgeting for maritime transport, coordinating supplier meetings, managing data, and setting negotiation timelines. From initial planning to final carrier selection and evaluation, we ensure a smooth and efficient procurement process.',
    },
    {
        id: '03',
        title: 'In-House Customs',
        description: 'Our expert Fast Customs team offers tailored consultancy to streamline your customs processes for maximum efficiency and cost savings. Beyond import, export, and transit management, we handle fiscal representation, inspections, cargo checks, surveys, and more to ensure a seamless customs experience.',
    },
    {
        id: '04',
        title: 'Handling & Storage',
        description: 'We collaborate with a network of internal and external partners, providing unbiased guidance on handling and storage solutions. As part of our commitment to reliable exports, we operate strategically located warehouses worldwide. This enables us to deliver end-to-end solutions, ensuring efficient storage and smooth supply chain management for our customers.',
    }
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
                        <div className={styles.StepperCarousel_carouselButtonWrapper__t20mg}>
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
                        </div>
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