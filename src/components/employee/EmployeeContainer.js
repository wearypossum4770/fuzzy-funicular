export default function EmployeeContainer({ tableData }) {
  const generateTable = (data) => {
    let table = [];
    data.forEach((row) => {
      table.push(
        <tr key={row.key}>
          <td>{row.firstName}</td>
          <td>{row.middleName}</td>
          <td>{row.lastName}</td>
          <td>{row.madienName}</td>
          <td>{row.payType}</td>
          <td>{row.clockID}</td>
          <td>{row.regularRate}</td>
        </tr>
      );
    });
    return table;
  };
  return (
    <table className="w3-table-all">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Madien Name</th>
          <th>Pay Type</th>
          <th>Clock ID</th>
          <th>Regular Rate</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        {generateTable(tableData)}
      </tbody>
    </table>
  );
}
