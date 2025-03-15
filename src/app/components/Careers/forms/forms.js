'use client';
import React, { useState } from 'react';
import styles from './forms.module.css';

const Form = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: '',
        resume: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 5000000) { // 5MB limit
            setError('File size must be less than 5MB');
            return;
        }
        setFormData(prev => ({ ...prev, resume: file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();
            
            if (response.ok) {
                alert('Form submitted successfully!');
                // Reset form
                setFormData({
                    fullname: '',
                    email: '',
                    phone: '',
                    message: '',
                    resume: null
                });
            } else {
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (err) {
            setError(err.message || 'An error occurred while submitting the form');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.ContactForm_section__enWFi}>
            <div className={styles.ContactForm_container__IPrwv}>
                <div className={styles.ContactForm_textWrapper__zhxhW}>
                    <h3 className={styles.ContactForm_title__8EQzh}>Join the R2X Team</h3>
                    <div className={styles.ContactForm_info__Iv_mD}>
                        <p>Apply now to be part of our innovative journey.<br/>Fill out the form and explore exciting career opportunities with R2X!</p>
                    </div>
                </div>

                {error && <div className={styles.error}>{error}</div>}

                <form className={styles.ContactForm_form__eNij0} onSubmit={handleSubmit}>
                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="fullname" className={styles.ContactForm_label__xyhWw}>Full name*</label>
                            <input 
                                id="fullname" 
                                name="fullname" 
                                required 
                                placeholder="Your full name" 
                                className={styles.ContactForm_input__JLtth} 
                                type="text" 
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="email" className={styles.ContactForm_label__xyhWw}>Your email*</label>
                            <input 
                                id="email" 
                                name="email" 
                                required 
                                placeholder="Email" 
                                className={styles.ContactForm_input__JLtth} 
                                type="email" 
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="phone" className={styles.ContactForm_label__xyhWw}>Phone number</label>
                            <input 
                                id="phone" 
                                name="phone" 
                                placeholder="Phone number" 
                                className={styles.ContactForm_input__JLtth} 
                                type="tel" 
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="message" className={styles.ContactForm_label__xyhWw}>Your message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                className={styles.ContactForm_textarea__jyvij} 
                                placeholder="Message..." 
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <label htmlFor="resume" className={styles.ContactForm_label__xyhWw}>Upload Resume</label>
                            <input 
                                id="resume" 
                                name="resume" 
                                className={styles.ContactForm_input__JLtth} 
                                type="file" 
                                accept=".pdf,.doc,.docx" 
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>

                    <div className={styles.ContactForm_formRow__tPm9Z}>
                        <div className={styles.ContactForm_formItem__pxEdr}>
                            <div className={styles.ContactForm_checkboxWrapper__aSMyg}>
                                <input 
                                    className={styles.ContactForm_checkbox___UKEv} 
                                    required 
                                    type="checkbox" 
                                    name="checkbox"
                                />
                                I acknowledge that I have read the <a href="#">privacy policy</a>.
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`${styles.button} ${styles.primary} ${styles.Button_button__T6zT9} ${styles.Button_primary__b__QL} ${styles.Button_goldLight__ZvTNn} ${styles.Button_iconButton__fsKFn} ${styles.Button_back___SPoE}`} 
                        aria-label="Submit"
                    >
                        <span className={styles.Button_titleWrapper__Glw9g}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </span>
                        <div className={`${styles.Button_icon__Rt_Hz} ${styles.Button_back___SPoE} ${styles.iconwrapper}`}>
                            <i className={`${styles.Icon_icon___Kgo7} ${styles.icon}`}>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        fill="currentColor" 
                                        d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" 
                                    />
                                    <path 
                                        fill="currentColor" 
                                        d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" 
                                    />
                                </svg>
                            </i>
                        </div>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Form;