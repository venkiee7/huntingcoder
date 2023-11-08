// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../../styles/BlogPost.module.css";
// import * as fs from "fs";
// // import { log } from "console";

// const Slug = (props) => {
//   // console.log(props.myBlog);
//   const [blog, setBlog] = useState(props.myBlog);
//   //   console.log(router.query);
//   console.log(blog.content);
//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1>{blog && blog.title}</h1>
//         {/* <hr /> */}
//         <div>{blog.content}</div>
//       </main>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "how-to-learn-flask" } },
//       { params: { slug: "how-to-learn-javascript" } },
//       { params: { slug: "how-to-learn-nextjs" } },
//     ],
//     fallback: true,
//   };
// }

// // export async function getServerSideProps(context) {
// //   // const router = useRouter();
// //   const { slug } = context.query;
// //   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
// //   let myBlog = await data.json();

// //   return {
// //     props: { myBlog }, // will be passed to the page component as props
// //   };
// // }

// export async function getStaticProps(context) {
//   // const router = useRouter();
//   // console.log(context);
//   const { slug } = context.params;
//   let myBlog = await fs.promises.readFile(`src/blogdata/${slug}.json`, "utf-8");
//   // console.log(req.query.slug);

//   return {
//     props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
//   };
// }

// export default Slug;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`src/blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}
export default Slug;
