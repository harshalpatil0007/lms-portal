const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("LMS API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//const connectDB = require("./config/db");

dotenv.config();
connectDB();

const Course = require("./models/course");

app.get("/add-course", async (req, res) => {
  const course = new Course({
    title: "React Basics",
    description: "Learn React step by step",
  });

  await course.save();
  res.send("Course added!");
});

const courseRoutes = require("./routes/courseRoutes");
app.use("/api/courses", courseRoutes);

