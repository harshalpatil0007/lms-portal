const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Course = require("../models/course");
const Student = require("../models/student");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const student = await Student.findById(req.student.id).select("-password");
    const courses = await Course.find();

    res.json({
      student,
      courses
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
