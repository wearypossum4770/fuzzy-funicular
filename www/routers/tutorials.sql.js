import { Router } from "express";
import { createTutorial } from "../controllers/tutorials.js";
const tutorialRouter = Router();
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
//  tutorialRouter.get("/", getAllTutorials);
//  /**
//   * @route POST api/todo
//   * @description add a new todo
//   * @access public
//   */
tutorialRouter.post("/", createTutorial);
/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
//  tutorialRouter.put("/:id", updateTutorial);
//  /**
//   * @route DELETE api/todo/:id
//   * @description delete todo
//   * @access public
//   */
//  tutorialRouter.delete("/:id", deleteTutorial);
export default tutorialRouter;
