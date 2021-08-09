import mongoose from "mongoose";
export default async function noSqlDatabase() {
  let PRE = "MongoDB status is";
  try {
    const URI =
      process.env.MONGO_URL || "mongodb://127.0.0.1:27017/glowingGuide";
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;
    let { readyState } = connection;
    connection.once("open", () =>
      console.log("MongoDB database connection established successfully")
    );
    console.log(readyState); //logs 0
    connection.on(
      "connecting",
      () =>
        console.log(
          `${PRE} connecting: ${readyState}\n${readyState}`
        ) /**logs 2*/
    );
    connection.on(
      "connected",
      () =>
        console.log(
          `${PRE} connected: ${readyState}\n${readyState}`
        ) /**logs 1*/
    );
    connection.on(
      "disconnecting",
      () =>
        console.log(
          `${PRE} disconnecting: ${readyState}\n${readyState}`
        ) /**logs 3*/
    );
    connection.on(
      "disconnected",
      () =>
        console.log(
          `${PRE} disconnected: ${readyState}\n${readyState}`
        ) /**logs 0*/
    );
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
