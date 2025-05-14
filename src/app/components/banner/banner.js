"use client";

import Image from "next/image";
import styles from "./banner.module.css"; // Import the CSS Module
import { useTheme } from "../../context/ThemeContext";

const Banner = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={styles.banner}>
      <div className={styles.bannerLeft}>
        <Image
          src={
            isDarkMode
              ? "/assets/images/bear_white.png?updated=1"
              : "/assets/images/bear_black.png?updated=1"
          }
          alt="banner"
          width={260}
          height={315}
          className={styles.bannerImage}
        />
      </div>
      <div className={styles.bannerRight}>
        <Image
          src={
            isDarkMode
              ? "/assets/images/win_white.png?updated=1"
              : "/assets/images/win_black.png?updated=1"
          }
          alt="banner"
          width={275}
          height={180}
          className={styles.bannerImage}
        />
      </div>
    </div>
  );
};

export default Banner;
