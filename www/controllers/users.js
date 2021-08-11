import { User } from "../models/user.model.mongodb.js";
const getAllUsers = async (req, res) => {
  try {
    let userList = (await User.find()) ?? [];
    res.json(userList);
  } catch (err) {
    res.status(400).json({ message: "Failed to retrieve", error: err.message });
  }
};
const createUser = async (req, res) => {
  try {
    let {
      password,
      username,
      email,
      nickname,
      first_name: { firstName },
      last_name: { lastName },
      middle_name: { middleName },
      madien_name: { madienName },
      title,
      honorific_prefix /**:{honorificPrefix} */,
      honorific_suffix /**:{honorificSuffix} */,
      suffix,
      date_of_death /**:{dateOfDeath} */,
      do_not_contact /**:{doNotContact} */,
    } = req.body;
    const user = new User({
      password,
      username,
      email,
      nickname,
      firstName,
      lastName,
      middleName,
      madienName,
      title,
      honorific_prefix,
      honorific_suffix,
      suffix,
      date_of_death,
      do_not_contact,
    });
    await user.save({ timestamps: true });
    res.json({ message: "User added successfully", user });
  } catch (err) {
    res.status(400).json({ message: "Failed to create", error: err.message });
  }
};
const updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    let user = User.findByIdAndUpdate(id, req.body);
    res.json({ message: "updated successfully", user });
  } catch (err) {
    res.status(400).json({ message: "Failed to update", error: err.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    let { delete_user_obj } = req.body;
    if (!delete_user_obj) {
      res.status(422).json({ outgoingMessage: "Configuration missing IYKYK" });
      throw "Operation not allowed from this system!";
    }
    let user = User.findByIdAndRemove(id, req.body);
    res.json({ message: "updated successfully", user });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete", error: err.message });
  }
};
const bulkUserCreate = async (req, res) => {
  try {
    let userList = req.body;
    let arr = userList?.map((user) => ({
      ...user,
      madienName: user.madien_name,
      firstName: user.first_name,
      lastName: user.last_name,
      middleName: user.middle_name,
    }));
    await User.create(arr);
    await User.init();
    res.json("Bulk Users Created");
  } catch (err) {
    res.status(400).json(`ERROR:${err.message}`);
  }
};
export { getAllUsers, createUser, updateUser, deleteUser, bulkUserCreate };
