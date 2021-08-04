import mongoose from "mongoose";
import {userSchema} from './user.model.js'
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const employeeSchema = new Schema({
user:userSchema,
    "dateOfBirth": {
        type: String,
        default: "",
        adminSearchField: true,
      },
            "gender": {
        type: String,
        default: "",
        adminSearchField: true,
      },
            "phoneNumber": {
        trim: true,
        type: String,
        default: "",
        adminSearchField: true,
      },
            "startDate": {
        type: String,
        default: "",
        adminSearchField: true,
      },
   
            "payrollCalendarID": {
        type: String,
        default: "",
        adminSearchField: true,
      },
            "updatedDateUTC": {
        type: String,
        default: "",
        adminSearchField: true,
      },
            "createdDateUTC": {
        type: String,
        default: "",
        adminSearchField: true,
      },
            "endDate": {
        type: String,
        default: "",
        adminSearchField: true,
      },
      onboarding: {
        signupDate: { type: Date, admin: false },
        hasLoggedIn: { type: Boolean, default: false },
      },
},  { timestamps: true }
)
export const Employee = mongoose.model("Employee", employeeSchema);
