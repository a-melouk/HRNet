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

function SelectDate({ name, value, onChange }) {
  return (
    <>
      <DatePicker
        name={name}
        value={value}
        onChange={onChange}
        sx={datepickerStyle}
        format="DD/MM/YYYY"
      />
    </>
  );
}

export default SelectDate;
