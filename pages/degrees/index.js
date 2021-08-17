import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function DegreeList() {
  const [props, setProps] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch("http://localhost:3004/degrees", {
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
            <th>Degree Code</th>
            <th>Degree Level</th>
            <th>Degree Name</th>
          </tr>
        </thead>
        <tbody>
          {props.map((degree) => (
            <tr
              onClick={() => router.push(`/degrees/${degree.identifier}`)}
              className="w3-hover-green"
              key={degree.identifier}
            >
              <td>{degree.identifier}</td>
              <td>{degree.educationalLevel ?? ""}</td>
              <td>{degree.alternateName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DegreeList;
