import styled from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useContext, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { HRContext } from "../app/HRContext";
import { states } from "../states";
import { StyledFormGroup } from "../Components/FormGroup";
import BasicInput from "../Components/BasicInput";
import EmployeeModal from "../Components/EmployeeModal";
import SelectDate from "../Components/SelectDate";
import SelectOption from "../Components/SelectOption";
import { validateForm } from "../utils/utils";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm(formData)) {
      handleOpen();
      resetFormInputs();
    }
  }

  function resetFormInputs() {
    setFormData({
      firstName: "",
      lastName: "",
      birthDate: null,
      emailAddress: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      startDate: null,
      department: "",
    });
  }

  function handleStateChange(state) {
    setFormData({ ...formData, state: state });
  }

  function handleDepartmentChange(department) {
    setFormData({ ...formData, department: department });
  }

  function handleBirthdateChange(date) {
    setFormData({
      ...formData,
      // birthDate: dayjs(date).format("DD/MM/YYYY"),
      birthDate: date,
    });
  }

  function handleStartDateChange(date) {
    setFormData({
      ...formData,
      // startDate: dayjs(date).format("DD/MM/YYYY"),
      startDate: date,
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
            fieldName="firstName"
            inputType="text"
            inputId="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />

          <BasicInput
            fieldName="lastName"
            inputType="text"
            inputId="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />

          <StyledFormGroup>
            <label htmlFor="birthDate">Birth Date</label>
            <SelectDate
              name="birthDate"
              value={formData.birthDate}
              onChange={handleBirthdateChange}
            />
            <span className="error-message birth-date"></span>
          </StyledFormGroup>

          <BasicInput
            fieldName="emailAddress"
            inputType="text"
            inputId="email"
            value={formData.emailAddress}
            onChange={handleInputChange}
          />

          <BasicInput
            fieldName="street"
            inputType="text"
            inputId="street"
            value={formData.street}
            onChange={handleInputChange}
          />

          <BasicInput
            fieldName="city"
            inputType="text"
            inputId="city"
            value={formData.city}
            onChange={handleInputChange}
          />

          <StyledFormGroup>
            <label htmlFor="state">State</label>
            <SelectOption
              options={stateOptions}
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleStateChange}
            />
            <span className="error-message state"></span>
          </StyledFormGroup>

          <BasicInput
            fieldName="zipCode"
            inputType="number"
            inputId="zip"
            value={formData.zipCode}
            onChange={handleInputChange}
          />
          <StyledFormGroup>
            <label htmlFor="startDate">Start Date</label>
            <SelectDate
              name="startDate"
              value={formData.startDate}
              onChange={handleStartDateChange}
            />
            <span className="error-message start-date"></span>
          </StyledFormGroup>

          <StyledFormGroup>
            <label htmlFor="department">Department</label>
            <SelectOption
              options={departmentOptions}
              placeholder="Department"
              name="department"
              value={formData.department}
              onChange={handleDepartmentChange}
            />
            <span className="error-message department"></span>
          </StyledFormGroup>
        </section>

        <button className="new-employee" type="submit">
          Add employee
        </button>

        <EmployeeModal open={open} handleClose={handleClose} />
      </StyledForm>
    </LocalizationProvider>
  );
};

export default NewEmployee;
