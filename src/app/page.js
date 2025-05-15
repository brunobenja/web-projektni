import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";

import OtherWork from "./components/OtherWork/OtherWork";
import Introduction from "./components/Introduction/Introduction";
import Banner from "./components/banner/banner";
import { ThemeProvider } from "./context/ThemeContext";
export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
        <main>
          <section id="introduction">
            <Introduction />
          </section>

          <section id="banner">
            <Banner />
          </section>
          <section id="featured_work">
            <FeaturedWork />
          </section>
          <section id="other_work">
            <OtherWork />
          </section>
          <section id="contact"></section>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </ThemeProvider>
  );
}
