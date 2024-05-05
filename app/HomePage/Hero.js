import styles from "./Stylesheets/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* Hero Left */}
      <div className={styles.heroLeft}>
        <div className={styles.planet}>
          <div className={styles.rocket}>&#x25B2;</div>
        </div>
      </div>

      {/* Hero Right */}
      <div className={styles.heroRight}>
        <h1 className={styles.heroCaption}>Deep Space Exploration.</h1>
        <button className={styles.heroButton}>Read Blogs</button>
      </div>
    </div>
  );
};

export default Hero;
