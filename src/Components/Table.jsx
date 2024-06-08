import styled from "styled-components";
import records from "../data/employees.json";
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";
import noSort from "../assets/no-sorting.svg";
import { useState } from "react";
import { stringIsDate, sortDates, sortString } from "../utils/utils";

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
    padding: 8px;
  }
`;

const StyledArrows = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: fit-content;

  img {
    width: 12px;
    height: 22px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const sortField = (records, field, order) => {
  if (stringIsDate(records[0][field])) {
    return (a, b) => sortDates(order, a[field], b[field]);
  } else {
    return (a, b) => sortString(order, a[field], b[field]);
  }
};

function Table({ sorting, setSorting }) {
  function handleArrowClick(event) {
    //Get the header that was clicked
    const header = event.target.innerText;
    // Reset all arrows to no-sort
    const allArrows = document.querySelectorAll("img");
    allArrows.forEach((arrow) => (arrow.src = noSort));

    //If no sort is applied, sort clicked header in ascending order
    if (sorting.sortOrder === "no-sort") {
      setSorting({ sortOrder: "ascending", sortField: header });
      event.target.querySelector("img").src = arrowUp;
      records.sort(sortField(records, header, "ascending"));
    }
    //If header is sorted ascending, sort in descending order
    else if (
      sorting.sortOrder === "ascending" &&
      sorting.sortField === header
    ) {
      setSorting({ sortOrder: "descending", sortField: header });
      event.target.querySelector("img").src = arrowDown;
      records.sort(sortField(records, header, "descending"));
    }
    //If header is sorted descending, or if a different header is clicked, sort in ascending order
    else {
      setSorting({ sortOrder: "ascending", sortField: header });
      event.target.querySelector("img").src = arrowUp;
      records.sort(sortField(records, header, "ascending"));
    }
  }

  const headers = Object.keys(records[0]);
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} onClick={handleArrowClick}>
              {/* <StyledArrows>
                {header} <img src={noSort} />
              </StyledArrows> */}
              <StyledArrows>
                {header}
                {sorting.sortField === header &&
                  sorting.sortOrder === "ascending" && <img src={arrowUp} />}
                {sorting.sortField === header &&
                  sorting.sortOrder === "descending" && <img src={arrowDown} />}
                {sorting.sortField !== header && <img src={noSort} />}
              </StyledArrows>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={`${header}-${index}`}>{record[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
