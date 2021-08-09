"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const timeEntrySchema = new Schema(
  {
    total_tips: 20,
    clock_id: 401,
    time_out: "2021-07-11T17:00:00.651Z",
    employee_id: "123456",
    time_in: "2021-07-11T09:00:00.162Z",
    honorific_prefix: {
      trim: true,
      type: String,
      default: "",
      adminSearchField: true,
    },
  },
  { timestamps: true }
);

export const TimeEntry = mongoose.model("TimeEntry", timeEntrySchema);
