import styles from "./BtnTema.module.css";

const BtnTema = ({ value, onChange }) => {
  return (
    <label className={styles.root} htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className={styles.slider} />
      <span className={styles.wave} />
    </label>
  );
};

export default BtnTema;
