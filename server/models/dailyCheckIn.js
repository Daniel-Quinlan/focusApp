const mongoose = require("mongoose");

const dailyCheckInSchema = new mongoose.Schema({
  Physically: {
    type: Number,
    required: [true, "Daily physical check-in is required"],
  },
  Mentally: {
    type: Number,
    required: [true, "Daily mental check-in is required"],
  },
  Socially: {
    type: Number,
    required: [true, "Daily social check-in is required"],
  },
});

const dailyCheckInModel = mongoose.model("dailyCheckIn", dailyCheckInSchema);
module.exports = dailyCheckInModel;
