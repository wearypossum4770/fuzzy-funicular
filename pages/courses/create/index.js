import { useState, useEffect } from "react";
const generateOption = (pair, index = 0) => (
  <option key={index} value={pair[0]}>
    {pair[1]}
  </option>
);
export default function CreateCourse() {
  let [formData, setFormData] = useState({
    courseCode: null,
    courseName: null,
    numberOfCredits: null,
    courseDescription: null,
    courseMode: null,
    coursePrerequisites: null,
    educationalLevel: null,
    publication: null,
    publisherImprint: null,
    courseWorkload: null,
    instructor: null,
    get courseID() {
      return this.courseCode;
    },
  });
  const handleSubmit = async () => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, courseID: formData.courseCode }),
    };
    try {
      const resp = await fetch("http://localhost:3004/courses", options);
      if (resp.ok) {
        const response = await resp.json();
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    } finally {
      location.reload();
    }
  };
  const handleChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value });
  return (
    <div className="w3-container w3-white">
      <form className="w3-container w3-half">
        <div>
          <label htmlFor="courseCode">Course Code: </label>
          <input
            className="w3-input"
            name="courseCode"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="courseName">Name: </label>
          <input
            className="w3-input"
            name="courseName"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="numberOfCredits">Credit Hours</label>
          <input
            className="w3-input"
            name="numberOfCredits"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="courseDescription">Desription</label>
          <textarea
            className="w3-input"
            name="courseDescription"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="hourseType">Honors Type</label>
          <select
            className="w3-input"
            name="honorsType"
            onChange={(e) => handleChange(e)}
          >
            <option value="NONE">Non-honors</option>
            <option value="honors">Honors Course</option>
            <option value="honorOption">Honor Option Avaiaable</option>
          </select>
        </div>
        <div>
          <label htmlFor="courseLevelType"></label>
          <select
            className="w3-input"
            name="courseLevelType"
            onChange={(e) => handleChange(e)}
          >
            {[
              ["", ""],
              ["Accelerated", "Accelerated"],
              ["AdultBasic", "Adult Basic"],
              ["AdvancedPlacement", "Advanced Placement"],
              ["Basic", "Basic"],
              ["InternationalBaccalaureate", "International Baccalaureate"],
              ["CollegeLevel", "College Level"],
              ["CollegePreparatory", "College Preparatory"],
              ["GiftedTalented", "Gifted Talented"],
              ["Honors", "Honors"],
              ["NonAcademic", "Non-Academic"],
              ["SpecialEducation", "Special Education"],
              ["TechnicalPreparatory", "Technical Preparatory"],
              ["Vocational", "Vocational"],
              ["LowerDivision", "Lower Division"],
              ["UpperDivision", "Upper Division"],
              ["Dual", "Dual"],
              ["GraduateProfessional", "Graduate Professional"],
              ["Regents", "Regents"],
              ["Remedial", "Remedial"],
              ["K12", "K12"],
            ].map((option, index) => generateOption(option, index))}
          </select>
        </div>
        <div>
          <label htmlFor="courseMode">
            Instruction Modality (Online, In-Person, etc)
          </label>
          <select
            className="w3-input"
            name="courseMode"
            onChange={(e) => handleChange(e)}
          >
            {[
              ["", ""],
              ["online", "online"],
              ["onsite", "onsite"],
              ["blended", "blended"],
              ["in-persion", "in-persion"],
              ["synchronous", "synchronous"],
              ["asynchronous", "asynchronous"],
            ].map((option, index) => generateOption(option, index))}
          </select>
        </div>
        <div>
          <label htmlFor="coursePrerequisites"></label>
          <input
            className="w3-input"
            name="coursePrerequisites"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="educationalLevel">Educational Level: </label>
          <select
            className="w3-input"
            name="educationalLevel"
            onChange={(e) => handleChange(e)}
          >
            {[
              ["", ""],
              ["Undergraduate", "Undergraduate"],
              ["Ungraded", "Ungraded"],
              ["LowerDivision", "Lower Division"],
              ["UpperDivision", "Upper Division"],
              ["Vocational", "Vocational"],
              ["TechnicalPreparatory", "Technical Preparatory"],
              ["Graduate", "Graduate"],
              ["Professional", "Professional"],
              ["Dual", "Dual"],
              ["GraduateProfessional", "Graduate Professional"],
            ].map((option, index) => generateOption(option, index))}
          </select>
        </div>
        <div>
          <label htmlFor="publication"></label>
          <input
            className="w3-input"
            name="publication"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="publisherImprint"></label>
          <input
            className="w3-input"
            name="publisherImprint"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="courseWorkload"></label>
          <input
            className="w3-input"
            name="courseWorkload"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="instructor"></label>
          <input
            className="w3-input"
            name="instructor"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="comment"></label>
          <textarea name="comment" onChange={(e) => handleChange(e)}></textarea>
        </div>
        <div>
          <select>
            {[
              ["", ""],
              ["Regular", "Regular"],
              ["Major", "Major"],
              ["AcademicRenewal", "Academic Renewal"],
              ["AdultBasic", "Adult Basic"],
              ["AdvancedPlacement", "Advanced Placement"],
              ["AdvancedStanding", "Advanced Standing"],
              ["Correspondence", "Correspondence"],
              ["ContinuingEducation", "Continuing Education"],
              ["Exemption", "Exemption"],
              ["Equivalence", "Equivalence"],
              ["InternationalBaccalaureate", "International Baccalaureate"],
              ["Military", "Military"],
              ["Remedial", "Remedial"],
              ["CreditByExam", "Credit By Exam"],
              ["HighSchoolTransferCredit", "High School Transfer Credit"],
              ["HighSchoolCreditOnly", "High School Credit Only"],
              ["HighSchoolDualCredit", "High School Dual Credit"],
              ["JuniorHighSchoolCredit", "Junior High School Credit"],
            ].map((option, index) => generateOption(option, index))}
          </select>
        </div>
        <input type="button" value="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
