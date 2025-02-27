import React from "react";
import styles from "./whatsapp.module.css";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/7019859689?text=Hi%20there!%20I%20came%20across%20your%20website%20and%20would%20love%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappIcon}
      title="Chat with us on WhatsApp"
    >

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className={styles.whatsappImage}
      />
    </a>
  );
};

export default WhatsAppIcon;