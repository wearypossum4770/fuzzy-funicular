"use strict";
import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.js";
const todoRouter = Router();
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
todoRouter.get("/", getAllTodos);
/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
todoRouter.post("/", createTodo);
/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
todoRouter.put("/:id", updateTodo);
/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
todoRouter.delete("/:id", deleteTodo);
export default todoRouter;
