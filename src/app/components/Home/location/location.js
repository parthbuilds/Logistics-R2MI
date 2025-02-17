import React from 'react'
import styles from './location.module.css'


const Location = () => {
    const focus = 'center'
    return (
        <section className={styles.LocationBlock_section__FpKpI}>
            <div className={styles.LocationBlock_container__W_TQR}>
                <div className={styles.LocationBlock_content__4vYYD}>
                    <p className={styles.LocationBlock_title__OoA2u}>Our Locations</p>
                    <div className={styles.LocationBlock_info__PEoID}>
                        <p>
                            Our teams around the world are dedicated to meeting your logistics needs. With a strong network and global affiliations, we leverage our group assets to enhance our solutions, offering financial stability and flexibility for your benefit. Explore the world to see <a href="https://www.euroports.com/" target="_self" aria-label="https://www.euroports.com/">how we can support you.</a>
                        </p>
                    </div>
                    <div className={styles.LocationBlock_buttonWrapper__t95EU}>
                        <a className={`${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_goldLight__ZvTNn} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE}`} aria-label="All Locations" href="/about">
                            <span className={styles.Button_titleWrapper__Glw9g}>All Locations</span>
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
        </section>
    )
}

export default Location
