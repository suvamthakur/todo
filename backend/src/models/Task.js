const mongoose = require("mongoose");
const { ALLOWED_PRIORITIES } = require("../utils/constants");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: [2, "Title must be at least 2 characters long"],
      maxlength: [120, "Title can not exceed 120 characters"],
    },
    description: {
      type: String,
      maxlength: [1500, "Description can not exceed 1500 characters"],
    },
    date: {
      type: String,
      required: true,
    },
    startsAt: {
      type: String,
    },
    endsAt: {
      type: String,
    },
    startDateTime: {
      type: Date,
      required: true,
    },
    endDateTime: {
      type: Date,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ALLOWED_PRIORITIES,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
