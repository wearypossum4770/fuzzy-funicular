"use strict";
import { Router } from "express";
import { Employee } from "../models/employee.model.js";
import { User } from "../models/user.model.js";
const employeeRouter = Router();
employeeRouter.route("/").get(async (req, res) => {
  try {
    let employeeList = await Employee.find({});
    if (employeeList) {
      res.json(employeeList);
    }
  } catch (err) {
    res.status(400).json(`ERROR:${err}`);
  }
});
employeeRouter.route("/add/:userID").post(async (req, res) => {
  try {
    let { userID } = req.params;
    let user = await User.findById(userID).exec();
    let {
      id: user_id,
      date_of_birth: dateOfBirth,
      gender,
      regular_rate: regularRate,
      sync_token: syncToken,
      clock_id: clockID,
      pay_type: payType,
      phone_number: phoneNumber,
      start_date: startDate,
      end_date: endDate,
      // on_boarding:  onBoarding ,
    } = req.body;
    let newEmployee = new Employee({
      dateOfBirth,
      gender,
      phoneNumber,
      startDate,
      endDate,
      regularRate,
      syncToken,
      clockID,
      payType,
      user: user_id,
      // onBoarding,
    });
    await newEmployee.save({ timestamps: true });
    return res.json(`Employee Added`);
  } catch (err) {
    return res.status(400).json(`Error: ${err}`);
  }
});
// employeeRouter.route("/:id").get(async (req, res) => {
//   try {
//     let { id } = req.params;
//     res.json(await User.findById(id));
//   } catch (err) {
//     res.status(400).json(`Error: ${err.message}`);
//   }
// });
employeeRouter.route("update/:userID").post(async (req, res) => {
  try {
    let { userID } = req.params;
    let user = await User.findById(userID).exec();
    let employee = await Employee.findById();
    let {
      date_of_birth: dateOfBirth,
      gender,
      regular_rate: regularRate,
      sync_token: syncToken,
      clock_id: clockID,
      pay_type: payType,
      phone_number: phoneNumber,
      start_date: startDate,
      end_date: endDate,
      // on_boarding: onboarding ,
    } = req.body;
    employee.dateOfBirth = dateOfBirth;
    employee.gender = gender;
    employee.phoneNumber = phoneNumber;
    employee.startDate = startDate;
    employee.endDate = endDate;
    employee.regularRate = regularRate;
    employee.syncToken = syncToken;
    employee.clockID = clockID;
    employee.payType = payType;
    employee.user = user?.__id;

    // user.date_of_death = Date.parse(date_of_death);
    res.json(`User information updated for: ${user.username}`);
  } catch (err) {
    res.status(400).json(`Error: ${err.message}`);
  }
});
export default employeeRouter;
