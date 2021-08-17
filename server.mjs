import express, { Router } from "express";
import cors from "cors";
import { readFileSync, writeFile } from "fs";
const PORT = 3004;
const json_url_config = { limit: "1mb", extended: true };
var app = express();
// subdomains mail , userpages, adminpages, portal
let degrees = JSON.parse(readFileSync("./data/degrees.json"));
let courses = JSON.parse(readFileSync("./data/courses.json")).sort((a, b) =>
  a.courseID.toLowerCase() > b.courseID.toLowerCase() ? 1 : -1
);
app.use(express.urlencoded(json_url_config));
app.use(express.json(json_url_config));
app.use(cors());
app.post("/degrees/:identifier", (req, res) => {
  let { identifier } = req.body;
  let data = degrees.filter((degree) => degree.identifier === identifier);
  res.json(data);
});
app.get("/degrees", (_, res) => {
  res.json(degrees);
});
app.get("/courses", (_, res) => {
  res.json(courses);
});
app.post("/degrees", (req, res) => {
  let content = req.body;
  let found = degrees
    ?.filter((degree) => degree.identifier === content?.identifier)
    ?.pop();
  if (found) {
    found = { ...found, ...content };
  } else {
    degrees.push(content);
  }
  writeFile("./data/degrees.json", JSON.stringify(degrees), (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(content);
  });
});
app.post("/courses", (req, res) => {
  let content = req.body;
  let found = courses
    ?.filter((course) => course.courseID === content?.courseID)
    ?.pop();
  if (found) {
    found = { ...found, ...content };
  } else {
    courses.push(content);
  }
  writeFile("./data/courses.json", JSON.stringify(courses), (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(content);
  });
});
app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
