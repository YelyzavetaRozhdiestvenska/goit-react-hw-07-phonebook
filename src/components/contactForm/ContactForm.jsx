import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledLabel, StyledButton } from './contactForm.styled';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getVisibleContact } from 'redux/selectors';

const phoneRegExp =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Number(xxx-xx-xx)!')
    .min(9, 'Too Short!')
    .required('Required'),
});

export function ContactForm() {
  const allContacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (allContacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already in contacts`);
    }
    dispatch(addContact({ ...values, id: nanoid() }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledLabel>Name</StyledLabel>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <StyledLabel>Number</StyledLabel>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
          <StyledButton type="">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
}
