import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import styled from "styled-components";
import BasicInput, { StyledFormInputLabel } from "../Components/BasicInput";
import { StyledLabel } from "../Components/BasicInput";
import { states } from "../states";
import SelectDate from "../Components/SelectDate";
import SelectOption from "../Components/SelectOption";
import dayjs from "dayjs";
import EmployeeModal from "../Components/EmployeeModal";

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 16px; */
  margin-bottom: 96px;
  /* background-color: #fdfdfd; */
  background-color: #fff;
  gap: 16px;

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
  }

  hr {
    border: 1px solid #d4d4d4;
    width: 20%;
    align-self: center;
    margin: 16px 0;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, minmax(45%, 700px));
    column-gap: 40px;
    row-gap: 16px;
    justify-content: space-between;
  }

  button.new-employee {
    align-items: center;
    align-self: center;
    background-color: #2ca77c;
    border-radius: 16px;
    border: none;
    color: #fff;
    display: flex;
    font-size: 24px;
    font-weight: 600;
    justify-content: center;
    padding: 16px 24px;
    margin-top: 8px;
  }

  button.new-employee:hover {
    cursor: pointer;
  }
`;

const NewEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(null);
  const [zip, setZip] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [department, setDepartment] = useState(null);

  function handleStateChange(stateValue) {
    setState(stateValue);
  }

  function handleDepartmentChange(departmentValue) {
    setDepartment(departmentValue);
  }

  const today = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <StyledForm onSubmit={handleSubmit}> */}
      <StyledForm>
        <h1>Add a new employee</h1>
        <section>
          <BasicInput
            htmlFor="firstName"
            label="First Name"
            inputType="text"
            inputId="firstName"
            inputName="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <BasicInput
            htmlFor="lastName"
            label="Last Name"
            inputType="text"
            inputId="lastName"
            inputName="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <StyledFormInputLabel>
            <StyledLabel htmlFor="birthDate">Birth Date</StyledLabel>
            <SelectDate
              date={birthDate}
              setDate={setBirthDate}
              name="birthDate"
              maxDate={today.subtract(18, "year")}
            />
            <span className="error-message birth-date"></span>
          </StyledFormInputLabel>
          <BasicInput
            htmlFor="email"
            label="Email address"
            inputType="email"
            inputId="email"
            inputName="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BasicInput
            htmlFor="street"
            label="Street"
            inputType="text"
            inputId="street"
            inputName="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <BasicInput
            htmlFor="city"
            label="City"
            inputType="text"
            inputId="city"
            inputName="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <StyledFormInputLabel>
            <StyledLabel htmlFor="state">State</StyledLabel>
            <SelectOption
              options={stateOptions}
              name="state"
              placeholder="State"
              value={state}
              onChange={handleStateChange}
            />
          </StyledFormInputLabel>

          <BasicInput
            htmlFor="zip"
            label="Zip"
            inputType="number"
            inputId="zip"
            inputName="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <StyledFormInputLabel>
            <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
            <SelectDate
              date={startDate}
              setDate={setStartDate}
              name="startDate"
            />
          </StyledFormInputLabel>

          <StyledFormInputLabel>
            <StyledLabel htmlFor="department">Department</StyledLabel>
            <SelectOption
              options={departmentOptions}
              placeholder="Department"
              name="department"
              value={department}
              onChange={handleDepartmentChange}
            />
          </StyledFormInputLabel>
        </section>
        <button className="new-employee" type="submit">
          Add employee
        </button>
      </StyledForm>
      <EmployeeModal />
    </LocalizationProvider>
  );
};

export default NewEmployee;
