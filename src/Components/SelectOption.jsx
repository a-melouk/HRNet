import Select from "react-select";
const selectStyle = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: "56px",
    border: "2px solid #878787",
    borderRadius: "4px",
    boxShadow: "none",

    "&:hover": {
      borderColor: "#252525",
    },

    "&:active, &:focus,&:focus-within, &:focus-visible": {
      borderColor: "#000",
    },
  }),
};
function SelectOption({ options, name, placeholder, onChange }) {
  return (
    <Select
      options={options}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      styles={selectStyle}
    />
  );
}

export default SelectOption;
