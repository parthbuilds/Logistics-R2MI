'use client'
import styles from "./job.module.css";
import { useTiltEffect } from "@/app/utils/Tilteffect"; // Import the tilt effect hook



export const Job = () => {
    const { rotate, onMouseMove, onMouseLeave } = useTiltEffect(); // Apply tilt effect

    return (
        <section className={styles.JobsBlock_section__2OMCO}>
            <div className={styles.JobsBlock_container__28saQ} >
                <div className={styles.JobsBlock_textWrapper__yQx7Q}>
                    <p className={styles.JobsBlock_smallTitle__gk_sO}>VACANCIES</p>
                    <h2 className={styles.JobsBlock_largeTitle__RYiIZ}>
                        <span className={styles.TextAnimation_text__sTrzf}>
                            <p>
                                Join<br />our Team
                            </p>
                        </span>
                    </h2>
                    <a className={`${styles.button} ${styles.primary} ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_goldLight__ZvTNn} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE}`} aria-label="Discover our Customer Portal" href="/digital">
                        <span className={styles.Button_titleWrapper__Glw9g}>All Vacancies</span>
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
                <div className={styles.JobsBlock_cardWrapper__23TBW} onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    style={{
                        transform: `perspective(2000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                        transition: "transform 0.2s ease-out",
                    }}>
                    <div className={`${styles.ParallaxWrapper_rotationWrapper__iR1i1} ${styles.JobsCard_jobcard__1oiYB}`}>
                        <div className={`${styles.ParallaxWrapper_sheenWrapper__vGGtf} sheen`}></div>
                        <div className={styles.JobsCard_imageWrapper__UPtOz}>
                            <img alt="Manuport logistics" loading="lazy" width="200" height="252" decoding="async" className={`${styles.JobsCard_image__s932i} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`} />
                        </div>
                        <div className={styles.JobsCard_textWrapper__vKRoV}>
                            <h5 className={styles.JobsCard_title__tjjE7}>Receptionist - Office Assistant</h5>
                            <div className={styles.JobsCard_info__mr8vF}>
                                <p>Our flexibility and commitment to supporting customers in every way make us unique.</p>
                            </div>
                            <div className={styles.JobsCard_button__RAf_R}>
                                <button type="button" className={`${styles.button} ${styles.secondary} ${styles.Button_button__T6zT9} ${styles.Button_secondary__8ZLTI} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE}`} aria-label="Apply here">
                                    <span className={styles.Button_titleWrapper__Glw9g}>Apply here</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Job;
