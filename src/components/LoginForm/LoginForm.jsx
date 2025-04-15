import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginUserSchema } from "../../utils/schemas";
import { useDispatch, useSelector } from "react-redux";
import { apiLoginUser } from "../../redux/auth/operations";
import style from "./LoginForm.module.css";
import { selectUserIsLoading } from "../../redux/auth/selectors";
import { toast } from "react-toastify";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserIsLoading);

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(apiLoginUser(values)).unwrap();
      actions.resetForm();
    } catch (err) {
      const message = err.message || "Something went wrong...";
      actions.setStatus(message);
      toast.error(message);
    }
  };

  return (
    <div className={style.login_form_div}>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={LoginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
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
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};
