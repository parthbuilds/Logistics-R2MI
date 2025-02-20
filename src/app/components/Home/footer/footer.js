import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.Footer_footer__EQXzy} ${styles.footer}`}>
            <div className={styles.Footer_footerTop__XBqF3}>
                <a className={styles.Footer_logoWrapper__P93m7} href="/">
                    <img className={styles.Footer_logo} src='/images/RTX Logo white.svg' style={{ width: '200px', height: '80px' }} />
                </a>
                <div className={styles.Footer_navWrapper__xWSoa}>
                    <a className={styles.Footer_navItem__DCCez} href="/home">Home</a>
                    <a className={styles.Footer_navItem__DCCez} href="/About">About</a>
                    <a className={styles.Footer_navItem__DCCez} href="/Services">Services</a>
                    <a className={styles.Footer_navItem__DCCez} href="/Careers">Careers</a>
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
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M10.19 8.937v4.122a3.588 3.588 0 0 0-4.5 3.324 3.244 3.244 0 0 0 3.468 3.45 3.233 3.233 0 0 0 3.466-3.489V0h4.079c.694 4.314 2.85 5.316 5.74 5.778v4.134a12.285 12.285 0 0 1-5.625-1.899v8.167c-.003 3.695-2.193 7.82-7.63 7.82a7.665 7.665 0 0 1-7.628-7.858 7.515 7.515 0 0 1 8.63-7.205Z"></path>
                    </svg> */}

                        </i>
                    </a>
                </div>
                <div className={styles.Footer_privacyTerms__sz4zC}>
                    <a href="/conditions-disclaimer">Conditions &amp; Disclaimer </a>
                    | <a href="/privacy-statement">Privacy Statement</a>
                </div>
                {/* <a href="/" target="_blank" className={styles.MadeBy_wrapper__hnst} aria-label="Born Digital">
            <span className={styles.MadeBy_text__cbSBi}>Made by</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 20">
                <g fill="currentColor" clipPath="url(#BDLogo_svg__a)">
                    <path d="M21.77 8.26c-.784 0-1.5-.18-2.15-.516-.65-.359-1.164-.83-1.545-1.459a4.085 4.085 0 0 1-.582-2.155c0-.808.202-1.526.582-2.155A3.869 3.869 0 0 1 19.62.516 4.605 4.605 0 0 1 21.77 0c.783 0 1.477.18 2.126.516a3.87 3.87 0 0 1 1.544 1.46c.38.628.56 1.346.56 2.154 0 .808-.18 1.527-.56 2.155a3.87 3.87 0 0 1-1.544 1.46 4.58 4.58 0 0 1-2.127.515Zm-.046-.875c.627 0 1.187-.135 1.68-.404.492-.27.895-.651 1.186-1.145.29-.494.425-1.055.425-1.706 0-.628-.134-1.212-.425-1.706a2.918 2.918 0 0 0-1.187-1.145c-.492-.269-1.052-.404-1.679-.404-.626 0-1.164.135-1.679.404-.492.27-.895.651-1.186 1.145-.291.494-.425 1.055-.425 1.706 0 .629.134 1.19.425 1.684.29.494.671.875 1.164 1.144.515.292 1.075.427 1.701.427ZM20.27 6.128V2.11h1.59c.649 0 1.164.18 1.5.539.335.359.514.853.514 1.481 0 .651-.179 1.145-.537 1.482-.358.336-.85.516-1.477.516h-1.59Zm1.03-.449-.492-.494h1.03c.313 0 .559-.09.716-.292.156-.202.246-.449.246-.785 0-.36-.09-.629-.269-.808-.179-.18-.403-.27-.716-.27h-1.03l.493-.494V5.68h.022ZM.167 20V0H9.21c1.164 0 2.193.224 3.089.673.895.45 1.612 1.078 2.104 1.863.493.786.739 1.706.739 2.717 0 1.077-.269 2.02-.828 2.828-.56.808-1.299 1.392-2.284 1.773 1.075.314 1.925.898 2.552 1.729.605.852.918 1.863.918 3.052 0 1.1-.269 2.065-.806 2.873-.537.809-1.276 1.415-2.26 1.841-.963.427-2.105.629-3.381.629H.167V20ZM7.912 8.26c.85 0 1.545-.202 2.015-.628.492-.427.739-1.01.739-1.773-.023-.719-.269-1.28-.74-1.684-.47-.404-1.118-.628-1.947-.628H4.442V8.26h3.47Zm.358 8.193c.896 0 1.59-.224 2.06-.65.47-.427.716-1.033.716-1.774 0-.763-.246-1.347-.739-1.773-.492-.427-1.164-.629-2.014-.629h-3.85v4.826H8.27Z"></path>
                </g>
                <defs>
                    <clipPath id="BDLogo_svg__a">
                        <path fill="#fff" d="M.167 0H26v20H.167z"></path>
                    </clipPath>
                </defs>
            </svg>
        </a> */}
            </div>
        </footer>
    )
}

export default Footer
