import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h2>Latest Blogs</h2> */}
        <div>
          <Link href={"/blogpost/learn-javascript"}>
            <h3 className={styles.blogItemh3}>
              How to learn Javascript in 2022
            </h3>
          </Link>
          <p>Javascript language is used to design language for web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn Javascript in 2022</h3>
          <p>Javascript language is used to design language for web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn Javascript in 2022</h3>
          <p>Javascript language is used to design language for web</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
