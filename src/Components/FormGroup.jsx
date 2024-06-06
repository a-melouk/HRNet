import styled from "styled-components";

export const StyledFormGroup = styled.div`
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

  label {
    color: #27374d;
    font-size: 20px;
    font-weight: 600;
  }
`;
