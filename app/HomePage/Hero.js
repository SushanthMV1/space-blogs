import styles from "./Stylesheets/Hero.module.css";

const Hero = () => {
  //let vh = window.innerHeight;
  //console.log(vh);
  return (
    <div className={styles.hero}>
      {/* Hero Left */}
      <div className={styles.heroLeft}>
        <div className={styles.planet1}>
          <div className={styles.rocket}>&#x25B2;</div>
          <div className={styles.crater1}></div>
          <div className={styles.crater2}></div>
          <div className={styles.crater3}></div>
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
