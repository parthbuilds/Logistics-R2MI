import React from 'react';
import styles from './serviceCard.module.css';

const ServiceCardsBlock = () => {
    const cardsData = [
        {
            image: "https://a.storyblok.com/f/240783/1200x900/b5fd7a54df/whatiscontainerstuffing.jpg/m/1024x560/filters:quality(95):focal(702x514:703x515)",
            title: "Container Loading & Unloading Services",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
            description: "We provide dedicated warehouses for product stuffing. As an independent entity, we leverage our flexibility to secure competitive agreements with warehouse providers.",
        },
        {
            image: "https://a.storyblok.com/f/240783/7952x5304/1f4b2a3efd/_dsc0836.JPG/m/1720x941/filters:quality(95):focal()",
            title: "Vessel Cargo Handling",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-9-4z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22" x2="12" y2="12" /></svg>,
            description: "Partnering with our sister companies and terminal handling experts, we efficiently coordinate vessel loading and unloading operations.",
        },

        {
            image: "https://a.storyblok.com/f/240783/848x464/1e09c51f93/onboarding-services.jpg/m/1024x560/filters:quality(95):focal(311x431:312x432)",
            title: "Surveys",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.4 1.4 0 0 0 .6 2.4c.5 1.1 2.1 1.1 2.6 0a1.4 1.4 0 0 0 .6-2.4 12 12 0 0 0-20 0 1.4 1.4 0 0 0 .6 2.4c.5 1.1 2.1 1.1 2.6 0a1.4 1.4 0 0 0 .6-2.4" /></svg>,
            description: "Our in-house and third-party experts ensure you stay informed at all times about the quality of your supplies and outgoing shipments.",
        },
        {
            image: "https://a.storyblok.com/f/240783/6720x4480/38dde63717/9n8a5770.jpeg/m/1024x560/filters:quality(95):focal()",
            title: "Insurance",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
            description: "Upon request, we can arrange cargo insurance for our customers.",
        },
        {
            image: "https://a.storyblok.com/f/240783/7952x5304/397bc712b9/_dsc0671.JPG/m/1024x560/filters:quality(95):focal(4501x1716:4502x1717)",
            title: "Time-Critical Services ",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
            description: "RTX provides time-sensitive delivery solutions for aerospace/AOG and other critical industries, including on-board courier and hand-carry services when needed.",

        },
    ];

    const renderIcon = (icon) => {
        if (React.isValidElement(icon)) {
            return <i className={styles.Icon_icon___Kgo7 + " " + styles.icon + " " + styles.ServiceCardsBlock_icon__PArdM}>{icon}</i>;
        }
        return null;
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCardsBlock;