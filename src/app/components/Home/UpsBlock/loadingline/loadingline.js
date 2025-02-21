import React from "react";
import styles from "./loadingline.module.css";

export default function LoadingLine ({ isLoading, duration = 10000 }) {
    return (
        <div className={styles.loadingContainer}>
            <div
                className={styles.loadingLine}
                style={{
                    animation: isLoading ? `${styles.loadLine} ${duration / 1000}s linear forwards` : "none",
                }}
            ></div>
        </div>
    );
};