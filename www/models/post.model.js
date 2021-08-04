"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const blogPostSchema = new Schema({
  author: { type: ObjectId, ref: "User" },
  title: { type: String, default: "", adminSearchField: true },
  content: { type: String, adminFieldType: "textarea" },
  slug: { type: String, unique: true },
  comments: [{ body: String, date: Date }],
  createdOn: {
    type: Date,
    default: new Date(),
    admin: false,
    adminFieldType: "date",
  },
  tags: { adminFieldType: "array", type: Array },
  published: { type: Boolean, default: false },
});

export const BlogPost = mongoose.model("Post", blogPostSchema);
