import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        value={value}
        onChange={onChange}
        placeholder="Search..."
        type="text"
        name="filter"
      ></input>
    </>
  );
};
