import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { HiUser } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.div}>
      <div>
        <p className={styles.name}>
          <HiUser className={styles.icon} size="24" />
          {name}
        </p>
        <p className={styles.name}>
          <AiFillPhone className={styles.icon} size="24" />
          {number}
        </p>
      </div>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
