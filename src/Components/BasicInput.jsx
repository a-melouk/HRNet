import styled from "styled-components";
import { StyledFormGroup } from "./FormGroup";
import { formatLabel } from "../utils/utils";

const StyledInput = styled.input`
  align-items: center;
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

const BasicInput = ({ fieldName, inputType, inputId, value, onChange }) => {
  return (
    <StyledFormGroup>
      <label htmlFor={inputId}>{formatLabel(fieldName)}</label>
      <StyledInput
        type={inputType}
        id={inputId}
        name={fieldName}
        value={value}
        onChange={onChange}
        // required
      />
      <span className="error-message"></span>
    </StyledFormGroup>
  );
};

export default BasicInput;
