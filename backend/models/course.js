const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    default: "Admin"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports =
  mongoose.models.Course ||
  mongoose.model("Course", courseSchema);
