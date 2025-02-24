const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function main() {
  const Db = process.env.ATLAS_URI;
  const client = new MongoClient(Db);
  try {
    await client.connect();
    console.log("Connected to the database");
    const collection = await client.db("FocusApp").collections();
    collection.forEach((collection) =>
      console.log(collection.s.namespace.collection)
    );
  } catch (error) {
    console.log("Error connecting to the database", error);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

main();
