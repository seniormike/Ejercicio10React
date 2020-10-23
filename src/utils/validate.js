const validateForm = (values, validators) => {
  const err = {};
  validators.forEach((field) => {
    if (field.validators.required && (!values[field.name] || values[field.name].length === 0)) err[field.name] = field.name + " is required";
    if (field.validators.minLength && values[field.name] < field.validators.minLength) err[field.name] = field.name + " is too short";
    if (field.validators.maxLength && values[field.name] > field.validators.minLength) err[field.name] = field.name + " is too long";
  });
  console.log(err);
  return err;
};
export default validateForm;