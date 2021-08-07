import { Exercise } from "../models/exercise.model.js";
const getAllExercises = async (req, res) => {
  try {
    const exerciseList = await Exercise.find();
    res.json(exerciseList);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Exercises not found", error: err.message });
  }
};
const createExercise = async (req, res) => {
  try {
    const exercise = await Exercise.create(req.body);
    res.json({ message: "Exercise added successfully", exercise });
  } catch (err) {
    res.status(404).json({ message: "Failed to add", error: err.message });
  }
};
const updateExercise = async (req, res) => {
  try {
    let id = req.params.id;
    let exercise = Exercise.findByIdAndUpdate(id, req.body);
    res.json({ message: "updated successfully", exercise });
  } catch (err) {
    res.status(400).json({ message: "Failed to update", error: err.message });
  }
};
const deleteExercise = async (req, res) => {
  try {
    let id = req.params.id;
    let { delete_exercise_obj } = req.body;
    if (!delete_exercise_obj) {
      throw "Operation not allowed from this system!";
    }
    let exercise = Exercise.findByIdAndRemove(id, req.body);
    res.json({ message: "updated successfully", exercise });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete", error: err.message });
  }
};
export { getAllExercises, createExercise, updateExercise, deleteExercise };
