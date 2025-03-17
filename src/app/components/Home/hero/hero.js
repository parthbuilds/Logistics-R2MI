import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
    return (
        <section className={styles.VideoPrimaryHero_section__FQhT_}>
            <div className={`${styles.VideoPrimaryHero_container__JJnQY} ${styles.VideoPrimaryHero_initialized__1nbT5}`}>
                <div className={styles.VideoPrimaryHero_content__legsx}>
                    <div className={styles.VideoPrimaryHero_innerContent__T_tvv}>
                        <div className={`${styles.VideoPrimaryHero_lightContent__QQuKE} ${styles.VideoPrimaryHero_initialized__1nbT5}`}>
                            <div className={styles.VideoPrimaryHero_titleWrapper__dDLQh} style={{ opacity: 1, transform: 'none' }}>
                                <h2 className={styles.VideoPrimaryHero_title__ovhlz}>
                                    <p>Expert Export</p>
                                    <p><span className={styles.outline}>Solutions</span></p>
                                </h2>
                            </div>
                        </div>
                        <div className={styles.VideoPrimaryHero_darkContent___llDG}>
                            <div className={styles.VideoPrimaryHero_titleWrapper__dDLQh} style={{ opacity: 1, transform: 'none' }}>
                                        <h1 className={styles.VideoPrimaryHero_title__ovhlz}>
                                            <p>Expert Export</p>
                                            <p><span className={styles.outline}>Solutions</span></p>
                                        </h1>
                                    </div>
                                    <div className={styles.WaveMask_waveWrapper__LIIIs} style={{ height: '0%' }}>
                                    </div>
                                </div>
                    </div>
                </div>
                <div className={`${styles.VideoPrimaryHero_imageWrapper__SkScL} ${styles.VideoPrimaryHero_initialized__1nbT5}`}>
                    <video src="/video/R2X.mp4" className={`${styles.VideoPrimaryHero_image__H7CbZ} ${styles.VideoPrimaryHero_video__550RF}`} playsInline controlsList="nodownload" autoPlay muted loop></video>
                </div>
            </div>
        </section>
    );
};

export default Hero;
