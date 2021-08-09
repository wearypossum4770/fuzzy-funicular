"use strict";
import { BlogPost } from "../models/post.model.mongodb.js";
const getAllPost = async (req, res) => {
  try {
    const blogPostList = await BlogPost.find();
    res.json(blogPostList);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Blog or Post not found", error: err.message });
  }
};
const createPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.create(req.body);
    res.json({ message: "Blog or Post added successfully", blogPost });
  } catch (err) {
    res.status(404).json({ message: "Failed to add", error: err.message });
  }
};
const updatePost = async (req, res) => {
  try {
    let id = req.params.id;
    let blogPost = BlogPost.findByIdAndUpdate(id, req.body);
    res.json({ message: "updated successfully", blogPost });
  } catch (err) {
    res.status(400).json({ message: "Failed to update", error: err.message });
  }
};
const deletePost = async (req, res) => {
  try {
    let id = req.params.id;
    let { delete_blog_post_obj } = req.body;
    if (!delete_blog_post_obj) {
      throw "Operation not allowed from this system!";
    }
    let blogPost = BlogPost.findByIdAndRemove(id, req.body);
    res.json({ message: "updated successfully", blogPost });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete", error: err.message });
  }
};
export { getAllPost, createPost, updatePost, deletePost };
