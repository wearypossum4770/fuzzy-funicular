import { Router } from "express";
import {
  createExercise,
  deleteExercise,
  getAllExercises,
  updateExercise,
} from "../controllers/exercises.js";
const exerciseRouter = Router();
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
exerciseRouter.get("/", getAllExercises);
/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
exerciseRouter.post("/", createExercise);
/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
exerciseRouter.put("/:id", updateExercise);
/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
exerciseRouter.delete("/:id", deleteExercise);
export default exerciseRouter;
