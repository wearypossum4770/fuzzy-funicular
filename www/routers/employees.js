"use strict";
import { Router } from "express";
import { Employee } from "../models/employee.model.js";
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
employeeRouter.route("/add").post(async (req, res) => {
  try {
    let {
      date_of_birth: { dateOfBirth },
      gender,
      phone_number: { phoneNumber },
      start_date: { startDate },
      end_date: { endDate },
      on_boarding: { onboarding },
    } = req.body;
    let newEmployee = Employee.create({
      dateOfBirth,
      gender,
      phoneNumber,
      startDate,
      endDate,
      onboarding,
    });
    await newEmployee.save({ timestamps: true });
    res.json(`Employee Added`);
  } catch (err) {
    res.status(400).json(`Error: ${err.message}`);
  }
});
employeeRouter.route("/:id").get(async (req, res) => {
  try {
    let { id } = req.params;
    res.json(await User.findById(id));
  } catch (err) {
    res.status(400).json(`Error: ${err.message}`);
  }
});
employeeRouter.route("update/:id").post(async (req, res) => {
  try {
    let {
      nickname,
      first_name: { firstName },
      last_name: { lastName },
      middle_name: { middleName },
      title,
      honorific_prefix /**:{honorificPrefix} */,
      honorific_suffix /**:{honorificSuffix} */,
      suffix,
      madien_name: { madienName },
      date_of_death /**:{dateOfDeath} */,
      do_not_contact /**:{doNotContact} */,
    } = req.body;
    let { id } = req.params;
    let user = await User.findById(id);
    user.nickname = nickname;
    user.firstName = firstName;
    user.lastName = lastName;
    user.middleName = middleName;
    user.madienName = madienName;
    user.title = title;
    user.honorific_prefix = honorific_prefix;
    user.honorific_suffix = honorific_suffix;
    user.suffix = suffix;
    user.date_of_death = Date.parse(date_of_death);
    user.do_not_contact = do_not_contact;
    res.json(`User information updated for: ${user.username}`);
  } catch (err) {
    res.status(400).json(`Error: ${err.message}`);
  }
});
export default employeeRouter;
