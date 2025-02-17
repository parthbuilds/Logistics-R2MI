import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.AboutBlock_section__9WQmC}>
      <div className={styles.AboutBlock_container___ieX0}>
        <div className={styles.AboutBlock_imageSection__6z_Kp}>
          <h2 className={styles.AboutBlock_titleLarge__hwrwt}>A Unique Company Culture</h2>
          <div className={styles.AboutBlock_videoWrapper__s0vxa}>
            <div className={styles.AboutBlock_videoMove__s_Zgz}>
              <video
                className={styles.AboutBlock_video__CKPzH}
                width="1418"
                height="628"
                playsInline
                autoPlay
                src="https://pub-1658b62356034e6383dac2ceabbea7a0.r2.dev/people1-video-extracompressed.mp4"
                muted
                loop
              />
            </div>
          </div>
        </div>

        <div className={styles.AboutBlock_textSection__toSlF}>
          <h2 className={styles.AboutBlock_titleSmall__f0IN5}>
            With a heart for logistics and great teamwork
          </h2>
        </div>

        <div className={styles.AboutBlock_infoSection__rhhGb}>
          <div className={styles.AboutBlock_info__jqTAN}>
            <p>
              The MPL family: a team that consists of more than 700 differentiators, spread across the globe. They all have one thing in common: <b>a passion for logistics!</b>
              They&apos;re highly skilled and hands-on, driven by the goal of making logistics more efficient and reliable, and with a commitment to putting our customers first. We do this by using our creative solutions to gain customers&apos; trust, and deliver <b>satisfaction</b>.
            </p>
            <a
              className={`button primary ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_darkmode__ozqJQ} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE} ${styles.AboutBlock_button__gGFFn}`}
              aria-label="Join our Team"
              href="/careers"
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
