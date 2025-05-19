"use client";
import { useState } from "react";
import styles from "./OtherWork.module.css"; // Import the CSS Module

const OtherWork = () => {
  const projects = [
    {
      title: "The Rolling Stones",
      imageUrl: "/assets/images/other_projects/RollingStones.png",
      link: "https://example.com/hive",
    },
    {
      title: "Bob Dylan ",
      imageUrl: "/assets/images/other_projects/BobDylan.png",
      link: "https://example.com/beacon",
    },
    {
      title: "David Bowie",
      imageUrl: "/assets/images/other_projects/DavidBowie.png",
      link: "https://example.com/ready2stack",
    },
    {
      title: "Santana",
      imageUrl: "/assets/images/other_projects/Santana.png",
      link: "https://example.com/ready2stack",
    },
  ];

  return (
    <div className={styles.otherWorkContainer}>
      <h1 className={styles.otherWorkTitle}>other work</h1>
      <ul className={styles.projectList}>
        {projects.map((project, index) => (
          <li key={index} className={styles.projectItem}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.projectContent}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h2 className={styles.projectTitle}>{project.title}</h2>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherWork;
