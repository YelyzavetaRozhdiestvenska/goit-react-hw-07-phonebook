import React from 'react';
import { StyledList, ContactItem, DeletButton } from './contactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContact } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());

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
