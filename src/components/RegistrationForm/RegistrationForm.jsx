import { ErrorMessage, Field, Form, Formik } from "formik";
import { RegisterUserSchema } from "../../utils/schemas";
import { useDispatch, useSelector } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/operations";
import { toast } from "react-toastify";

import style from "./RegistrationForm.module.css";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(apiRegisterUser(values)).unwrap();
      actions.resetForm();
      toast.success("Successful registration!");
    } catch (err) {
      console.log(err.errorMessage);
      toast.error(err.message || "Something went wrong...");
    }
  };

  return (
    <div className={style.register_form_div}>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={RegisterUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <label className={style.label}>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              className={style.input}
              placeholder="example name"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={style.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={style.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={style.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={style.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="password"
              component="span"
            />
          </label>
          <button className={style.button} type="submit">
            {isLoading ? "Singing Up..." : "Sign Up"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};
