import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const getDegreeDetails = (id) =>
  props.filter((degree) => degree.identifier === id);
export default function DegreeDetails() {
  const [props, setProps] = useState([]);
  const [courses, setCourses] = useState([]);
  const router = useRouter();
  const { degree_id } = router.query;
  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch("http://localhost:3004/degrees", {
          mode: "cors",
        });
        if (resp.ok) {
          let response = await resp.json();
          let data = response?.filter(
            (degree) => degree.identifier === degree_id
          );
          setProps(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {props?.map((degree) => (
        <div key={degree.identifier}>
          <div>Code :{degree.identifier ?? "TBD"}</div>
          <div>Name: {degree.alternateName ?? "TBD"}</div>
          <div>Competency: {degree.competencyRequired ?? "TBD"}</div>
          <div>Credential Category :{degree.credentialCategory ?? "TBD"}</div>
          <div>Educational Level :{degree.educationalLevel ?? "TBD"}</div>
          <div>
            Credential Awarded :{degree.educationalCredentialAwarded ?? "TBD"}
          </div>
          <div>
            Program Prerequisites :{degree.programPrerequisites ?? "TBD"}
          </div>
        </div>
      ))}
      <div>
        Required Courses :
        {props[0]?.educationRequirements?.map((course, index) => (
          <ul>
            <li key={index}>{course}</li>
          </ul>
        )) ?? "TBD"}
      </div>
    </div>
  );
}
