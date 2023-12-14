import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;

// export const getVisibleContact = state => {
//   const contacts = getContact(state);
//   const filter = getFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
