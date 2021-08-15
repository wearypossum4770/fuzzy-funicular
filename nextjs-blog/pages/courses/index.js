import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function CourseList() {
  const [props, setProps] = useState();
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch("http://localhost:3004/courses", {
          mode: "cors",
        });
        if (resp.ok) {
          setProps(await resp.json());
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="w3-container">
      <table>
        <thead>
          <tr className="w3-light-grey w3-hover-red">
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Course Prerequisites</th>
            <th>Course Hours</th>
          </tr>
        </thead>
        <tbody>
          {props?.map((course) => (
            <tr
              className="w3-hover-green"
              key={course.courseID}
              onClick={() => router.push(`/courses/${course.courseCode}`)}
            >
              <td>{course.courseCode}</td>
              <td>{course.courseName}</td>
              <td>{course.coursePrerequisites}</td>
              <td>{course.numberOfCredits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
