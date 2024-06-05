import styled from "styled-components";
import Table from "../Components/Table";

const StyledEmployees = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  /* padding: 16px; */

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
  }
`;

const Employees = () => {
  return (
    <StyledEmployees>
      <h1>Current employees</h1>
      <Table />
    </StyledEmployees>
  );
};

export default Employees;
