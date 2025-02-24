import React from "react";
import styles from "./whatsapp.module.css";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/7019859689" 
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