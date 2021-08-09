import { Users } from "../models/user.model.sql.js";

const bulkCreateUsers = async (req, res) => {
  try {
    let userList = req.body ?? [];
    Users.bulkCreate(userList);
    res.status(201).json(`Created ${userList.length} users!`);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to retrieve", error: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = Users.findAll();
    res.json(users);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to retrieve", error: error.message });
  }
};
export { getAllUsers, bulkCreateUsers };
