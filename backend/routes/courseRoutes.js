const express = require("express");
const router = express.Router();
const {
  addCourse,
  getCourses,
  getCourseById,
} = require("../controllers/courseController");

router.post("/add", addCourse);
router.get("/", getCourses);
router.get("/:id", getCourseById);

module.exports = router;
