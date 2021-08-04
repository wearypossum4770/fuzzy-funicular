import { Router } from "express";
import { BlogPost } from "../models/post.model.js";
const blogPostRouter = Router();
blogPostRouter.route("/").get((req, res) => {
  BlogPost.find({})
    .then((blogPosts) => res.json(blogPosts))
    .catch((err) => res.status(400).json(`ERROR:${err}`));
});
blogPostRouter.route("/add").post((req, res) => {
  const { username, author, title, content, date_posted } = req.body;
  const newBlogPost = new BlogPost({
    title: title,
    content: content,
    date_posted: date_posted,
    // author:author??username ,
  });
  newBlogPost
    .save()
    .then(() => res.json(`${newBlogPostname} Added`))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
export default blogPostRouter;
