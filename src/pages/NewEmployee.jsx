import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import BasicInput, { StyledFormInputLabel } from "../Components/BasicInput";
import { StyledLabel } from "../Components/BasicInput";
import Select from "react-select";
import { states } from "../states";

const stateOptions = states.map((state) => ({
  value: state.abbreviation,
  label: state.name,
}));

const departmentOptions = [
  { value: "Engineering", label: "Engineering" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "Human Resources", label: "Human Resources" },
  { value: "Legal", label: "Legal" },
];

const StyledForm = styled.form`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 32px;

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    justify-content: space-around;
  }

  button.new-employee {
    background-color: #2ca77c;
    align-items: center;
    border-radius: 16px;
    color: #fff;
    display: flex;
    font-size: 24px;
    font-weight: 600;
    justify-content: center;
    padding: 16px 32px;
    width: max-content;
    align-self: center;
    border: none;
  }
`;

const NewEmployee = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const today = new Date();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledForm>
        <h1>Add a new employee</h1>

        <section>
          <BasicInput
            htmlFor="firstName"
            label="First Name"
            inputType="text"
            inputId="firstName"
            inputName="firstName"
          />
          <BasicInput
            htmlFor="lastName"
            label="Last Name"
            inputType="text"
            inputId="lastName"
            inputName="lastName"
          />
          <StyledFormInputLabel>
            <StyledLabel htmlFor="birthDate">Birth Date</StyledLabel>
            <DatePicker
              label="DD/MM/YYYY"
              value={birthDate}
              onChange={(newValue) => setBirthDate(newValue)}
              minDate={dayjs(today).subtract(100, "year")}
              maxDate={dayjs(today).subtract(18, "year")}
              name="birthDate"
              sx={{ marginBottom: 1.5, borderRadius: 8 }}
              format="DD/MM/YYYY"
            />
          </StyledFormInputLabel>
          <BasicInput
            htmlFor="email"
            label="Email address"
            inputType="email"
            inputId="email"
            inputName="email"
          />
        </section>

        <hr />

        <section>
          <BasicInput
            htmlFor="street"
            label="Street"
            inputType="text"
            inputId="street"
            inputName="street"
          />
          <BasicInput
            htmlFor={"city"}
            label={"City"}
            inputType={"text"}
            inputId={"city"}
            inputName={"city"}
          />

          <StyledFormInputLabel>
            <StyledLabel htmlFor="state">State</StyledLabel>
            <Select
              options={stateOptions}
              name="state"
              id="state"
              placeholder="State"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: "1px solid #c6c6c6",
                  height: "56px",
                  borderRadius: "8px",
                  zIndex: state.isFocused ? 1 : 0,
                }),
              }}
            />
          </StyledFormInputLabel>

          <BasicInput
            htmlFor={"zip"}
            label={"Zip"}
            inputType={"number"}
            inputId={"zip"}
            inputName={"zip"}
          />
        </section>

        <hr />

        <section>
          <StyledFormInputLabel>
            <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
            <DatePicker
              label="DD/MM/YYYY"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              minDate={dayjs(today).subtract(10, "year")}
              maxDate={dayjs(today).add(1, "year")}
              sx={{ marginBottom: 1.5 }}
              format="DD/MM/YYYY"
            />
          </StyledFormInputLabel>

          <StyledFormInputLabel>
            <StyledLabel htmlFor="department">Department</StyledLabel>
            <Select
              options={departmentOptions}
              placeholder="Department"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: "1px solid #c6c6c6",
                  height: "56px",
                  borderRadius: "8px",
                  zIndex: state.isFocused ? 1 : 0,
                }),
              }}
            />
          </StyledFormInputLabel>
        </section>

        <hr />

        <button className="new-employee" type="submit">
          Add employee
        </button>
      </StyledForm>
    </LocalizationProvider>
  );
};

export default NewEmployee;
