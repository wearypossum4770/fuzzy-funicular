import cuid from "cuid";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const employeeSchema = new Schema(
  {
    payType: {
      type: String,
      default: "",
      adminSearchField: true,
    },
    clockID: {
      type: Number,
      default: "",
      adminSearchField: true,
    },
    regularRate: {
      type: Number,
      default: "",
      adminSearchField: true,
      default: 1.0,
    },
    user: {
      type: String,
      default: "",
      adminSearchField: true,
    },
    syncToken: {
      type: String,
      default: "",
      adminSearchField: true,
    },
    dateOfBirth: {
      type: Date,
      adminSearchField: true,
    },
    gender: {
      type: String,
      default: "",
      adminSearchField: true,
    },
    phoneNumber: {
      trim: true,
      type: String,
      default: "",
      adminSearchField: true,
    },
    startDate: {
      type: Date,
      default: "",
      adminSearchField: true,
    },

    payrollCalendarID: {
      type: String,
      default: "",
      adminSearchField: true,
    },
    updatedDateUTC: {
      type: Date,
      default: Date.now,
      adminSearchField: true,
    },
    createdDateUTC: {
      type: Date,
      default: new Date(),
      adminSearchField: true,
    },
    endDate: {
      type: Date,
      default: "",
      adminSearchField: true,
    },
    onboarding: {
      signupDate: { type: Date, admin: false },
      hasLoggedIn: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);
export const Employee = mongoose.model("Employee", employeeSchema);
