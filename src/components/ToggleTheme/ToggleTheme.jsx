import styles from "./ToggleTheme.module.css";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/themaChange/themeSlice";

const ToggleTema = () => {
  const dispatch = useDispatch();

  return (
    <label className={styles.root} htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        onClick={() => dispatch(toggleTheme())}
        readOnly
      />
      <span className={styles.slider} />
      <span className={styles.wave} />
    </label>
  );
};

export default ToggleTema;
