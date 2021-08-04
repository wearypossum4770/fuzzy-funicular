import { readFileSync, writeFileSync } from "fs";

let data = JSON.parse(
  readFileSync("../../silver-umbrella/users/fixtures/datainit.json")
);
let user = data.map((item) => {
  if (item.model === "users.user") {
    return { ...item.fields };
  }
});
writeFileSync("data.json", JSON.stringify(user));
