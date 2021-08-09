"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const profileSchema = new Schema({
  title: { trim: true, type: String, admin: false, required: true },
  slug: { trim: true, type: String, unique: true, admin: false },
  user: { type: ObjectId, ref: "User", admin: false, required: true },
  image: { type: String, admin: false, required: true },
  date_created: { type: String, admin: false, required: true },
  date_modified: { type: String, admin: false, required: true },
  is_public: { type: Boolean, admin: false, required: true },
  is_active: { type: Boolean, admin: false, required: true },
  mobile_number: { trim: true, type: String, admin: false, required: true },
  internal_notes: [],
  addresses: [],
  roles: [],
});
export const Profile = mongoose.model("Post", profileSchema);
