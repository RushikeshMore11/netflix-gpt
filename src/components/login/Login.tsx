import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import "./login.scss";
import Header from "../header/Header";
import loginValidationSchema from "./loginValidation.schema";
export interface ILoginValues {
  email: string;
  password: string;
}
const logInInitialValues: ILoginValues = {
  email: "",
  password: "",
};

const Login = () => {
  const handleSubmit = ({ email, password }: ILoginValues) => {
    console.log({ email, password });
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <Header />
        <Formik
          initialValues={logInInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="login__wrapper__form">
            <div className="login__wrapper__form__container">
              <h2 className="login__wrapper__form__container__title">
                Sign in
              </h2>
              <div className="login__wrapper__form__container__content">
                <div className="login__wrapper__form__container__content__field">
                  <div className="login__wrapper__form__container__content__field__inputField">
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="login__wrapper__form__container__content__field__error"
                  />
                </div>
                <div className="login__wrapper__form__container__content__field">
                  <div className="login__wrapper__form__container__content__field__inputField">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="login__wrapper__form__container__content__field__error"
                  />
                </div>

                <button
                  className="login__wrapper__form__container__content__button"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
