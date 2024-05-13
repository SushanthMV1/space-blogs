import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Hero from "./HomePage/Components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
    </main>
  );
}
