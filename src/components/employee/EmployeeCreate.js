import { useState } from "react";
export default function EmployeeCreate() {
  const [employee, setEmployee] = useState({
    date_of_birth: null,
    gender: null,
    phone_number: null,
    start_date: null,
    end_date: null,
  });
  const handleChange= ({target:{name,value}}) =>setEmployee({...employee, [name]:value})
  return (
    <form>
      <div>
        <label htmlFor="date_of_birth">
          Date of Birth:
          <input onChange={handleChange} type="date" name="date_of_birth" />
        </label>
      </div>
      <div>
        <label htmlFor="gender">
          Gender:
          <select name="gender"onChange={handleChange}>
            <option value="M">
              I identify as a male or a man (i.e. male, cis-gender male), and
              prefer to be called sir
            </option>

            <option value="F">
              I identify as a female or a woman (i.e. female, cis-gender
              female), and prefer to be called ma'am.
            </option>

            <option value="MTF">
              Assigned male at birth, but currently identify as female.
            </option>

            <option value="FTM">
              Assigned female at birth but currently identify as male.
            </option>

            <option value="NBN">
              Neither male nor female, somewhere in between.
            </option>

            <option value="none">No Selection, Declined To Answer</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="phone_number">
          Phone Number:
          <input onChange={handleChange} name="phone_number" />
        </label>
      </div>
      <div>
        <label htmlFor="start_date">
          Start Date:
          <input onChange={handleChange} type="date" name="start_date" />
        </label>
      </div>
      <div>
        <label htmlFor="end_date">
          End Date:
          <input type="date" name="end_date" />
        </label>
      </div>
    </form>
  );
}
