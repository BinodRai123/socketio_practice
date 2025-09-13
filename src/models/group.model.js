const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
      unique: true,
    },
    adminId: {
      type: String,
      required: true,
    },
    members: {
      type: [String],
      default: [],
    },
  },
  {
    timeseries: true,
  }
);


const groupModel = mongoose.model("group",groupSchema);

module.exports = groupModel;