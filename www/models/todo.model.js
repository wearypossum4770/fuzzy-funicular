"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const todoSchema = new Schema(
  {
    scheduledTime: { type: Date },
    actionStatus: { type: String },
    agentOrganization: { trim: true, type: String },
    result: { trim: true, type: String },
    endTime: { trim: true, type: Date },
    username: { trim: true, type: String, unique: true, minlength: 3 },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", todoSchema);
