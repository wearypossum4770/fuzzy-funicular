import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const getDegreeDetails = (id) =>
  props.filter((course) => course.courseID === id);
export default function CourseDetails() {
  const [props, setProps] = useState();
  const router = useRouter();
  const { course_id } = router.query;
  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch("http://localhost:3004/courses", {
          mode: "cors",
        });
        if (resp.ok) {
          let data = await resp
            .json()
            .filter((course) => course.courseID === course_id);
          setProps(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return props?.map((course) => (
    <div>
      <div>Code: {course.courseCode}</div>
      <div>Name: {course.courseName}</div>
      <div>Prerequisites: {course.coursePrerequisites}</div>
      <div>Credit Hours: {course.numberOfCredits}</div>
    </div>
  ));
}
