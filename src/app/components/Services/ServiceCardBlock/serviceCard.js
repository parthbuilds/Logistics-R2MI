import React from 'react';
import styles from './serviceCard.module.css';

const ServiceCardsBlock = () => {
    const cardsData = [
        {
            image: "https://a.storyblok.com/f/240783/1200x900/b5fd7a54df/whatiscontainerstuffing.jpg/m/1720x941/filters:quality(95):focal(702x514:703x515)",
            title: "Stuffing & Stripping of Containers",
            description: "We offer dedicated warehouses for stuffing products. As an independent party, we have the advantage of arranging competitive deals with warehouse providers.",
        },
        {
            image: "https://a.storyblok.com/f/240783/7952x5304/1f4b2a3efd/_dsc0836.JPG/m/1720x941/filters:quality(95):focal()",
            title: "Loading & Unloading of Vessels",
            description: "Through our sister company <a href=\"https://www.euroports.com/\" target=\"_self\" aria-label=\"https://www.euroports.com/\">Euroports</a> and other terminal handling companies, we can organize the loading and unloading of vessels.",

        },

        {
            image: "https://a.storyblok.com/f/240783/2048x1536/e7de1825c6/dsc01185.png/m/1720x941/filters:quality(95):focal()",
            title: "Promar Agencies",
            description: "Promar Agencies Belgium NV is a trusted ship agency service provider with a strong commitment to excellence and reliability. Our focus is on providing customized services and creating competitive advantages for shipowners, operators, and charterers. With extensive experience in dry bulk, conventional cargoes, tanker operations, and husbandry matters, we offer efficient and reliable support to our esteemed principals and their vessels.",
            link: "/services/promar-agencies",
            buttonLabel: "More info"
        },
        {
            image: "https://a.storyblok.com/f/240783/1200x900/b5fd7a54df/whatiscontainerstuffing.jpg/m/1720x941/filters:quality(95):focal(702x514:703x515)",
            title: "Stuffing & Stripping of Containers",
            description: "We offer dedicated warehouses for stuffing products. As an independent party, we have the advantage of arranging competitive deals with warehouse providers.",
        },
        {
            image: "https://a.storyblok.com/f/240783/7952x5304/1f4b2a3efd/_dsc0836.JPG/m/1720x941/filters:quality(95):focal()",
            title: "Loading & Unloading of Vessels",
            description: "Through our sister company <a href=\"https://www.euroports.com/\" target=\"_self\" aria-label=\"https://www.euroports.com/\">Euroports</a> and other terminal handling companies, we can organize the loading and unloading of vessels.",

        },

        {
            image: "https://a.storyblok.com/f/240783/2048x1536/e7de1825c6/dsc01185.png/m/1720x941/filters:quality(95):focal()",
            title: "Promar Agencies",
            description: "Promar Agencies Belgium NV is a trusted ship agency service provider with a strong commitment to excellence and reliability. Our focus is on providing customized services and creating competitive advantages for shipowners, operators, and charterers. With extensive experience in dry bulk, conventional cargoes, tanker operations, and husbandry matters, we offer efficient and reliable support to our esteemed principals and their vessels.",
            link: "/services/promar-agencies",
            buttonLabel: "More info"
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
                                    alt={card.title} // Use the title as the alt text
                                    loading="lazy"
                                    width="424"
                                    height="232"
                                    decoding="async"
                                    data-nimg="1"
                                    className={`${styles.ServiceCardsBlock_image__Q_8bH} ${styles.Image_storyblok_image__oDocz} ${styles.Image_is_loaded__RCqPL}`}
                                    style={{ color: 'transparent' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"
                                    srcSet={/* ... your srcSet values */""}
                                    src={card.image}
                                />
                            </div>
                            <div className={styles.ServiceCardsBlock_cardtextWrapper__Wp_g_}>
                                <div className={styles.ServiceCardsBlock_iconWrapper__qHFqZ}>
                                    {renderIcon(card.icon)}
                                </div>
                                <h6 className={styles.ServiceCardsBlock_cardtitle__nQ_eN}>{card.title}</h6>
                                <div>
                                    <p dangerouslySetInnerHTML={{ __html: card.description }} /> {/* Allow HTML in descriptions */}
                                </div>
                                {card.link && ( // Conditionally render the link and button
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