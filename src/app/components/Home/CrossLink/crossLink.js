'use client'
import React from "react";
import styles from "./crosslink.module.css";
import { useTiltEffect } from "@/app/utils/Tilteffect"; // Import the tilt effect hook

const Crosslink = () => {
    const buttontext = ["#2086ae", "#fff"];
    
    return (
        <section className={styles.CrosslinkBlock_section__LjJPm}>
            <div className={styles.CrosslinkBlock_container__HKHjr}>
                {[{
                    subtitle: "What We Export",
                    buttonLabel: "Commodities",
                    link: "/Services"
                }, {
                    
                    subtitle: "About Us",
                    buttonLabel: "About Us",
                    link: "/About"
                }].map((item, index) => {
                    const { rotate, onMouseMove, onMouseLeave } = useTiltEffect();

                    return (
                        <div 
                            key={index} 
                            className={`${styles.ParallaxWrapper_rotationWrapper__iR1i1} ${styles.CrosslinkBlock_crosslinkCard__SCoir}`}
                            onMouseMove={onMouseMove}
                            onMouseLeave={onMouseLeave}
                            style={{
                                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                                transition: "transform 0.2s ease-out",
                            }}
                        >
                        <div className={`${styles.ParallaxWrapper_sheenWrapper__vGGtf} sheen`}></div>
                            <div className={styles.CrosslinkBlock_info__hYdqG}>
                                <p>{item.subtitle}</p>
                            </div>
                            <button 
                                type="button" 
                                className={`button primary ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE} ${styles.CrosslinkBlock_button___D_2N}`} 
                                aria-label={item.buttonLabel} 
                            >
                                
                                <div className={styles.Button_icon__Rt_Hz}>
                                    <i className={`${styles.Icon_icon___Kgo7} ${styles.icon}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z"/>
                                            <path fill="currentColor" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z"/>
                                        </svg>
                                    </i>
                                </div>
                            </button>
                            <a className={styles.CrosslinkBlock_link__H620e} href={item.link}></a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Crosslink;
