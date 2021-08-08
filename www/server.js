"use strict";
import { exec } from "child_process";
import optimus from "connect-image-optimus";
import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";
import admin from "sriracha";
import util from "util";
import { hideFields, json_url_config, locals } from "./config/extras.js";
import exerciseRouter from "./routers/exercises.js";
import blogPostRouter from "./routers/posts.js";
import userRouter from "./routers/users.js";
import sqlDatabase from "./sql/sqlDatabase.js";
const execute = util.promisify(exec);
let desktop = "sudo service mongodb start";
let chromebook =
  "sudo mkdir /var/lib/mongo && sudo mkdir /var/log/mongodb && sudo chown `whoami` /var/lib/mongo && sudo chown `whoami` /var/log/mongodb && mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log && sudo systemctl start mongod && sudo systemctl daemon-reload && sudo systemctl enable mongod";
async function subprocess(command) {
  try {
    const { stdout, stderr } = await execute(command);
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);
  } catch (err) {
    console.error(err);
  }
}
let { CURRENT_OPERATING_SYSTEM } = process.env;
if (CURRENT_OPERATING_SYSTEM === "DESKTOP") {
  subprocess(desktop);
} else if (CURRENT_OPERATING_SYSTEM === "CHROMEBOOK") {
  subprocess(chromebook);
}
var staticPath = path.dirname(".") + "/static/";
const PORT = process.env.PORT || 3003;
const productionMode = process.env.NODE_ENV === "production";
// noSqlDatabase();
sqlDatabase();
const app = express(locals);
app.use(cors());
app.use(optimus(staticPath));
app.use(express.static("files"));
app.use(express.urlencoded(json_url_config));
app.use(express.json(json_url_config));
app.get("/", (req, res) => {
  res.json("Hello World!");
});
app.use("/no/admin", admin({ hideFields: hideFields }));
app.use("/no/exercise", exerciseRouter);
app.use("/no/users", userRouter);
app.use("/no/blog", blogPostRouter);
const server = app.listen(PORT, () =>
  console.log(`EXPRESS Server is running on port:${PORT}`)
);
setInterval(
  () =>
    server.getConnections((err, connections) =>
      console.log(`${connections} connections currently open`)
    ),
  100000
);
process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
function shutDown() {
  console.log("\nReceived kill signal, shutting down gracefully");
  console.log(`\nClosing app on port: ${PORT}`);
  server.close(() => {
    console.log("\nClosed out remaining connections");
    console.log("\nHTTP server closed");
    process.exit(0);
  });
  setTimeout(() => {
    console.error(
      "Could not close connections in time, forcefully shutting down"
    );
    process.exit(1);
  }, 10000);
  server.getConnections((err, connections) => {
    connections.forEach((curr) => curr.end());
    setTimeout(() => connections.forEach((curr) => curr.destroy()), 5000);
  });
}
