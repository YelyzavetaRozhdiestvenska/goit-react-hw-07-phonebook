import React from 'react';
import { StyledList, ContactItem, DeletButton } from './contactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContact } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = ({ contact }) => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

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
