"use strict";
import { Router } from "express";
import {
  bulkUserCreate,
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/users.js";
const userRouter = Router();
/**
 * @route GET api/user/bulk-create
 * @description create users from a list.
 * @access private
 */
userRouter.post("/bulk-create", bulkUserCreate);
/**
 * @route GET api/user
 * @description get all user
 * @access public
 */
userRouter.get("/", getAllUsers);
/**
 * @route POST api/user
 * @description add a new user
 * @access public
 */
userRouter.post("/", createUser);
/**
 * @route PUT api/user/:id
 * @description update user
 * @access public
 */
userRouter.put("/:id", updateUser);
/**
 * @route DELETE api/user/:id
 * @description delete user
 * @access public
 */
userRouter.delete("/:id", deleteUser);
export default userRouter;
