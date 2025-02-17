'use client'
import styles from "./section.module.css";

function Section() {
  return (
    <section className={`${styles.CtaBlock_section__bNFj7} ${styles.CtaBlock_dark__Vqkj3}`}>
      <div className={`${styles.CtaBlock_container__nHh2p} ${styles.CtaBlock_left__m_YMo}`}>
        <div
          className={`${styles.CtaBlock_content__87Op8} ${styles.CtaBlock_left__m_YMo}`}
        >
          <div>
            <h3 className={styles.CtaBlock_title__enemh}>What we Move</h3>
          </div>
          <div>
            <div className={styles.CtaBlock_info__DVPeC}>
              <div>
                <p>
                  Behind every shipment is a world of opportunities. From raw materials and chemicals to consumer goods and beyond, we don’t just move cargo—we carry your dreams.
                </p>
              </div>
            </div>
            <div>
              <a
                className={`${styles.button} ${styles.primary} ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_darkmode__ozqJQ} ${styles.Button_goldLight__ZvTNn} ${styles.Button_goldDark__LAUet} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE}`}
                aria-label="About our Commodities"
                href="/commodities"
              >
                <span className={styles.Button_titleWrapper__Glw9g}>
                  About our Commodities
                </span>
                <div
                  className={`${styles.Button_icon__Rt_Hz} ${styles.Button_back___SPoE} ${styles.iconwrapper}`}
                >
                  <i className={`${styles.Icon_icon___Kgo7} ${styles.icon}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </i>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Static Image */}
        <div
          className={`${styles.CtaBlock_videoWrapper__ZHqAx} ${styles.CtaBlock_dark__Vqkj3} ${styles.CtaBlock_left__m_YMo}`}
        >
          <div
            className={styles.CtaBlock_videoAnimWrapper__MFcyz}
          >
            <img
              alt="Manuport logistics commodity"
              loading="lazy"
              width="727"
              height="727"
              data-nimg="1"
              className={`${styles.CtaBlock_inactive__UBkTw} ${styles.CtaBlock_animatedImage__AL5Rq}`}
              src="/images/Flooring-Business.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.CtaBlock_background__Goley}></div>
    </section>
  );
}

export default Section;
