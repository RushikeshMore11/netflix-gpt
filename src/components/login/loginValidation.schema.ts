import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Your password must be greater than 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
      "Password should be least 8 chars, one capital, one small, and one symbol"
    )
    .max(60, "Your password must be less than 60 characters.")
    .required("Password is required"),
});

export default loginValidationSchema;
