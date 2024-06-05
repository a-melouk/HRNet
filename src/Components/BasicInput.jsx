import styled from "styled-components";

export const StyledFormInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  &:focus-within {
    z-index: 5;
  }

  span.error-message {
    color: red;
    font-size: 12px;
    display: block;
    margin-top: 2px;
  }
`;

const StyledInput = styled.input`
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #878787;
  box-sizing: border-box;
  display: flex;
  height: 56px;
  justify-content: flex-start;
  margin: 0;
  min-width: 0;
  padding: 16.5px 14px;
  padding-right: 0;

  &:hover {
    border-color: #252525;
  }

  &:active,
  &:focus,
  &:focus-within,
  &:focus-visible {
    border-color: #000;
  }
`;

export const StyledLabel = styled.label`
  color: #27374d;
  font-size: 20px;
  font-weight: 600;
`;

const BasicInput = ({
  htmlFor,
  label,
  inputType,
  inputId,
  inputName,
  value,
  onChange,
}) => {
  return (
    <StyledFormInputLabel>
      <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
      <StyledInput
        type={inputType}
        id={inputId}
        name={inputName}
        value={value}
        onChange={onChange}
        // required
      />
      <span className="error-message"></span>
    </StyledFormInputLabel>
  );
};

export default BasicInput;
