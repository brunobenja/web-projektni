"use client";

import Image from "next/image";
import styles from "./Introduction.module.css"; // Import the CSS Module
import { useTheme } from "../../context/ThemeContext";

const Introduction = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={styles.introduction}>
      <h1>HI</h1>
      <h2>I&apos;M BRUNO.</h2>
      <h3>I design websites that will help you</h3>
      <ol>
        <li className={styles.intro_list}>
          <span className={styles.roundNumbers}>①</span> stand out
        </li>
        <li className={styles.intro_list}>
          <span className={styles.roundNumbers}>②</span> be aesthetically
          pleasing
        </li>
        <li className={styles.intro_list}>
          <span className={styles.roundNumbers}>③</span> articulate the most
          important messages
        </li>
        <li className={styles.intro_list}>
          <span className={styles.roundNumbers}>④</span> boost your earnings
        </li>
      </ol>
    </div>
  );
};

export default Introduction;
