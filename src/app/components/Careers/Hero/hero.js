import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
    const Hero = () => {
        useEffect(() => {
            const chars = document.querySelectorAll('.char');
            chars.forEach((char, index) => {
                char.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
                char.style.transform = 'translateY(100%)';
                char.style.opacity = '0';

                setTimeout(() => {
                    char.style.transform = 'translateY(0)';
                    char.style.opacity = '1';
                }, index * 100); // Delays each character's animation
            });
        }, []);
    }
    return (
        <section className={styles.Hero_section__5Zdlj}>
            <div className={styles.Hero_container__RZriv}>
                <div className={styles.Hero_content__y4eWy}>
                    <div className={styles.Hero_titleWrapper__blMd1}>
                        <h1 className={styles.Hero_title__dKRr0}>
                            Join the R2X Team
                        </h1>
                    </div>
                    <div className={styles.Hero_info__gmy_W}>
                        <p><b>Discover </b> <b>our </b> <b>Careers</b></p>
                        <p>Join our team and be a part of a dynamic export business. Explore opportunities to manage global shipments, ensure smooth logistics, and drive international trade success.</p>
                    </div>
                </div>
                <div className={`${styles.Hero_imageWrapper__LRFS_} SECONDARY`}>

                    <img
                        alt="Carrers"
                        fetchPriority="high"
                        width="602"
                        height="602"
                        decoding="async"
                        className={`${styles.Hero_image__jGrQ9} ${styles.Image_is_loaded__RCqPL}`}
                        src="/images/career.webp"
                    />
                    <img
                        alt="Carrers"
                        fetchPriority="high"
                        width="430"
                        height="430"
                        decoding="async"
                        className={`${styles.Hero_mobileimage__6LUna} ${styles.Image_is_loaded__RCqPL}`}
                        src="/images/carrer.webp"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
