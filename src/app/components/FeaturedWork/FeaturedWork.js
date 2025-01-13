"use client";
import { useState } from "react";
import styles from "./FeaturedWork.module.css"; // Import the CSS Module

const FeaturedWork = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className={styles.otherWorkContainer}>
      <button onClick={toggleContent} className={styles.collapsible}>
        <h1 className={styles.otherWorkTitle}>FEATURED WORK</h1>
      </button>
    </div>
  );
};

export default FeaturedWork;
