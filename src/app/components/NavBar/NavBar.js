"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

import Image from "next/image";
import styles from "./NavBar.module.css"; // Import the CSS Module

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useTheme(); // Ensure ThemeProvider wraps this component
  const [showContent, setShowContent] = useState(false); // Add state for mobile navigation

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Prevent default link behavior
    setShowContent(false); // Close the hamburger menu
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Smooth scroll to the section
        block: "start",
      });
    }
  };

  return (
    <div className={styles.nav_container}>
      <a href="#top">
        <Image
          src={
            isDarkMode
              ? "/assets/images/logo-white.png"
              : "/assets/images/logo.png"
          }
          alt="logo"
          width={50}
          height={50}
          className={styles.logo}
        />
      </a>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              [about]
            </a>
          </li>
          <li>
            <a
              href="#featured_work"
              onClick={(e) => handleLinkClick(e, "featured_work")}
            >
              [work]
            </a>
          </li>
          <li>
            <a href="#other" onClick={(e) => handleLinkClick(e, "other")}>
              [other]
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              [contact]
            </a>
          </li>
          <li>
            <button
              className={styles.theme_button}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <Image
                src={
                  isDarkMode
                    ? "/assets/images/light_mode.png"
                    : "/assets/images/dark_mode.png"
                }
                alt="theme"
                width={20}
                height={20}
              />
            </button>
          </li>
        </ul>
      </nav>
      {/* Mobile Navigation */}
      <nav className={`${styles.nav_mobile} ${showContent ? styles.show : ""}`}>
        <ul className={styles.links}>
          <li className={styles.nav_link}>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              [about]
            </a>
          </li>
          <li className={styles.nav_link}>
            <a href="#work" onClick={(e) => handleLinkClick(e, "work")}>
              [work]
            </a>
          </li>
          <li className={styles.nav_link}>
            <a
              href="#other-endeavors"
              onClick={(e) => handleLinkClick(e, "other-endeavors")}
            >
              [other endeavors]
            </a>
          </li>
          <li className={styles.nav_link}>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              [contact]
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={styles.hamburger_button}
        onClick={() => setShowContent(!showContent)}
      >
        <span>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
              fill="var(--foreground)"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
