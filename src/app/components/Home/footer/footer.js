import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
    const email = 'parthpandey033@gmail.com';
    const telephone = '+91 800232370';
    return (
        <footer className={`${styles.Footer_footer__EQXzy} ${styles.footer}`}>
            <div className={styles.Footer_footerTop__XBqF3}>
                {/* <a className={styles.Footer_logoWrapper__P93m7} href="/">
                    <img className={styles.Footer_logo} src='/images/RTX Logo white.svg' style={{ width: '200px', height: '80px' }} />
                </a> */}
                <a className={styles.Footer_logoWrapper__P93m7} href="/">
                    <div className={styles.flipContainer}>
                        <img className={`${styles.logoImage} ${styles.front}`} src='/images/RouteToMarket Media India Pvt Ltd2.png' alt='r2mi logo' />
                        <img className={`${styles.logoImage} ${styles.back}`} src='/images/RTX Logo white.svg' alt='rtx logo' />
                    </div>
                </a>

                <div className={styles.Footer_navWrapper__xWSoa}>
                    <a className={styles.Footer_navItem__DCCez} href="/">Home</a>
                    <a className={styles.Footer_navItem__DCCez} href="/About">About</a>
                    <a className={styles.Footer_navItem__DCCez} href="/Services">Services</a>
                    {/* <a className={styles.Footer_navItem__DCCez} href="/Careers">Careers</a> */}
                    <a className={styles.Footer_navItem__DCCez} href="/Contact">Contact</a>
                </div>
                <div className={styles.ContactForm_formItem__pxEdr}>
                    <label htmlFor="businessmail" className={styles.ContactForm_label__xyhWw}>Your business mail*</label>
                    <input id="businessmail" className={styles.ContactForm_input__JLtth} type="email" />
                    <span className={styles.ContactForm_formItem__tooltip__S6IwZ}>Make sure to use your business mail</span>
                </div>
            </div>
            <div className={styles.Footer_socials__9ZNZ_}>

                <div className={styles.Footer_socialLinks__zyHKp}>

                    <a href="https://www.facebook.com">
                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.Footer_socialIcon__bQEbt}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.13 7.75h-4.26V5.84a1.001 1.001 0 0 1 1-1.1h3v-4h-4.33c-3.93 0-4.67 3-4.67 4.86v2.15h-3v4h3v11.5h5v-11.5h3.85l.41-4Z"></path>
                            </svg>

                        </i>
                    </a>
                    <a href="https://www.linkedin.com/company/">
                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.Footer_socialIcon__bQEbt}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5.67 22.63H.81V8.7h4.86v13.93Zm10.09-9.39a2.14 2.14 0 0 0-2.14 2.14v7.25H8.51V8.7h5.11v1.59a6.76 6.76 0 0 1 4.28-1.6c3.17 0 5.37 2.35 5.37 6.81v7.13H17.9v-7.25a2.14 2.14 0 0 0-2.14-2.15v.01Zm-10-9.36a2.5 2.5 0 1 1-2.5-2.5 2.5 2.5 0 0 1 2.48 2.5h.02Z"></path>
                            </svg>

                        </i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.Footer_socialIcon__bQEbt}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M5.812 1.35A4.464 4.464 0 0 0 1.348 5.81v11.904a4.464 4.464 0 0 0 4.464 4.464h11.904a4.464 4.464 0 0 0 4.462-4.464V5.811a4.464 4.464 0 0 0-4.462-4.462H5.812ZM19 5.817a1.286 1.286 0 1 1-2.572 0 1.286 1.286 0 0 1 2.572 0Zm-7.235 2.38a3.566 3.566 0 1 0 0 7.131 3.566 3.566 0 0 0 0-7.131Zm-5.281 3.565a5.28 5.28 0 1 1 10.56 0 5.28 5.28 0 0 1-10.56 0Z" clipRule="evenodd"></path>
                            </svg>

                        </i>
                    </a>
                    <a href="https://www.twitter.com/">
                        <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.Footer_socialIcon__bQEbt}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0,0,256,256">
                                <g fill="currentColor" fillRule="evenodd" stroke="none" strokeWidth="3" ><path d="M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z"></path></g>
                            </svg>
                        </i>
                    </a>
                </div>
                <div className={styles.Footer_privacyTerms__sz4zC}>
                    <a href="/conditions-disclaimer">Conditions &amp; Disclaimer </a>
                    | <a href="/privacy-statement">Privacy Statement</a>
                </div>
                <div className={styles.ContactForm_info}>
                    <p>
                        <a href={`tel:${telephone}`} className={styles.info}>Call Us: +91 800232370</a>
                        <br />
                        <a href={`mailto:${email}`} className={styles.info}>Email : support@rtx.com</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
