import styles from "../Stylesheets/BlogsHero.module.css";

const BlogsHero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          Explore the Universe, One Click at a Time 🌌
        </div>
        <div className={styles.description}>
          "Dive into celestial wonders on our space blog, where cosmic
          discoveries meet captivating storytelling. Explore the universe, one
          captivating article at a time. "
        </div>
      </div>
    </>
  );
};

export default BlogsHero;
