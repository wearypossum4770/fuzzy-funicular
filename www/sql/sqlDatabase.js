import { readFileSync } from "fs";
// https://stackabuse.com/using-sequelize-orm-with-nodejs-and-express
import { resolve } from "path";
import Sequelize from "sequelize";
import { userInit } from "./models/user.model.js";
export default  function sqlDatabase(closeConnection = null) {
  let isConnected = false;
  let __dirname = resolve("./");

  let userinit = JSON.parse(readFileSync(`${__dirname}/src/data/dummy.json`));
  let userList = [];
  let testConnection = async () => {
    try {
      await sequelize.authenticate();
      isConnected = true;
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  const sequelize = new Sequelize({
    logging: console.log,
    dialect: "sqlite",
    storage: "database.sqlite",
  });
const main = async ()=>{
  try{
    const Users = sequelize.define("Users", userInit);
    testConnection();
    if (closeConnection) {
      sequelize.close();
    }
    await sequelize.sync({ force: true });
    console.log(`Database & tables created!`);
  
    await Users.bulkCreate(userList)
    let users = await Users.findAll()
    userList.push(users)
  }catch(err){console.log("ERROR OCCURED\n\n")}
}
main()
const Note = sequelize.define('notes', { note: Sequelize.TEXT, tag: Sequelize.STRING });


sequelize.sync({ force: true }).then(() => {
console.log(`Database & tables created!`);
Note.bulkCreate([
{ note: 'pick up some bread after work', tag: 'shopping' },
{ note: 'remember to write up meeting notes', tag: 'work' },
{ note: 'learn how to use node orm', tag: 'work' }
]).then(()=>Note.findAll()).then(notes =>console.log(notes[0]));
});
  console.log(userList)
  return 
}
