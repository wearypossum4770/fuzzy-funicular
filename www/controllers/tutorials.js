import sqlDatabase from "../config/sqlDatabase.js";
let { Tutorial } = sqlDatabase();
const createTutorial = async (req, res) => {
  try {
    let { title, description, published } = req.body;
    console.log({ title, description, published });
    // let tutorial = Tutorial.build({title,description,published,})
    if (tutorial) {
      res.json(tutorial);
    }
  } catch (err) {
    return res.status(404).json();
  }
};
const getAllTutorials = async (req, res) => {
  try {
  } catch (err) {
    return res.status(404).json();
  }
};
const findOneTutorial = async (req, res) => {
  try {
  } catch (err) {
    return res.status(404).json();
  }
};
const updateTutorial = async (req, res) => {
  try {
  } catch (err) {
    return res.status(404).json();
  }
};
const deleteTutorial = async (req, res) => {
  try {
  } catch (err) {
    return res.status(404).json();
  }
};
const deleteAllTutorials = async (req, res) => {
  try {
  } catch (err) {
    return res.status(404).json();
  }
};
const bulkCreateTutorials = async (req, res) => {
  try {
  } catch (err) {
    return res.status(404).json();
  }
};
const findAllPublishedTutorials = async (req, res) => {
  try {
  } catch (err) {
    return res.status(404).json();
  }
};
export {
  createTutorial,
  getAllTutorials,
  findOneTutorial,
  updateTutorial,
  deleteTutorial,
  deleteAllTutorials,
  bulkCreateTutorials,
  findAllPublishedTutorials,
};
