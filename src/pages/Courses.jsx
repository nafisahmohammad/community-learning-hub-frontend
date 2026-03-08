import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/courses/")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div style={{ padding: "32px" }}>
      <h2>Courses</h2>

      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        courses.map((course) => (
          <div key={course.id} style={{ border: "1px solid #ddd", padding: "16px", marginTop: "10px" }}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))
      )}
    </div>
  );
}