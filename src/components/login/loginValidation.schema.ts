import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Your password must be greater than 4 characters.")
    .max(60, 'Your password must be less than 60 characters.')
    .required("Password is required"),
});

export default loginValidationSchema;
