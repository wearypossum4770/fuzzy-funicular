import { Users } from "../models/user.model.js";

const bulkCreateUsers = async (req, res) => {
  try {
    let userList = req.body ?? [];
    Users.bulkCreate(userList);
  } catch (error) {
    res.json();
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = Users.findAll();
  } catch (error) {
    res.json();
  }
};
