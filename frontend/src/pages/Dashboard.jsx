import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        courses.map(course => (
          <div key={course._id}>
            <Link to={`/course/${course._id}`}>
              <h3>{course.title}</h3>
            </Link>
            <p>{course.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
