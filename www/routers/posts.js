import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  updatePost,
} from "../controllers/posts.js";
const blogPostRouter = Router();
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
blogPostRouter.get("/", getAllPost);
/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
blogPostRouter.post("/", createPost);
/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
blogPostRouter.put("/:id", updatePost);
/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
blogPostRouter.delete("/:id", deletePost);
export default blogPostRouter;
