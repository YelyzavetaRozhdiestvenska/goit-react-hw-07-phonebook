import { selectContact, selectError, selectIsLoading } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import GlobalStyle from './GlobalStyle';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Phonebook } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 ? <Filter /> : <p>Add contact!</p>}
      {contacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </Phonebook>
  );
};
