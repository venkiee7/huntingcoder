// import React, { useEffect, useState } from "react";
// import styles from "../styles/Blog.module.css";
// import Link from "next/link";
// import * as fs from "fs";

// const Blog = (props) => {
//   console.log(props);
//   // console.log("hi");
//   const [blogs, setBlogs] = useState(props.allBlogs);

//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         {/* <h2>Latest Blogs</h2> */}
//         {blogs.map((blogitem) => {
//           return (
//             <div key={blogitem.slug}>
//               <Link href={`/blogpost/${blogitem.slug}`}>
//                 <h2 className={styles.blogItemh2}>{blogitem.title}</h2>
//               </Link>
//               <p className={styles.blogItemp}>
//                 {blogitem.content.substr(0, 150)}...
//               </p>
//             </div>
//           );
//         })}

//         {/* <div className="blogItem">
//           <h2>How to learn Javascript in 2022</h2>
//           <p>Javascript language is used to design language for web</p>
//         </div>
//         <div className="blogItem">
//           <h2>How to learn Javascript in 2022</h2>
//           <p>Javascript language is used to design language for web</p>
//         </div> */}
//       </main>
//     </div>
//   );
// };

// // export async function getServerSideProps(context) {
// //   let data = await fetch("http://localhost:3000/api/blogs");
// //   let allBlogs = await data.json();
// //   return {
// //     props: { allBlogs }, // will be passed to the page component as props
// //   };
// // }

// export async function getStaticProps(context) {
//   let data = await fs.promises.readdir("src/blogdata");
//   let myfile;
//   let allBlogs = [];
//   // console.log(data);
//   // res.status(200).json(data);
//   for (let index = 0; index < data.length; index++) {
//     const item = data[index];
//     console.log(item);
//     myfile = await fs.promises.readFile("src/blogdata/" + item, "utf8");
//     // console.log(myfile);
//     allBlogs.push(JSON.parse(myfile));
//   }
//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   };
// }

// export default Blog;

import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {

  // }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {blogitem.content.substr(0, 140)}...
              </p>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <button className={styles.btn}>Read More</button>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("src/blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("src/blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
