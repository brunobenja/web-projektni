import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";
import OtherWork from "./components/OtherWork/OtherWork";
export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <section id="top"></section>
        <Image
          src="/assets/images/bb-design-black.png"
          alt="bb-design"
          priority
          width={500}
          height={500}
        />
        <section id="work">
          <FeaturedWork />
        </section>
        <OtherWork />
        <section id="contact"></section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
