import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Hero from "./HomePage/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
    </main>
  );
}
