'use client';

import React, { useState } from 'react';
import styles from './stepperSection.module.css';

const data = [
    {
        id: '01',
        title: 'In-House Customs',
        description: 'Our well-skilled Fast Customs team has more than 25 years of expertise.',
    },
    {
        id: '02',
        title: 'Global Logistics',
        description: 'Efficient worldwide shipping solutions for businesses of all sizes.',
    },
    {
        id: '03',
        title: 'Secure Warehousing',
        description: 'State-of-the-art storage facilities to keep your goods safe and organized.',
    },
    {
        id: '04',
        title: 'Express Delivery',
        description: 'Rapid delivery services with real-time tracking and updates.',
    },
    {
        id: '05',
        title: 'Supply Chain Consulting',
        description: 'Expert advice to streamline and optimize your supply chain operations.',
    },
];

const StepperSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = data.length;

    const handleNext = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const Final = 2;

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
                                disabled={currentIndex === Final - 1}
                            >
                                <i className={`${styles.Icon_icon___Kgo7} icon`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                                        <path fill="currentColor" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                    </svg>
                                </i>
                            </button>
                        </div>

                        <div className={styles.StepperCarousel_carouselWrapper__v0h6t}>
                            <div
                                className={styles.StepperCarousel_carousel__qtKCt}
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                    transition: 'transform 0.5s ease-in-out',
                                    display: 'flex',
                                }}
                            >
                                {data.map((item) => (
                                    <div key={item.id} className={styles.Stepper_item____1Dn} style={{ minWidth: '34%' }}>
                                        <div className={styles.Stepper_itemIcon__6trkX}>icon</div>
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
};

export default StepperSection;
