import { Todo } from "../models/todo.model.js";
const getAllTodos = async (req, res) => {
  try {
    const todoList = await Todo.find();
    res.json(todoList);
  } catch (err) {
    res.status(404).json({ message: "Todo not found", error: err.message });
  }
};
const createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.json({ message: "Todo added successfully", newTodo });
  } catch (err) {
    res.status(404).json({ message: "Failed to add", error: err.message });
  }
};
const updateTodo = async (req, res) => {
  try {
    let id = req.params.id;
    let todo = Todo.findByIdAndUpdate(id, req.body);
    res.json({ message: "updated successfully", todo });
  } catch (err) {
    res.status(400).json({ message: "Failed to update", error: err.message });
  }
};
const deleteTodo = async (req, res) => {
  try {
    let id = req.params.id;
    let { delete_todo_obj } = req.body;
    if (!delete_todo_obj) {
      throw "Operation not allowed from this system!";
    }
    let todo = Todo.findByIdAndRemove(id, req.body);
    res.json({ message: "updated successfully", todo });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete", error: err.message });
  }
};
export { getAllTodos, createTodo, updateTodo, deleteTodo };
