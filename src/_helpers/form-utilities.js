export const validateFormValues = (formValues) => {
  const errors = {};

  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //email
  if (!formValues.email) {
    errors.email = "Email is required!";
  } else if (!emailPattern.test(formValues.email)) {
    errors.email = "This is not a valid email format!";
  }

  //pasword

  if (!formValues.password) {
    errors.password = "Password is required!";
  } else if (formValues.password.lenght < 6) {
    errors.password = "This is not a valid password format!";
  }

  return errors;
};
