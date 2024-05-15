import { useState } from "react";
import styles from "../Stylesheets/BlogsList.module.css";
import Image from "next/image";

const BlogsList = ({ blogs }) => {
  return (
    <>
      {/* Display section */}
      <div className={styles.BlogDisplay}>
        {blogs.map((blog) => (
          <div className={styles.blogsList}>
            <div className={styles.blog}>
              <div className={styles.blogLeft}>
                <Image
                  src={blog.image}
                  fill
                  alt="not required"
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.blogRight}>
                <div className={styles.blogRightTop}>
                  <div className={styles.blogHeading}>
                    <h1>{blog.title}</h1>
                  </div>
                  <div className={styles.blogDescription}>
                    "{blog.description} "
                  </div>
                </div>
                <div className={styles.blogRightBottom}>
                  <button className={styles.blogReadMore}>Read More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default BlogsList;
