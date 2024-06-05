import Select from "react-select";
// function SelectOption({ options, name, placeholder, value, onChange }) {
function SelectOption({ options, name, placeholder }) {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      name={name}
      id={name}
      styles={{
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
      }}
    />
  );
}

export default SelectOption;
