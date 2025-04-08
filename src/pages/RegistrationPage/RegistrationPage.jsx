import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import styles from "./Registration.module.css";

export const RegistrationPage = () => {
  return (
    <div className={styles.reister_page_div}>
      <RegistrationForm />
    </div>
  );
};
