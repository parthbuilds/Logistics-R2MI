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
                            The sky is not the limit
                        </h1>
                    </div>
                    <div className={styles.Hero_info__gmy_W}>
                        <p><b>Discover</b> <b>our</b> <b>Services.</b></p>
                        <p>Nothing is too much when it comes to service. Ship, barge, plane, train, truck, or multimodal transport. For you, we move mountains. Discover our logistics solutions.</p>
                    </div>
                </div>
                <div className={`${styles.Hero_imageWrapper__LRFS_} ${styles.secondary} ${styles.Hero_videoWrappper__bDpxx} ${styles.Hero_dronevid__3UxWp}`}>
                    <div className={styles.Hero_drone__xgyLz}>
                        <img alt="drone image" loading="lazy" width="760" height="612" className={`${styles.Hero_videoWrapper__image__cMHrQ} ${styles.Hero_videoWrapper__imageGold__KdEY9}`} src="/img/drone-gold.png" />
                        <img alt="drone image" loading="lazy" width="760" height="612" className={`${styles.Hero_videoWrapper__image__cMHrQ} ${styles.Hero_videoWrapper__imageBusiness__1tL7v}`} src="/images/image.webp" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
