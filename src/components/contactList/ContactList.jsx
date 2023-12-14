import React from 'react';
import { StyledList, ContactItem, DeletButton } from './contactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContacts } from 'redux/operations';

export const ContactList = ({ contact }) => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));

  return (
    <StyledList>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <DeletButton onClick={handleDelete}>Delete</DeletButton>
        </ContactItem>
      ))}
    </StyledList>
  );
};
