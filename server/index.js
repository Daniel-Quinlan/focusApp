const express = require("express");
const connectDB = require("./db.js");
const dailyCheckInModel = require("./models/dailyCheckIn.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.get("/", async (req, res) => {
  const dailyCheckIn = await dailyCheckInModel.find();
  res.json(dailyCheckIn);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
