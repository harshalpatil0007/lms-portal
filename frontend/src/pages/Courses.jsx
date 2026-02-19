import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Course Listing</h2>

      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        courses.map(course => (
          <div
            key={course._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px"
            }}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
          </div>
        ))
      )}
    </div>
  );
}
