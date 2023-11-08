// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const directoryPath = path.resolve("src/blogdata"); // Resolve the directory path

  // fs.readdir(directoryPath, (err, data) => {
  //   if (err) {
  //     console.error("Error reading directory:", err);
  //     res.status(500).json({ error: "An error occurred while listing files" });
  //   } else {
  //     // console.log("Files in directory:", files);
  //     console.log(data);
  //     let allBlogs = [];
  //     data.forEach((item) => {
  //       console.log(item);
  //       fs.readFile("/src/blogdata" + item, (d) => {
  //         allBlogs = allBlogs.push(d);
  //       });
  //     });
  //     res.status(200).json(allBlogs);
  //   }
  // });
  let data = await fs.promises.readdir("src/blogdata");
  let myfile;
  let allBlogs = [];
  console.log(data);
  // res.status(200).json(data);
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("src/blogdata/" + item, "utf8");
    // console.log(myfile);
    allBlogs.push(JSON.parse(myfile));
  }
  // data.forEach(async (item) => {});
  console.log(allBlogs);
  res.status(200).json(allBlogs);
}
