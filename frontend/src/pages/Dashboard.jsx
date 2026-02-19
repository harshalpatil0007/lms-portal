import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/dashboard", {
      headers: {
        Authorization: token
      }
    })
    .then(res => {
      setStudent(res.data.student);
      setCourses(res.data.courses);
    })
    .catch(() => {
      alert("Unauthorized. Please login.");
    });

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Dashboard</h2>

      {student && (
        <div>
          <p><strong>Email:</strong> {student.email}</p>
        </div>
      )}

      <h3>Available Courses</h3>

      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        courses.map(course => (
          <div key={course._id}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
