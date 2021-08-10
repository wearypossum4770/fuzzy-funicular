import axios from "axios";
// https://www.bezkoder.com/node-js-express-sequelize-mysql/
async function main() {
  try {
    let instance = axios({
      url: "/api/tutorials",
      method: "post",
      baseURL: "http://localhost:3003/",
      method: "post",
      data: {
        title: "javascript",
        description: "Javascript tutorial",
        published: false,
      },
    });
    let response = await instance.post();
    console.log(response);
  } catch (err) {
    console.log(err.message);
  }
}

main();
