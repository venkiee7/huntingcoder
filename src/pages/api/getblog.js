// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
import path from "path";

export default function handler(req, res) {
  // const filePath = path.resolve(`src/blogdata/${req.query.slug}.json`); // Resolve the file path
  fs.readFile(`src/blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "No such blog found" });
    }
    // console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  });
}
