import { LoginForm } from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={styles.login_pages_div}>
      <LoginForm />;
    </div>
  );
};
