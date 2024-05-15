import styles from "../General Stylesheets/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.heading}>Cosmic Chronicles</div>
        <ul className={styles.navLinkList}>
          <li className={styles.navLink}>
            <Link href="/" className={styles.navInnerLink}>
              Home
            </Link>
          </li>
          {/* <li className={styles.navLink}>
            <Link href="/Blogs" className={styles.navInnerLink}>
              About
            </Link>
          </li> */}
          <li className={styles.navLink}>
            <Link href="/Blogs" className={styles.navInnerLink}>
              Latest Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
