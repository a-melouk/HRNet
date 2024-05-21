import styled from "styled-components";

const StyledInput = styled.input`
  margin-bottom: 12px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
`;

const BasicInput = ({ htmlFor, label, inputType, inputId, inputName }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label} :</label>
      <StyledInput type={inputType} id={inputId} name={inputName} required />
    </>
  );
};

export default BasicInput;
