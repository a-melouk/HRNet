/* eslint-disable react/prop-types */
import styled from "styled-components";
import records from "../data/employees.json";
// import emptyData from "../data/employees-empty.json";
import Table from "../../../react-array/src/components/Table-copy";

const StyledEmployees = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
  }
`;

const Employees = () => {
  const dataSource = Array.from(records);
  // const dataSource = Array.from(emptyData);
  1;
  const columns = [
    {
      title: "First Name",
      dataIndex: "First name",
      key: "First name",
    },
    {
      title: "Last Name",
      dataIndex: "Last name",
      key: "Last name",
    },
    {
      title: "Birth Date",
      dataIndex: "Birth date",
      key: "Birth date",
    },
    {
      title: "Street",
      dataIndex: "Street",
      key: "Street",
    },
    {
      title: "City",
      dataIndex: "City",
      key: "City",
    },
    {
      title: "State",
      dataIndex: "State",
      key: "State",
    },
    {
      title: "ZIP",
      dataIndex: "ZIP",
      key: "ZIP",
    },
    {
      title: "Department",
      dataIndex: "Department",
      key: "Department",
    },
    {
      title: "Start Date",
      dataIndex: "Start date",
      key: "Start date",
    },
  ];

  return (
    <StyledEmployees>
      <h1>Current employees</h1>
      <Table dataSource={dataSource} columns={columns} />
    </StyledEmployees>
  );
};

export default Employees;
