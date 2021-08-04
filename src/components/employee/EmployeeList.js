import { useHistory } from "react-router-dom";
export default function EmployeeList() {
    let history = useHistory();    
  return (
    <div>
    <button onClick={() => history.push("employees/create")}>✏️</button>
  </div>
  );
}
