import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Comment = new Schema({
  name: { type: String, default: "hahaha" },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer,
});
// a setter
Comment.path("name").set(function (v) {
  return capitalize(v);
});
// middleware
Comment.pre("save", function (next) {
  notify(this.get("email"));
  next();
});
