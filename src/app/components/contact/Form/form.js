import React from 'react'
import styles from './form.module.css'

const Form = () => {
    return (
        <section className={styles.ContactForm_section__enWFi}>
            <div className={styles.ContactForm_container__IPrwv}>
                <div className={styles.ContactForm_textWrapper__zhxhW} style={{ transform: 'translateY(9.8397px) translateZ(0px)' }}>
                    <h3 className={styles.ContactForm_title__8EQzh}>Get local advice for your global request.</h3>
                    <div className={styles.ContactForm_info__Iv_mD}>
                        <p>
                            Let’s talk! Our team is always ready to speak to you. Find contact details for your nearest office on the
                            <a target="_self" aria-label="/about" href="/about"> locations page.</a>
                            <br />
                            We do our best to answer within 24 hours.
                        </p>
                    </div>
                </div>

                <form className={styles.ContactForm_form__eNij0} method="POST">
                    <input type="hidden" value="AAgYlMS+N7PPpsdrehM+1eSP+cOq+0MHqHtmkXX8" name="csrfToken" />

                    <div className={styles.ContactForm_formRow__tPm9Z} />

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="firstName" className={styles.ContactForm_label__xyhWw}>First name*</label>
                            <input id="firstName" required placeholder="Your first name" className={styles.ContactForm_input__JLtth} type="text" />
                        </div>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="lastName" className={styles.ContactForm_label__xyhWw}>Last name*</label>
                            <input id="lastName" required placeholder="Your last name" className={styles.ContactForm_input__JLtth} type="text" />
                        </div>
                    </div>

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="companyname" className={styles.ContactForm_label__xyhWw}>Company name*</label>
                            <input id="companyname" required placeholder="Company name" className={styles.ContactForm_input__JLtth} type="text" />
                        </div>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="businessmail" className={styles.ContactForm_label__xyhWw}>Your business mail*</label>
                            <input id="businessmail" required placeholder="Business mail" className={styles.ContactForm_input__JLtth} type="email" />
                            <span className={styles.ContactForm_formItem__tooltip__S6IwZ}>Make sure to use your business mail</span>
                        </div>
                    </div>

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="phone" className={styles.ContactForm_label__xyhWw}>Phone number</label>
                            <input id="phone" placeholder="Phone number" className={styles.ContactForm_input__JLtth} type="tel" />
                        </div>
                    </div>

                    <div className={`${styles.ContactForm_formRow__tPm9Z} ${styles.ContactForm_front__2A1lz}`}>
                        <div className={styles.ContactForm_formItem__pxEdr} data-lenis-prevent="true">
                            <label htmlFor="Location" className={styles.ContactForm_label__xyhWw}>Location*</label>
                            <input required placeholder="Select a location" className={styles.ContactForm_input__JLtth} type="text" />
                        </div>
                    </div>

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="message" className={styles.ContactForm_label__xyhWw}>Your message</label>
                            <textarea id="message" required className={styles.ContactForm_textarea__jyvij} placeholder="Message..."></textarea>
                        </div>
                    </div>

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <div className={styles.ContactForm_checkboxWrapper__aSMyg}>
                                <input className={styles.ContactForm_checkbox___UKEv} required type="checkbox" name="checkbox" />
                                I acknowledge that I have read the <a href="#">privacy policy</a>.
                            </div>
                        </div>
                    </div>

                    <button type="submit" className={`${styles.button} ${styles.primary} ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_goldLight__ZvTNn} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE}`} aria-label="Submit">
                        <span className={styles.Button_titleWrapper__Glw9g}>Submit</span>
                        <div className={`${styles.Button_icon__Rt_Hz} ${styles.Button_back___SPoE} ${styles.iconwrapper}`}>
                            <i className={`${styles.Icon_icon___Kgo7} ${styles.icon}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                                    <path fill="currentColor" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path>
                                </svg>
                            </i>
                        </div>
                    </button>
                </form>
            </div>
        </section>

    )
}

export default Form
