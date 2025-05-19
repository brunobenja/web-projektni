"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for internal navigation
import styles from "./FeaturedWork.module.css"; // Import the CSS Module

const FeaturedWork = () => {
  const [showContent, setShowContent] = useState(true);

  const projects = [
    {
      title: "Project 1",
      imageUrl: "/assets/images/featured_projects/project1.png",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      imageUrl: "/assets/images/featured_projects/project2.png",
      link: "https://example.com/project2",
    },
    {
      title: "Project 3",
      imageUrl: "/assets/images/featured_projects/project3.png",
      link: "https://example.com/project3",
    },
    {
      title: "Project 4",
      imageUrl: "/assets/images/featured_projects/project4.png",
      link: "https://example.com/project4",
    },
  ];

  return (
    <div className={styles.featuredWorkContainer}>
      <h1 className={styles.featuredWorkTitle}>FEATURED WORK</h1>
      {showContent && projects.length > 0 && (
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link} // Use the link property for navigation
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security for external links
              className={styles.projectLink} // Optional styling for links
            >
              <div
                className={`${styles.projectCard} ${
                  index === 0 ? styles.leftCard : styles.rightCard
                }`}
              >
                <Image
                  src={project.imageUrl || "/assets/images/placeholder.png"} // Fallback to placeholder
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedWork;
