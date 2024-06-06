import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const datepickerStyle = {
  borderRadius: 1,
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  outline: "none",
  border: "2px solid #878787",
  height: "56px",

  ":hover": {
    borderColor: "#252525",
  },

  ":active, :focus, :focus-within, :focus-visible": {
    borderColor: "#000",
  },
};

function SelectDate({ name, onChange }) {
  return (
    <>
      <DatePicker
        name={name}
        onChange={onChange}
        sx={datepickerStyle}
        format="DD/MM/YYYY"
      />
      <span className="error-message birth-date"></span>
    </>
  );
}

export default SelectDate;
