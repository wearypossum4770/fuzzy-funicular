import { useState, useEffect } from "react";
const generateOption = (pair) => <option value={pair[0]}>{pair[1]}</option>;
const createOptions = (arr) =>
  arr.map((option) => (
    <option
      key={option.courseCode}
      value={option.courseCode}
    >{`${option.courseID}    ${option.courseName}`}</option>
  ));
const CreateDegree = () => {
  const [props, setProps] = useState([]);
  let [formData, setFormData] = useState({
    identifier: null,
    competencyRequired: null,
    credentialCategory: null,
    educationalLevel: null,
    alternateName: null,
    educationalCredentialAwarded: null,
    programPrerequisites: null,
    educationRequirements: [],
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value });
  const handleSelect = ({ target: { value } }) =>
    setFormData({
      ...formData,
      educationRequirements: [...formData.educationRequirements, value],
    });
  const hanleSubmit = async () => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      const resp = await fetch(`http://localhost:3004/degrees/`, options);
      if (resp.ok) {
        const response = await resp.json();
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };
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
    <form onSubmit={hanleSubmit}>
      <div>
        <label htmlFor="identifier">Code: </label>
        <input onChange={handleChange} name="identifier" />
      </div>
      <div>
        <label htmlFor="alternateName">Program Name:</label>
        <input onChange={handleChange} name="alternateName" />
      </div>
      <div>
        <label htmlFor="competencyRequired">Competency:</label>
        <input onChange={handleChange} name="competencyRequired" />
      </div>
      <div>
        <label htmlFor="credentialCategory">Credential Category: </label>
        <input onChange={handleChange} name="credentialCategory" />
      </div>
      <div>
        <label htmlFor="educationalLevel">
          Program Level (BS, CERT, etc...):{" "}
        </label>
        <select
          id="educationalLevel"
          name="educationalLevel"
          onChange={(e) => handleChange(e)}
        >
          {[
            ["", ""],
            ["completionCertificate", "Certificate of Completion"],
            ["associateOfArts", "Associate of Arts"],
            ["associateDegree", "Associate Degree"],
            ["associateOfScience", "Associate of Science"],
          ].map((option) => generateOption(option))}
        </select>
      </div>
      <div>
        <label htmlFor="educationalCredentialAwarded">
          Credential Awarded:{" "}
        </label>
        <input onChange={handleChange} name="educationalCredentialAwarded" />
      </div>
      <div>
        <label htmlFor="programPrerequisites">Program Prerequisites: </label>
        <input onChange={handleChange} name="programPrerequisites" />
      </div>
      <div>
        <label htmlFor="educationRequirements">Required Courses: </label>
        <input
          name="educationRequirements"
          defaultValue={[...new Set(formData.educationRequirements)]}
        />
      </div>
      <div>
        <div>
          <select multiple onChange={(e) => handleSelect(e)}>
            {createOptions(props)}
          </select>
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default CreateDegree;
