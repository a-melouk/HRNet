import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function SelectDate({ date, setDate, name, maxDate }) {
  return (
    <>
      <DatePicker
        value={date}
        onChange={(newValue) => setDate(newValue)}
        name={name}
        maxDate={maxDate}
        sx={{
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
        }}
        format="DD/MM/YYYY"
      />
    </>
  );
}

export default SelectDate;
