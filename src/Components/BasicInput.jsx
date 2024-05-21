import styled from "styled-components";

export const StyledFormInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledInput = styled.input`
  border-radius: 4px;
  border: 1px solid #c6c6c6;
  box-sizing: content-box;
  background: none;
  height: 56px;
  margin: 0;
  display: block;
  min-width: 0;
  padding: 16.5px 14px;
  padding-right: 0;
  box-sizing: border-box;

  &:hover,
  &:active {
    border-color: #212121;
  }

  &:focus {
    outline: none;
    border-color: #1976d2;
    border-width: 2px;
  }
`;

export const StyledLabel = styled.label`
  color: #27374d;
  font-size: 20px;
  font-weight: 600;
`;

const BasicInput = ({ htmlFor, label, inputType, inputId, inputName }) => {
  return (
    <StyledFormInputLabel>
      <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
      <StyledInput type={inputType} id={inputId} name={inputName} required />
    </StyledFormInputLabel>
  );
};

export default BasicInput;
