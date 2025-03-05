import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.AboutBlock_section__9WQmC}>
      <div className={styles.AboutBlock_container___ieX0}>
        <div className={styles.AboutBlock_imageSection__6z_Kp}>
          <h2 className={styles.AboutBlock_titleLarge__hwrwt}>Global Export Reach,</h2>
          <div className={styles.AboutBlock_videoWrapper__s0vxa}>
            <div className={styles.AboutBlock_videoMove__s_Zgz}>
              <video
                className={styles.AboutBlock_video__CKPzH}
                width="1418"
                height="628"
                playsInline
                autoPlay
                src="/video/R2MEx Ad2.mp4"
                muted
                loop
              />
            </div>
          </div>
        </div>

        <div className={styles.AboutBlock_textSection__toSlF}>
          <h2 className={styles.AboutBlock_titleSmall__f0IN5}>
            Driven by Passion
            and Strong Teamwork
          </h2>
        </div>
        <div className={styles.AboutBlock_infoSection__rhhGb}>
        <img className ={styles.Image_office} src="/images/Mockup.png" alt=""/>
          <div className={styles.AboutBlock_info__jqTAN}>
            <p>
            The RTX family shares a single passion: exports. Our team is skilled, proactive, and dedicated to making exports more efficient and dependable, always prioritizing our customers. Through innovative solutions, we build trust and consistently deliver exceptional satisfaction.
            </p>
            <a
              className={`button primary ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_darkmode__ozqJQ} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE} ${styles.AboutBlock_button__gGFFn}`}
              aria-label="Join our Team"
              href="/Careers"
            >
              <span className={`${styles.Button_titleWrapper__Glw9g} ${styles.JobsCard_title__tjjE7}`} >Join our Team</span>
              <div className={`${styles.Button_icon__Rt_Hz} ${styles.Button_back___SPoE} ${styles.iconwrapper}`}>
                <i className={`${styles.Icon_icon___Kgo7} ${styles.icon}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
