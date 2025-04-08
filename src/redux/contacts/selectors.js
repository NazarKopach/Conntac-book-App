import { createSelector } from "reselect";
import { selectNameFilter } from "../filters/selectors";

export const selectContactsIsLoading = (state) => state.contacts.loading;
export const selectContactsError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
