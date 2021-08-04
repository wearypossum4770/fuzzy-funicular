"use strict";
import mongoose from "mongoose";
import { addressSchema } from "./address.model.js";
const Schema = mongoose.Schema;
export const userSchema = new Schema(
  {
    honorific_prefix: {
      trim: true,
      type: String,
      default: "",
      adminSearchField: true,
    },
    title: { trim: true, type: String, default: "", adminSearchField: true },
    firstName: {
      trim: true,
      type: String,
      default: "",
      adminSearchField: true,
    },
    middleName: {
      trim: true,
      type: String,
      default: "",
      adminSearchField: true,
    },
    lastName: { trim: true, type: String, default: "", adminSearchField: true },
    suffix: { trim: true, type: String, default: "", adminSearchField: true },
    honorific_suffix: {
      trim: true,
      type: String,
      default: "",
      adminSearchField: true,
    },
    madienName: {
      trim: true,
      type: String,
      default: "",
      adminSearchField: true,
    },
    nickname: {
      trim: true,
      type: String,
      default: "",
      adminSearchField: false,
    },
    date_of_birth: { type: Date, adminSearchField: true },
    username: { trim: true, type: String, unique: true, minlength: 3 },
    email: {
      trim: true,
      type: String,
      admin: false,
      unique: true,
      match: /.+\@.+\..+/,
      index: { unique: true, sparse: true },
    },
    addresses: [addressSchema],
    alive: {
      admin: false,
      type: Boolean,
      default: false,
      adminSearchField: false,
    },
    date_joined: { type: Date, default: new Date(), adminSearchField: false },
    date_of_death: { type: Date, adminSearchField: true },
    do_not_contact: { type: Boolean, default: false, adminSearchField: false },
    is_active: {
      admin: false,
      type: Boolean,
      default: true,
      adminSearchField: false,
    },
    is_staff: {
      admin: false,
      type: Boolean,
      default: false,
      adminSearchField: false,
    },
    is_superuser: {
      admin: false,
      type: Boolean,
      default: false,
      adminSearchField: false,
    },
    last_login: { type: Date, default: new Date(), adminSearchField: false },
    owasp_safe_password: {
      admin: false,
      type: Boolean,
      default: false,
      adminSearchField: false,
    },
    password: { admin: false, type: String, adminSearchField: false },
    prompt_password_change: {
      type: Boolean,
      default: false,
      adminSearchField: true,
    },
    retention_only: { type: Boolean, default: false, adminSearchField: true },
  },
  { timestamps: true }
);
userSchema
  .path("email")
  .validate((email) => email.length, "Email cannot be blank");
export const User = mongoose.model("User", userSchema);
