import React from 'react';
import styles from './ctaBlock.module.css';

const CtaBlock = () => {
    return (
        <section className={`${styles.CtaBlock_section__bNFj7} ${styles.CtaBlock_default__4hQ8L}`}>
            <div className={`${styles.CtaBlock_container__nHh2p} ${styles.CtaBlock_right__cyR7S}`}>
                <div className={`${styles.CtaBlock_content__87Op8} ${styles.CtaBlock_right__cyR7S}`} style={{ transform: 'translateY(24px) translateZ(0)' }}>
                    <div>
                        <h3 className={styles.CtaBlock_title__enemh}>How we Move</h3>
                    </div>
                    <div>
                        <div className={styles.CtaBlock_info__DVPeC}>
                            <div>
                                <p>Manuport Logistics brings a fresh perspective to shipping, powered by creative solutions. Whether by ship, barge, plane, train, truck, or a mix, we move mountains for you.</p>
                            </div>
                        </div>
                        <div>
                            <a className={`${styles.button} ${styles.primary} ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_goldLight__ZvTNn} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE}`} aria-label="Discover our Services" href="/services">
                                <span className={styles.Button_titleWrapper__Glw9g}>Discover our Services</span>
                                <div className={`${styles.Button_icon__Rt_Hz} ${styles.Button_back___SPoE} ${styles.iconwrapper}`}>
                                    <i className={`${styles.Icon_icon___Kgo7} ${styles.icon}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                                            <path fill="currentColor" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                        </svg>
                                    </i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.CtaBlock_videoWrapper__ZHqAx} ${styles.CtaBlock_default__4hQ8L} ${styles.CtaBlock_right__cyR7S}`} style={{ transform: 'none' }}>
                    <div className={styles.CtaBlock_videoAnimWrapper__MFcyz}>
                        <div className={styles.CtaBlock_video__xkBJd} style={{ left: '10%' }}>
                            <img alt="cargo Ship image" loading="lazy" width="968" height="847" decoding="async" data-nimg="1" className={styles.CtaBlock_video__image__RLW28} style={{ color: 'transparent' }} sizes="(max-width: 768px) 640px, (max-width: 1200px) 1024px, 1024px" srcSet="images/Cargo-Plane-Business.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBlock;