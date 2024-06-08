import dayjs from "dayjs";

//Used to validate firstname, lastname, city
function validateTextInputs(fieldValue, fieldName) {
  //make sure that there's no numeric characters in field
  const regex = /[0-9]/;
  if (regex.test(fieldValue)) {
    document.querySelector(
      `#${fieldName} + .error-message`
    ).textContent = `${formatLabel(fieldName)} cannot contain numbers.`;
    return false;
  } else {
    document.querySelector(`#${fieldName} + .error-message`).textContent = "";
    return true;
  }
}

function validateZipCode(zip, minimum, maximum) {
  if (zip < minimum || zip > maximum) {
    document.querySelector(
      `#zip + .error-message`
    ).textContent = `Zip must be between ${minimum} and ${maximum}.`;
    return false;
  } else {
    document.querySelector(`#zip + .error-message`).textContent = "";
    return true;
  }
}

function validateBirthDate(birthDateValue) {
  if (birthDateValue === null) {
    document.querySelector(
      `.error-message.birth-date`
    ).textContent = `Birth date is required.`;
    return false;
  }

  if (birthDateValue.$d == "Invalid Date") {
    document.querySelector(
      `.error-message.birth-date`
    ).textContent = `Please enter a valid birth date.`;
    return false;
  }
  const today = dayjs();
  const eighteenYearsAgo = today.subtract(18, "year");
  const birthDate = dayjs(birthDateValue, "DD/MM/YYYY");
  if (birthDate.isAfter(eighteenYearsAgo)) {
    document.querySelector(
      `.error-message.birth-date`
    ).textContent = `Birth date must be at least 18 years ago.`;
    return false;
  } else {
    document.querySelector(`.error-message.birth-date`).textContent = "";
    return true;
  }
}

function validateStartDate(startDateValue) {
  if (startDateValue === null) {
    document.querySelector(
      `.error-message.start-date`
    ).textContent = `Start date is required.`;
    return false;
  }
  if (startDateValue.$d == "Invalid Date") {
    document.querySelector(
      `.error-message.start-date`
    ).textContent = `Please enter a valid start date.`;
    return false;
  }

  document.querySelector(`.error-message.start-date`).textContent = "";
  return true;
}

function validateSelectOption(fieldName, option) {
  if (option === "") {
    document.querySelector(
      `.error-message.${fieldName}`
    ).textContent = `Please select a ${fieldName}.`;
    return false;
  } else {
    document.querySelector(`.error-message.${fieldName}`).textContent = "";
    return true;
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.querySelector(
      `#email + .error-message`
    ).textContent = `Please enter a valid email address.`;
    return false;
  } else {
    document.querySelector(`#email + .error-message`).textContent = "";
    return true;
  }
}

//Used to transform zipCode ==> Zip Code, firstName ==> First name
export const formatLabel = (label) => {
  return label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

export const validateForm = (formData) => {
  const {
    firstName,
    lastName,
    birthDate,
    emailAddress,
    city,
    state,
    zipCode,
    startDate,
    department,
  } = formData;
  const validFirstName = validateTextInputs(firstName, "firstName");
  const validLastName = validateTextInputs(lastName, "lastName");
  const validBirthDate = validateBirthDate(birthDate);
  const validEmail = validateEmail(emailAddress);
  const validCity = validateTextInputs(city, "city");
  const validState = validateSelectOption("state", state);
  const validZipCode = validateZipCode(zipCode, 501, 99950);
  const validStartDate = validateStartDate(startDate);
  const validDepartment = validateSelectOption("department", department);
  return (
    validFirstName &&
    validLastName &&
    validBirthDate &&
    validEmail &&
    validCity &&
    validState &&
    validZipCode &&
    validStartDate &&
    validDepartment
  );
};

export function stringIsDate(string) {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateRegex.test(string);
}

export const sortDates = (order, a, b) => {
  const dateA = new Date(a);
  const dateB = new Date(b);
  if (order === "ascending") {
    return dateA - dateB;
  } else {
    return dateB - dateA;
  }
};

export const sortString = (order, a, b) => {
  if (order === "ascending") {
    return a > b ? 1 : -1;
  } else {
    return a < b ? 1 : -1;
  }
};
