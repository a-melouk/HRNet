import styled from "styled-components";
import employees from "../data/employees.json";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid black;

  thead {
    border: 1px solid black;
  }

  th {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    padding: 8px;
  }

  td {
    /* border: 1px solid black; */
    padding: 8px;
  }
`;
function Table() {
  const headers = Object.keys(employees[0]);
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={`${header}-${index}`}>{employee[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
