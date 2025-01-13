"use client";
import { useState } from "react";
import styles from "./OtherWork.module.css"; // Import the CSS Module

const OtherWork = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className={styles.otherWorkContainer}>
      <button onClick={toggleContent} className={styles.collapsible}>
        <h1 className={styles.otherWorkTitle}>other work&#8595</h1>
      </button>
      {showContent && (
        <div className={styles.content}>
          <div className={styles.otherWork}>
            <a href="https://example.com/" target="_blank">
              <div className={styles.work}>
                <h2>other work 1</h2>
              </div>
            </a>
            <a href="https://example.com/" target="_blank">
              <div className={styles.work}>
                <h2>other work 2</h2>
              </div>
            </a>
            <a href="https://example.com/" target="_blank">
              <div className={styles.work}>
                <h2>other work 3</h2>
              </div>
            </a>
            <a href="https://example.com/" target="_blank">
              <div className={`${styles.work} ${styles.last}`}>
                <h2>other work 4</h2>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherWork;
