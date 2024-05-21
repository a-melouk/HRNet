import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import BasicInput from "../Components/BasicInput";
import Select from "react-select";

import { states } from "../states";

const options = states.map((state) => ({
  value: state.abbreviation,
  label: state.name,
}));

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 40%;
  /* gap: 12px; */

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const NewEmployee = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const today = new Date();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledForm>
        <h1>Create an employee</h1>
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

        <label htmlFor="birthDate">Birth Date:</label>
        <DatePicker
          label="DD/MM/YYYY"
          value={birthDate}
          onChange={(newValue) => setBirthDate(newValue)}
          minDate={dayjs(today).subtract(100, "year")}
          maxDate={dayjs(today).subtract(18, "year")}
          name="birthDate"
          sx={{ marginBottom: 1.5 }}
          format="DD/MM/YYYY"
        />

        <label htmlFor="startDate">Start Date:</label>
        <DatePicker
          label="DD/MM/YYYY"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          minDate={dayjs(today).subtract(10, "year")}
          maxDate={dayjs(today).add(1, "year")}
          sx={{ marginBottom: 1.5 }}
          format="DD/MM/YYYY"
        />

        <fieldset>
          <legend>Address</legend>
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

          <BasicInput
            htmlFor={"zip"}
            label={"Zip"}
            inputType={"number"}
            inputId={"zip"}
            inputName={"zip"}
          />

          <Select options={options} placeholder="State" />
        </fieldset>
      </StyledForm>
    </LocalizationProvider>
  );
};

export default NewEmployee;
