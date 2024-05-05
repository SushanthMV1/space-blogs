import styles from "../General Stylesheets/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.heading}>Cosmic Chronicles</div>
        <ul className={styles.navLinkList}>
          <li className={styles.navLink}>Home</li>
          <li className={styles.navLink}>About</li>
          <li className={styles.navLink}>Latest Blogs</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
