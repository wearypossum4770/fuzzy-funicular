// https://stackabuse.com/using-sequelize-orm-with-nodejs-and-express
import Sequelize from "sequelize";
import { noteInit } from "../models/note.model.sql.js";
import { tutorialInit } from "../models/tutorials.models.sql.js";
import { userInit } from "../models/user.model.sql.js";
let isConnected = false;
const sequelize = new Sequelize({
  logging: console.log,
  dialect: "sqlite",
  storage: "database.sqlite",
});
let testConnection = async () => {
  try {
    await sequelize.authenticate();
    isConnected = true;
    console.log("SQL connection has been established successfully.");
  } catch (error) {
    console.error("SQL Unable to connect to the database:", error);
  }
};
export function main() {
  testConnection();
  if (isConnected) {
    sequelize.sync({ force: true });
    console.log(`Database & tables created!`);
  }
  console.log(`Is connection establshed:${isConnected}`);
}
export default function sqlDatabase(closeConnection = null) {
  if (closeConnection) sequelize.close();
  const Tutorial = sequelize.define("Tutorials", tutorialInit),
    Users = sequelize.define("Users", userInit),
    Note = sequelize.define("Notes", noteInit);
  return { Tutorial: Tutorial, Users: Users, Note: Note };
}

// const Note = sequelize.define('notes', { note: Sequelize.TEXT, tag: Sequelize.STRING });

// sequelize.sync({ force: true }).then(() => {
// console.log(`Database & tables created!`);
// Note.bulkCreate([
// { note: 'pick up some bread after work', tag: 'shopping' },
// { note: 'remember to write up meeting notes', tag: 'work' },
// { note: 'learn how to use node orm', tag: 'work' }
// ]).then(()=>Note.findAll()).then(notes =>console.log(notes[0]));
// });
