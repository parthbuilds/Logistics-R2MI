'use client'
import React from 'react';
import { useState } from 'react';
import styles from './blog.module.css'; // Import the CSS module


const Blog = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle the "Next" button click
    const handleNext = () => {
        if (currentIndex < 5 - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Function to handle the "Previous" button click
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Calculate the translateX value for the slider
    const cardWidth = 100; // Assuming each card takes up 100% width of the container
    const translateX = -(currentIndex * cardWidth);

    return (
        <section className={styles.BlogBlock_section__rcDP8}>
            <div className={styles.BlogBlock_container__uZmM4}>
                <div className={styles.BlogBlock_contentContainer__cKm_G} >
                    <div className={styles.BlogBlock_textContent__JN2ro}>
                        <p className={styles.BlogBlock_titleSmall__VvSfo}>Blog</p>
                        <h3 className={styles.BlogBlock_titleLarge__wPU7i}>What’s New at RTX</h3>
                        <a className={`${styles.button} ${styles.primary} ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_darkmode__ozqJQ} ${styles.Button_goldLight__ZvTNn} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE} ${styles.BlogBlock_button__8zJky}`} aria-label="All Articles" href="/blog">
                            <span className={styles.Button_titleWrapper__Glw9g}>All Articles</span>
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
                    <div className={styles.BlogBlock_blogWrapper__Jvbdh}>
                        <div className={styles.BlogCarousel_carouselWrapper__ulveD}>
                        <div className={styles.BlogCarousel_carouselButtonWrapper__i4KNb}>
                                        <button
                                            className={`${styles.BlogCarousel_emblabutton__t5aLE} ${styles.BlogCarousel_prev__vAE6w}`}
                                            aria-label="carouselbutton previous"
                                            onClick={handlePrev} disabled={currentIndex === 0}
                                        >
                                            <i className={`${styles.Icon_icon___Kgo7} icon`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fillRule="evenodd" d="M11.674 1.076a.6.6 0 0 0-.848 0l-10.5 10.5a.6.6 0 0 0 0 .848l10.5 10.5a.6.6 0 0 0 .848-.848L1.6 12l10.074-10.074a.6.6 0 0 0 0-.848Z" clipRule="evenodd"></path>
                                                    <path fill="currentColor" fillRule="evenodd" d="M23.85 12a.6.6 0 0 0-.6-.6H1.85a.6.6 0 0 0 0 1.2h21.5a.6.6 0 0 0 .6-.6Z" clipRule="evenodd"></path>
                                                </svg>

                                            </i>
                                        </button>
                                        <button
                                            className={styles.BlogCarousel_emblabutton__t5aLE }
                                            aria-label="carouselbutton next"
                                            onClick={handleNext} disabled={currentIndex === 2 - 1}
                                        >
                                            <i className={`${styles.Icon_icon___Kgo7} icon`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                                                    <path fill="currentColor" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                </svg>
                                            </i>
                                        </button>
                                    </div>
                            <div className={styles.BlogCarousel_carousel__Hv9rA} style={{
                    transform: `translateX(${translateX}%)`, 
                    transition: 'transform 0.5s ease-in-out' 
                }}

>
                                <div className={`${styles.BlogCarousel_carousel__container__CdeDd} ${styles.carousel__container}`} >
                                    {/* Card component */}
                                    <div className={`${styles.BlogCarousel_carousel__item__X2F2P} ${styles.BlogCarousel_items_3__STurY}`} >
                                        <div className={styles.BlogCard_blogCard__7OcFE}>
                                            <div className={`${styles.BlogCard_blogCardImage__vIK8k} ${styles.imageWrapper}`}>
                                                <div className={styles.BlogCard_category__kyHao}>expertises</div>
                                                <img alt="Manuport logistics" loading="lazy" width="424" height="290" decoding="async" data-nimg="1" className={`${styles.BlogCard_image__sKQlk} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`} style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw" srcSet="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w" src="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()" />
                                            </div>
                                            <div className={`${styles.BlogCard_textWrapper__DaUK1} ${styles.textWrapper}`}>
                                                <h6 className={styles.BlogCard_title__az94E}>Market situation – container flows – December '24</h6>
                                                <div className={styles.BlogCard_info__qswUS}>
                                                    <p>As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact.</p>
                                                </div>
                                                <div className={styles.BlogCard_articleMeta__cxC2L}>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                                    <path d="M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"></path>
                                                                    <path d="M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"></path>
                                                                </g>
                                                            </svg>
                                                        </i>
                                                        11/12/2024
                                                    </div>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path fill="currentColor" fillRule="evenodd" d="M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </i>
                                                        9 Min.
                                                    </div>
                                                </div>
                                            </div>
                                            <a className={styles.BlogCard_link__jtBXR} href="/blog/market-situation-container-flows-december-24"></a>
                                        </div>
                                    </div>

                                    <div className={`${styles.BlogCarousel_carousel__item__X2F2P} ${styles.BlogCarousel_items_3__STurY}`}>
                                        <div className={styles.BlogCard_blogCard__7OcFE}>
                                            <div className={`${styles.BlogCard_blogCardImage__vIK8k} ${styles.imageWrapper}`}>
                                                <div className={styles.BlogCard_category__kyHao}>expertises</div>
                                                <img alt="Manuport logistics" loading="lazy" width="424" height="290" decoding="async" data-nimg="1" className={`${styles.BlogCard_image__sKQlk} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`} style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw" srcSet="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w" src="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()" />
                                            </div>
                                            <div className={`${styles.BlogCard_textWrapper__DaUK1} ${styles.textWrapper}`}>
                                                <h6 className={styles.BlogCard_title__az94E}>Market situation – container flows – December '24</h6>
                                                <div className={styles.BlogCard_info__qswUS}>
                                                    <p>As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact.</p>
                                                </div>
                                                <div className={styles.BlogCard_articleMeta__cxC2L}>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                                    <path d="M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"></path>
                                                                    <path d="M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"></path>
                                                                </g>
                                                            </svg>
                                                        </i>
                                                        11/12/2024
                                                    </div>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path fill="currentColor" fillRule="evenodd" d="M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </i>
                                                        9 Min.
                                                    </div>
                                                </div>
                                            </div>
                                            <a className={styles.BlogCard_link__jtBXR} href="/blog/market-situation-container-flows-december-24"></a>
                                        </div>
                                    </div>

                                    <div className={`${styles.BlogCarousel_carousel__item__X2F2P} ${styles.BlogCarousel_items_3__STurY}`}>
                                        <div className={styles.BlogCard_blogCard__7OcFE}>
                                            <div className={`${styles.BlogCard_blogCardImage__vIK8k} ${styles.imageWrapper}`}>
                                                <div className={styles.BlogCard_category__kyHao}>expertises</div>
                                                <img alt="Manuport logistics" loading="lazy" width="424" height="290" decoding="async" data-nimg="1" className={`${styles.BlogCard_image__sKQlk} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`} style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw" srcSet="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w" src="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()" />
                                            </div>
                                            <div className={`${styles.BlogCard_textWrapper__DaUK1} ${styles.textWrapper}`}>
                                                <h6 className={styles.BlogCard_title__az94E}>Market situation – container flows – December '24</h6>
                                                <div className={styles.BlogCard_info__qswUS}>
                                                    <p>As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact.</p>
                                                </div>
                                                <div className={styles.BlogCard_articleMeta__cxC2L}>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                                    <path d="M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"></path>
                                                                    <path d="M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"></path>
                                                                </g>
                                                            </svg>
                                                        </i>
                                                        11/12/2024
                                                    </div>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path fill="currentColor" fillRule="evenodd" d="M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </i>
                                                        9 Min.
                                                    </div>
                                                </div>
                                            </div>
                                            <a className={styles.BlogCard_link__jtBXR} href="/blog/market-situation-container-flows-december-24"></a>
                                        </div>
                                    </div>

                                    <div className={`${styles.BlogCarousel_carousel__item__X2F2P} ${styles.BlogCarousel_items_3__STurY}`}>
                                        <div className={styles.BlogCard_blogCard__7OcFE}>
                                            <div className={`${styles.BlogCard_blogCardImage__vIK8k} ${styles.imageWrapper}`}>
                                                <div className={styles.BlogCard_category__kyHao}>expertises</div>
                                                <img alt="Manuport logistics" loading="lazy" width="424" height="290" decoding="async" data-nimg="1" className={`${styles.BlogCard_image__sKQlk} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`} style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw" srcSet="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w" src="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()" />
                                            </div>
                                            <div className={`${styles.BlogCard_textWrapper__DaUK1} ${styles.textWrapper}`}>
                                                <h6 className={styles.BlogCard_title__az94E}>Market situation – container flows – December '24</h6>
                                                <div className={styles.BlogCard_info__qswUS}>
                                                    <p>As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact.</p>
                                                </div>
                                                <div className={styles.BlogCard_articleMeta__cxC2L}>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                                    <path d="M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"></path>
                                                                    <path d="M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"></path>
                                                                </g>
                                                            </svg>
                                                        </i>
                                                        11/12/2024
                                                    </div>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path fill="currentColor" fillRule="evenodd" d="M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </i>
                                                        9 Min.
                                                    </div>
                                                </div>
                                            </div>
                                            <a className={styles.BlogCard_link__jtBXR} href="/blog/market-situation-container-flows-december-24"></a>
                                        </div>
                                    </div>

                                    <div className={`${styles.BlogCarousel_carousel__item__X2F2P} ${styles.BlogCarousel_items_3__STurY}`}>
                                        <div className={styles.BlogCard_blogCard__7OcFE}>
                                            <div className={`${styles.BlogCard_blogCardImage__vIK8k} ${styles.imageWrapper}`}>
                                                <div className={styles.BlogCard_category__kyHao}>expertises</div>
                                                <img alt="Manuport logistics" loading="lazy" width="424" height="290" decoding="async" data-nimg="1" className={`${styles.BlogCard_image__sKQlk} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`} style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw" srcSet="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w" src="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()" />
                                            </div>
                                            <div className={`${styles.BlogCard_textWrapper__DaUK1} ${styles.textWrapper}`}>
                                                <h6 className={styles.BlogCard_title__az94E}>Market situation – container flows – December '24</h6>
                                                <div className={styles.BlogCard_info__qswUS}>
                                                    <p>As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact.</p>
                                                </div>
                                                <div className={styles.BlogCard_articleMeta__cxC2L}>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                                    <path d="M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"></path>
                                                                    <path d="M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"></path>
                                                                </g>
                                                            </svg>
                                                        </i>
                                                        11/12/2024
                                                    </div>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path fill="currentColor" fillRule="evenodd" d="M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </i>
                                                        9 Min.
                                                    </div>
                                                </div>
                                            </div>
                                            <a className={styles.BlogCard_link__jtBXR} href="/blog/market-situation-container-flows-december-24"></a>
                                        </div>
                                    </div>

                                    <div className={`${styles.BlogCarousel_carousel__item__X2F2P} ${styles.BlogCarousel_items_3__STurY}`}>
                                        <div className={styles.BlogCard_blogCard__7OcFE}>
                                            <div className={`${styles.BlogCard_blogCardImage__vIK8k} ${styles.imageWrapper}`}>
                                                <div className={styles.BlogCard_category__kyHao}>expertises</div>
                                                <img alt="Manuport logistics" loading="lazy" width="424" height="290" decoding="async" data-nimg="1" className={`${styles.BlogCard_image__sKQlk} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`} style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw" srcSet="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w" src="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()" />
                                            </div>
                                            <div className={`${styles.BlogCard_textWrapper__DaUK1} ${styles.textWrapper}`}>
                                                <h6 className={styles.BlogCard_title__az94E}>Market situation – container flows – December '24</h6>
                                                <div className={styles.BlogCard_info__qswUS}>
                                                    <p>As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact.</p>
                                                </div>
                                                <div className={styles.BlogCard_articleMeta__cxC2L}>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                                    <path d="M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"></path>
                                                                    <path d="M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"></path>
                                                                </g>
                                                            </svg>
                                                        </i>
                                                        11/12/2024
                                                    </div>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path fill="currentColor" fillRule="evenodd" d="M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </i>
                                                        9 Min.
                                                    </div>
                                                </div>
                                            </div>
                                            <a className={styles.BlogCard_link__jtBXR} href="/blog/market-situation-container-flows-december-24"></a>
                                        </div>
                                    </div>
                                    <div className={`${styles.BlogCarousel_carousel__item__X2F2P} ${styles.BlogCarousel_items_3__STurY}`}>
                                        <div className={styles.BlogCard_blogCard__7OcFE}>
                                            <div className={`${styles.BlogCard_blogCardImage__vIK8k} ${styles.imageWrapper}`}>
                                                <div className={styles.BlogCard_category__kyHao}>expertises</div>
                                                <img alt="Manuport logistics" loading="lazy" width="424" height="290" decoding="async" data-nimg="1" className={`${styles.BlogCard_image__sKQlk} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`} style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw" srcSet="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w" src="https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()" />
                                            </div>
                                            <div className={`${styles.BlogCard_textWrapper__DaUK1} ${styles.textWrapper}`}>
                                                <h6 className={styles.BlogCard_title__az94E}>Market situation – container flows – December '24</h6>
                                                <div className={styles.BlogCard_info__qswUS}>
                                                    <p>As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact.</p>
                                                </div>
                                                <div className={styles.BlogCard_articleMeta__cxC2L}>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                                    <path d="M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"></path>
                                                                    <path d="M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"></path>
                                                                </g>
                                                            </svg>
                                                        </i>
                                                        11/12/2024
                                                    </div>
                                                    <div className={styles.BlogCard_meta__kiRaW}>
                                                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.BlogCard_icon___0PpG}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path fill="currentColor" fillRule="evenodd" d="M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z" clipRule="evenodd"></path>
                                                                <path fill="currentColor" fillRule="evenodd" d="M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </i>
                                                        9 Min.
                                                    </div>
                                                </div>
                                            </div>
                                            <a className={styles.BlogCard_link__jtBXR} href="/blog/market-situation-container-flows-december-24"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.BlogCarousel_dotWrapper__jjI04}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;

