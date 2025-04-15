import { ErrorMessage, Field, Form, Formik } from "formik";
import { addProfileSchema } from "../../utils/schemas";
import styles from "./ContactsForm.module.css";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector((state) => state.contacts.loading);

  const handleSubmit = (values, actions) => {
    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicate) {
      actions.setFieldError("name", "Contact already exists!");
      return;
    }
    const finalUser = {
      ...values,
      id: nanoid(),
    };
    dispatch(addContact(finalUser));
    actions.resetForm();
  };

  return (
    <div className={styles.contact_form_div}>
      <Formik
        initialValues={initialValues}
        validationSchema={addProfileSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name: </span>
            <Field
              type="text"
              name="name"
              className={styles.input}
              placeholder="Name"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span>Number: </span>
            <Field
              className={styles.input}
              name="number"
              type="tel"
              placeholder="+380*******"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="number"
              component="span"
            />
          </label>
          <button className={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add profile"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
