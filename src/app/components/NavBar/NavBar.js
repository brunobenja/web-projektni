"use client";
import { useState } from "react";
import styles from "./NavBar.module.css"; // Import the CSS Module

const NavBar = () => {
  const [showContent, setShowContent] = useState(false);

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
        <span className={styles.logo}>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z"
              fill="currentColor"
            />
          </svg>
        </span>
      </a>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              [about]
            </a>
          </li>
          <li>
            <a href="#work" onClick={(e) => handleLinkClick(e, "work")}>
              [work]
            </a>
          </li>
          <li>
            <a
              href="#other-endeavors"
              onClick={(e) => handleLinkClick(e, "other-endeavors")}
            >
              [other endeavors]
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              [contact]
            </a>
          </li>
        </ul>
      </nav>

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
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
