export const getContact = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getVisibleContact = state => {
  const contacts = getContact(state);
  const filter = getFilter(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
