import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import EmployeeContainer from "./EmployeeContainer";
export default function EmployeeList() {
  const [tableData, setTableData] = useState();
  const [needsFetch, setNeedsFetch] = useState(true);
  let history = useHistory();
  let employees = useFetchData(needsFetch, "employees/");
  let users = useFetchData(needsFetch, "users/");
  let { response: employeeResponse, error: employeeError } = employees;
  let { response: usersResponse, error: usersError } = users;
  useEffect(() => {
    let data = [];
    let table = [];
    if (employeeResponse && usersResponse) {
      employeeResponse.forEach((emp,index) => {
        let _user = usersResponse.filter((user) => user._id === emp.user).pop();
        if (_user) {
          data.push({key:index, ...emp, ..._user });
        }
      });
      setNeedsFetch(false);
      setTableData(data);
    }
  }, [employeeResponse, usersResponse]);
  return (
    <div>
      <button onClick={() => history.push("employees/create")}>✏️</button>
      <div>{!needsFetch && <EmployeeContainer tableData={tableData} />}</div>
    </div>
  );
}
