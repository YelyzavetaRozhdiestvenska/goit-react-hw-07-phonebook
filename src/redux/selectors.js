export const getContact = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getError = state => state.contacts.error;

export const getIsLoading = state => state.contacts.isLoading;

export const getVisibleContact = state => {
  const contacts = getContact(state);
  const filter = getFilter(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
