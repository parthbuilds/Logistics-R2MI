import React from 'react';
import styles from './serviceCard.module.css';

const ServiceCardsBlock = () => {
    const cardsData = [
        {
            image: "https://a.storyblok.com/f/240783/1200x900/b5fd7a54df/whatiscontainerstuffing.jpg/m/1024x560/filters:quality(95):focal(702x514:703x515)",
            title: "Container Loading & Unloading Services",
            description: "We provide dedicated warehouses for product stuffing. As an independent entity, we leverage our flexibility to secure competitive agreements with warehouse providers.",
        },
        {
            image: "https://a.storyblok.com/f/240783/7952x5304/1f4b2a3efd/_dsc0836.JPG/m/1720x941/filters:quality(95):focal()",
            title: "Vessel Cargo Handling",
            description: "Partnering with our sister companies and terminal handling experts, we efficiently coordinate vessel loading and unloading operations.",
        },

        {
            image: "https://a.storyblok.com/f/240783/848x464/1e09c51f93/onboarding-services.jpg/m/1024x560/filters:quality(95):focal(311x431:312x432)",
            title: "Surveys",
            description: "Our in-house and third-party experts ensure you stay informed at all times about the quality of your supplies and outgoing shipments.",
            link: "/services/promar-agencies",
            buttonLabel: "More info"
        },
        {
            image: "https://a.storyblok.com/f/240783/6720x4480/38dde63717/9n8a5770.jpeg/m/1024x560/filters:quality(95):focal()",
            title: "Insurance",
            description: "Upon request, we can arrange cargo insurance for our customers.",
        },
        {
            image: "https://a.storyblok.com/f/240783/7952x5304/397bc712b9/_dsc0671.JPG/m/1024x560/filters:quality(95):focal(4501x1716:4502x1717)",
            title: "Time-Critical Services ",
            description: "RTX provides time-sensitive delivery solutions for aerospace/AOG and other critical industries, including on-board courier and hand-carry services when needed.",

        },
    ];

    const renderIcon = (icon) => {
        // Check if icon is a string (SVG code) or a React component
        if (typeof icon === 'string') {
            return <i className={styles.Icon_icon___Kgo7 + " " + styles.icon + " " + styles.ServiceCardsBlock_icon__PArdM} dangerouslySetInnerHTML={{ __html: icon }} />;
        } else if (React.isValidElement(icon)) {
            return <i className={styles.Icon_icon___Kgo7 + " " + styles.icon + " " + styles.ServiceCardsBlock_icon__PArdM}>{icon}</i>;
        }
        return null; // Return null if the icon is not valid
    };


    return (
        <section className={styles.ServiceCardsBlock_section___t5l5}>
            <div className={styles.ServiceCardsBlock_container__D9nuX}>
                <div className={styles.ServiceCardsBlock_textWrapper__WOelU}>
                    <h2 className={styles.ServiceCardsBlock_title__ajGTv}>
                        <span className={styles.TextAnimation_text__sTrzf}></span>
                    </h2>
                </div>
                <div className={styles.ServiceCardsBlock_cardWrapper__rb7HF}>
                    {cardsData.map((card, index) => (
                        <div key={index} className={styles.ServiceCardsBlock_card__fjCz2}>
                            <div className={styles.ServiceCardsBlock_imageWrapper__loj0j}>
                                <img
                                    alt={card.title}
                                    loading="lazy"
                                    width="424"
                                    height="232"
                                    decoding="async"
                                    data-nimg="1"
                                    className={`${styles.ServiceCardsBlock_image__Q_8bH} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`}
                                    style={{ color: 'transparent' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"
                                    src={card.image}
                                />
                            </div>
                            <div className={styles.ServiceCardsBlock_cardtextWrapper__Wp_g_}>
                                <div className={styles.ServiceCardsBlock_iconWrapper__qHFqZ}>
                                    {renderIcon(card.icon)}
                                </div>
                                <h6 className={styles.ServiceCardsBlock_cardtitle__nQ_eN}>{card.title}</h6>
                                <div>
                                    <p style={{color: 'black'}} className={styles.ServiceCard_paragraph} dangerouslySetInnerHTML={{ __html: card.description }} />
                                </div>
                                {card.link && ( 
                                    <a href={card.link} className={styles.ServiceCardsBlock_link__SkUh1}>
                                        {card.buttonLabel && (
                                            <button type="button" className={`${styles.button} ${styles.tertiary} ${styles.Button_button__T6zT9} ${styles.Button_tertiary__JUfBS} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE} ${styles.ServiceCardsBlock_button__ER3q6}`} aria-label="More info">
                                                <span className={styles.Button_titleWrapper__Glw9g}>{card.buttonLabel}</span>
                                                <div className={styles.Button_icon__Rt_Hz + " " + styles.iconwrapper}>
                                                    <i className={styles.Icon_icon___Kgo7 + " " + styles.icon} dangerouslySetInnerHTML={{ __html: /* Your SVG icon code here */ "" }} />
                                                </div>
                                            </button>
                                        )}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCardsBlock;