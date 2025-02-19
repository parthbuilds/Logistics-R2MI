import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.Hero_section__5Zdlj}>
      <div className={styles.Hero_container__RZriv}>
        <div className={styles.Hero_content__y4eWy}>
          <div className={styles.Hero_titleWrapper__blMd1}>
            <h1 className={styles.Hero_title__dKRr0}>
              <span className={`${styles.TextAnimation_text__sTrzf} ${styles.TextAnimation_mounted__Iz2_c}`} data-preview="false">
                <span className={styles.linecontainer}>
                  <span className={styles.line} style={{ display: 'block', textAlign: 'start', width: '100%' }}>
                    <p style={{ display: 'inline-block', position: 'relative' }}>
                      <span className={styles.word}>
                        <span className={styles.char}>M</span>
                        <span className={styles.char}>o</span>
                        <span className={styles.char}>r</span>
                        <span className={styles.char}>e</span>
                      </span>{' '}
                      <span className={styles.word}>
                        <span className={styles.char}>A</span>
                        <span className={styles.char}>b</span>
                        <span className={styles.char}>o</span>
                        <span className={styles.char}>u</span>
                        <span className={styles.char}>t</span>
                      </span>{' '}
                      <span className={styles.word}>
                        <span className={styles.char}>M</span>
                        <span className={styles.char}>P</span>
                        <span className={styles.char}>L</span>
                        <span className={styles.char}>!</span>
                      </span>
                    </p>
                  </span>
                </span>
              </span>
            </h1>
          </div>

          <div className={styles.Hero_info__gmy_W}>
            <p>
              Welcome to the world of MPL, where you can explore the journey that has shaped our success today. Dive into our key figures,
              global reach, and the milestones that define our identity.
            </p>
          </div>
        </div>

        <div className={`${styles.Hero_imageWrapper__LRFS_} SECONDARY`}>
          
          <img
            alt="Manuport logistics"
            fetchPriority="high"
            width="602"
            height="602"
            decoding="async"
            className={`${styles.Hero_image__jGrQ9} ${styles.Image_is_loaded__RCqPL}`}
            src="https://a.storyblok.com/f/240783/2000x3000/e3dfd78c5b/a7405623.jpg/m/1720x1720/filters:quality(95):focal(990x761:991x762)"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
