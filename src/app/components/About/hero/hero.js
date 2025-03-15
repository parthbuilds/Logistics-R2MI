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
                    <p>
                      <span className={styles.word}>More About RTX</span>
                    </p>
                  </span>

                </span>
              </span>
            </h1>
          </div>

          <div className={styles.Hero_info__gmy_W}>
            <p className={styles.justifyText}>Welcome to the world of RTX, where our journey to success comes to life. Explore our key achievements, global presence, and the milestones that shape who we are today.</p>
            <p className={styles.justifyText}>At RTX, our mission is to revolutionize global exports by delivering high-quality products with efficiency, reliability, and innovation. Our vision is to be the world’s most trusted export partner, setting new standards in logistics and trade.</p>
            <br />
            <p className={styles.justifyText}>Through relentless dedication and continuous growth, we have evolved into a leader in the export industry, adapting to market needs and exceeding client expectations. Our commitment to excellence, customer-centric approach, and innovative solutions have enabled us to serve a diverse range of global clients, ensuring their requirements are met with precision and efficiency. As we continue to expand, our goal remains the same – to provide seamless, world-class export solutions that drive success for our partners worldwide.</p>
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
            src="/images/Logo_Mockup RTX.png"
          />
          <img
            alt="Manuport logistics"
            fetchPriority="high"
            width="430"
            height="602"
            decoding="async"
            className={`${styles.Hero_mobileimage__6LUna} ${styles.Image_is_loaded__RCqPL}`}
            src="/images/Logo_Mockup RTX.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
