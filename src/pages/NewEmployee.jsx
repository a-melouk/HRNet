import styled from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useContext } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { HRContext } from "../app/HRContext";
import { states } from "../states";
import { StyledFormInputLabel } from "../Components/LabelInput";
import BasicInput from "../Components/BasicInput";
import EmployeeModal from "../Components/EmployeeModal";
import SelectDate from "../Components/SelectDate";
import SelectOption from "../Components/SelectOption";

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
  margin-bottom: 96px;
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
  const { formData, setFormData } = useContext(HRContext);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleStateChange(state) {
    setFormData({ ...formData, state: state.value });
  }

  function handleDepartmentChange(department) {
    setFormData({ ...formData, department: department.value });
  }

  function handleBirthdateChange(date) {
    setFormData({
      ...formData,
      birthDate: dayjs(date).format("DD/MM/YYYY"),
    });
  }

  function handleStartDateChange(date) {
    setFormData({
      ...formData,
      startDate: dayjs(date).format("DD/MM/YYYY"),
    });
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Add a new employee</h1>
        <section>
          <BasicInput
            label="First Name"
            inputType="text"
            inputId="firstName"
            onChange={handleInputChange}
          />

          <BasicInput
            label="Last Name"
            inputType="text"
            inputId="lastName"
            onChange={handleInputChange}
          />

          <StyledFormInputLabel>
            <label htmlFor="birthDate">Birth Date</label>
            <SelectDate name="birthDate" onChange={handleBirthdateChange} />
          </StyledFormInputLabel>

          <BasicInput
            label="Email address"
            inputType="email"
            inputId="email"
            onChange={handleInputChange}
          />

          <BasicInput
            label="Street"
            inputType="text"
            inputId="street"
            onChange={handleInputChange}
          />

          <BasicInput
            label="City"
            inputType="text"
            inputId="city"
            onChange={handleInputChange}
          />

          <StyledFormInputLabel>
            <label htmlFor="state">State</label>
            <SelectOption
              options={stateOptions}
              name="state"
              placeholder="State"
              onChange={handleStateChange}
            />
          </StyledFormInputLabel>

          <BasicInput
            label="ZIP Code"
            inputType="number"
            inputId="zip"
            onChange={handleInputChange}
          />
          <StyledFormInputLabel>
            <label htmlFor="startDate">Start Date</label>
            <SelectDate name="startDate" onChange={handleStartDateChange} />
          </StyledFormInputLabel>

          <StyledFormInputLabel>
            <label htmlFor="department">Department</label>
            <SelectOption
              options={departmentOptions}
              placeholder="Department"
              name="department"
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
