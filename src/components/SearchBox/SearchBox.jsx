import { changeFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.query);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.div}>
      <p className={styles.serch_box_text}>Find contacts by name</p>
      <input
        className={styles.input}
        value={filter}
        type="text"
        placeholder="Enter name..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
