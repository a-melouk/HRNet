import dayjs from "dayjs";

function handleSubmit(event) {
  event.preventDefault();
  // const data = new FormData(event.target);
  // const firstName = data.get("firstName");
  // const lastName = data.get("lastName");
  // const birthDate = data.get("birthDate");
  // const email = data.get("email");
  // const street = data.get("street");
  // const city = data.get("city");
  // const state = data.get("state");
  // const zip = data.get("zip");
  // const startDate = data.get("startDate");
  // const department = data.get("department");

  // validateBasicInput(firstName, "firstName", 2);
  // validateBasicInput(lastName, "lastName", 2);
  // validateBasicInput(street, "street", 2);
  // validateBasicInput(city, "city", 2);
  // validateZipCode(zip, 501, 99950);
  // validateBirthDate(birthDate);
}

function validateBasicInput(fieldValue, fieldName, minLength) {
  if (fieldValue.length < minLength) {
    document.querySelector(
      `#${fieldName} + .error-message`
    ).textContent = `${formatLabel(
      fieldName
    )} must be at least ${minLength} characters long.`;
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
  } else {
    document.querySelector(`.error-message.start-date`).textContent = "";
    return true;
  }
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
    street,
    city,
    state,
    zipCode,
    startDate,
    department,
  } = formData;
  const validFirstName = validateBasicInput(firstName, "firstName", 2);
  const validLastName = validateBasicInput(lastName, "lastName", 2);
  const validBirthDate = validateBirthDate(birthDate);
  const validEmail = validateEmail(emailAddress);
  const validStreet = validateBasicInput(street, "street", 2);
  const validCity = validateBasicInput(city, "city", 2);
  const validState = validateSelectOption("state", state);
  const validZipCode = validateZipCode(zipCode, 501, 99950);
  const validStartDate = validateStartDate(startDate);
  const validDepartment = validateSelectOption("department", department);
  return (
    validFirstName &&
    validLastName &&
    validBirthDate &&
    validEmail &&
    validStreet &&
    validCity &&
    validState &&
    validZipCode &&
    validStartDate &&
    validDepartment
  );
};
