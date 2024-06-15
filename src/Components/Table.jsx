/* eslint-disable react/prop-types */
import styled from "styled-components";
import records from "../data/employees.json";
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";
import noSort from "../assets/no-sorting.svg";
import { stringIsDate, sortDates, sortString } from "../utils/utils";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid black;

  thead {
    border: 1px solid black;
  }

  th,
  td {
    padding: 8px 10px;
    white-space: nowrap;
  }

  th:hover {
    cursor: pointer;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  .selected {
    background-color: #eee;
  }
`;

const StyledArrows = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: fit-content;
  justify-content: flex-start;
  text-align: left;

  img {
    width: 12px;
    height: 22px;
  }
`;

const sortField = (records, field, order) => {
  if (stringIsDate(records[0][field])) {
    return (a, b) => sortDates(order, a[field], b[field]);
  } else {
    return (a, b) => sortString(order, a[field], b[field]);
  }
};

const getIndexOfHeaderInTable = (headers, header) => {
  return headers.indexOf(header);
};

const emphasizeSelectedColumn = (headers, header) => {
  //Remove selected class from previous header
  const previousSelectedHeader = document.querySelector("th.selected");
  if (previousSelectedHeader)
    previousSelectedHeader.classList.remove("selected");
  //Remove selected class from previous tds
  const allTds = document.querySelectorAll("td");
  allTds.forEach((td) => td.classList.remove("selected"));

  //Add selected class to clicked header and its corresponding column
  const selectedColumn = getIndexOfHeaderInTable(headers, header);
  const rows = document.querySelectorAll("tr");
  rows.forEach((row) => {
    row.children[selectedColumn].classList.add("selected");
  });
};

function Table({ sorting, setSorting }) {
  function handleHeaderClick(event) {
    const thElement = event.currentTarget;
    const header = thElement.innerText;

    const imgElement = thElement.querySelector("img");

    // Reset all arrows to no-sort
    const allArrows = document.querySelectorAll("img");
    allArrows.forEach((arrow) => (arrow.src = noSort));
    //If no sort is applied, sort clicked header in ascending order
    if (sorting.sortOrder === "no-sort") {
      setSorting({ sortOrder: "ascending", sortField: header });
      imgElement.src = arrowUp;
      records.sort(sortField(records, header, "ascending"));
      emphasizeSelectedColumn(Object.keys(records[0]), header);
    }
    //If header is sorted ascending, sort in descending order
    else if (
      sorting.sortOrder === "ascending" &&
      sorting.sortField === header
    ) {
      setSorting({ sortOrder: "descending", sortField: header });
      imgElement.src = arrowDown;
      records.sort(sortField(records, header, "descending"));
      emphasizeSelectedColumn(Object.keys(records[0]), header);
    }
    //If header is sorted descending, or if a different header is clicked, sort in ascending order
    else {
      setSorting({ sortOrder: "ascending", sortField: header });
      imgElement.src = arrowUp;
      records.sort(sortField(records, header, "ascending"));
      emphasizeSelectedColumn(Object.keys(records[0]), header);
    }

    const selectedColumn = getIndexOfHeaderInTable(headers, header);
    const rows = document.querySelectorAll("tr");
    rows.forEach((row) => {
      row.children[selectedColumn].classList.add("selected");
    });
  }

  const headers = Object.keys(records[0]);
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} onClick={(event) => handleHeaderClick(event)}>
              <StyledArrows>
                {header}
                {sorting.sortField === header ? (
                  sorting.sortOrder === "ascending" ? (
                    <img src={arrowUp} />
                  ) : (
                    <img src={arrowDown} />
                  )
                ) : (
                  <img src={noSort} />
                )}
              </StyledArrows>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td
                key={`${header}-${index}`}
                // className={selectedColumn === cellIndex ? 'selected' : ''}
              >
                {record[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
