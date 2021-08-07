import mongoose from "mongoose";
export default async function database() {
  try {
    const URI =
      process.env.MONGO_URL || "mongodb://127.0.0.1:27017/glowingGuide";
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("MongoDB database connection established successfully");
    });
    console.log(connection.readyState); //logs 0
    connection.on("connecting", () => {
      console.log(`MongoDB status is connecting: ${connection.readyState}`);
      console.log(connection.readyState); //logs 2
    });
    connection.on("connected", () => {
      console.log(`MongoDB status is connected: ${connection.readyState}`);
      console.log(connection.readyState); //logs 1
    });
    connection.on("disconnecting", () => {
      console.log(`MongoDB status is disconnecting: ${connection.readyState}`);
      console.log(connection.readyState); // logs 3
    });
    connection.on("disconnected", () => {
      console.log(`MongoDB status is disconnected: ${connection.readyState}`);
      console.log(connection.readyState); //logs 0
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
