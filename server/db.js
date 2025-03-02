const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const connectDB = async () => {
  const Db = process.env.ATLAS_URI;
  try {
    const conn = await mongoose.connect(Db);
    // const collection = await client.db("FocusApp").collections();
    // collection.forEach((collection) =>
    //   console.log(collection.s.namespace.collection)
    // );
  } catch (error) {
    console.log("Error connecting to the database", error);
    process.exit(1);
    console.log("Connection closed");
  }
};

module.exports = connectDB;
