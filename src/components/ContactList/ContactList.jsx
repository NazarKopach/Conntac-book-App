import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDeleteProfile = (profileId) => {
    dispatch(deleteContact(profileId));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteProfile={handleDeleteProfile}
            />
          </li>
        ))
      ) : (
        <p className={styles.noContacts}>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
