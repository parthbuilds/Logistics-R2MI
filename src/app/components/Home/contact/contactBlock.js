import React from 'react';
import styles from './contactBlock.module.css';

const ContactBlock = () => {
    return (
        <section className={styles.ContactBlock_section__gp2Lw}>
            <svg className={styles.ContactBlock_darkMask__o5kt7}>
                <clipPath id="darkContactMask">
                    <rect className={styles.ContactBlock_darkRect__QGI_A}></rect>
                </clipPath>
            </svg>
            <svg className={styles.ContactBlock_lightMask___CChp}>
                <clipPath id="lightContactMask">
                    <rect className={styles.ContactBlock_maskRect__60K8r}></rect>
                </clipPath>
            </svg>
            <div className={styles.ContactBlock_imageWrapper__nfNkK}>
                <div className={styles.ContactBlock_imageMove__RoRh_} style={{ transform: 'none' }}>
                    <img
                        alt="Manuport logistics"
                        loading="lazy"
                        width="744"
                        height="576"
                        decoding="async"
                        data-nimg="1"
                        className={`${styles.ContactBlock_image___vvh_} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`}
                        style={{
                            color: 'transparent',
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 50%',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: 'url("https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg")'
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        src="/images/getintouch.png"
                    />
                </div>
            </div>
            <div className={styles.ContactBlock_getInTouchWrapper__5VNpf}>
                <a href="/Contact">
                    <div className={styles.ContactBlock_lightContent__OrbOU}>
                        <div className={styles.ContactBlock_container___Ldf3}>
                            <div className={styles.ContactBlock_introWrapper__m1k2B}>
                                <h3 className={styles.ContactBlock_title__7ZvTW}>
                                    <p>get in touch</p>
                                    <div className={styles.ContactBlock_iconWrapper__qtipG}>
                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.ContactBlock_titleIcon__4LFGI}`}></i>
                                    </div>
                                </h3>
                                <div className={styles.ContactBlock_intro__3dwEj}>
                                    <p>Get local advice for your global request. Contact us now.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ContactBlock_darkContent__S8Zjx}>
                        <div className={styles.ContactBlock_container___Ldf3}>
                            <div className={styles.ContactBlock_introWrapper__m1k2B}>
                                <h3 className={styles.ContactBlock_title__7ZvTW}>
                                    <p>get in touch</p>
                                    <button
                                        type="button"
                                        className={`${styles.button} ${styles.tertiary} ${styles.Button_button__T6zT9} ${styles.Button_tertiary__JUfBS} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE}`}
                                        aria-label="">
                                        <span className={styles.Button_titleWrapper__Glw9g}></span>
                                        <div className={`${styles.Button_icon__Rt_Hz} ${styles.Button_back___SPoE} ${styles.iconwrapper}`}>
                                            <i className={`${styles.Icon_icon___Kgo7} ${styles.icon}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                                                    <path fill="currentColor" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                </svg>
                                            </i>
                                        </div>
                                    </button>
                                </h3>
                                <div className={styles.ContactBlock_intro__3dwEj}>
                                    <p>Get local advice for your global request. Contact us now.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default ContactBlock;
