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
    ).textContent = `${fieldName} must be at least ${minLength} characters long.`;
  } else {
    document.querySelector(`#${fieldName} + .error-message`).textContent = "";
  }
}

function validateZipCode(zip, minimum, maximum) {
  if (zip < minimum || zip > maximum) {
    document.querySelector(
      `#zip + .error-message`
    ).textContent = `Zip must be between ${minimum} and ${maximum}.`;
  } else {
    document.querySelector(`#zip + .error-message`).textContent = "";
  }
}

function validateBirthDate(birthDateValue) {
  const today = dayjs();
  const eighteenYearsAgo = today.subtract(18, "year");
  if (dayjs(birthDateValue).isAfter(eighteenYearsAgo)) {
    document.querySelector(
      `.birth-date`
    ).textContent = `Birth date must be at least 18 years ago.`;
  } else {
    document.querySelector(`.birth-date`).textContent = "";
  }
}
