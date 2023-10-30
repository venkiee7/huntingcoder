import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  //   console.log(router.query);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        {/* <hr /> */}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          dolores ad assumenda nostrum nisi tempora blanditiis, autem omnis
          dignissimos rerum iure sint eius?
        </div>
      </main>
    </div>
  );
};

export default Slug;
