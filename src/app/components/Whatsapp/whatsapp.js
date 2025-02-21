import React from "react";
import styles from "./whatsapp.module.css";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your phone number
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