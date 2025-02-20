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
                    title: "COMMODITIES",
                    subtitle: "What We Export",
                    buttonLabel: "Commodities",
                    link: "/Services"
                }, {
                    title: "OUR SERVICES",
                    subtitle: "About Us",
                    buttonLabel: "About Us",
                    link: "/About"
                }].map((item, index) => {
                    const { rotate, onMouseMove, onMouseLeave } = useTiltEffect(); // Apply tilt effect

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
                            <p className={styles.CrosslinkBlock_title__hlDQO}>
                                <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.CrosslinkBlock_icon__FwiZm}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M2.697 13.75a1.6 1.6 0 0 1 1.6-1.6h15.406a1.6 1.6 0 0 1 1.6 1.6v8.5a1.6 1.6 0 0 1-1.6 1.6H4.297a1.6 1.6 0 0 1-1.6-1.6v-8.5Z"/>
                                        <path fill="currentColor" d="M8.27 15.15a.6.6 0 0 1 .6.6v4.5a.6.6 0 1 1-1.2 0v-4.5a.6.6 0 0 1 .6-.6ZM12 15.15a.6.6 0 0 1 .6.6v4.5a.6.6 0 1 1-1.2 0v-4.5a.6.6 0 0 1 .6-.6Z"/>
                                    </svg>
                                </i>
                                {item.title}
                            </p>
                            <div className={styles.CrosslinkBlock_info__hYdqG}>
                                <p>{item.subtitle}</p>
                            </div>
                            <button 
                                type="button" 
                                className={`button primary ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE} ${styles.CrosslinkBlock_button___D_2N}`} 
                                aria-label={item.buttonLabel} 
                            >
                                <span className={styles.Button_titleWrapper__Glw9g} style={{ color: buttontext[index] }}>
                                    {item.buttonLabel}
                                </span>
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
