import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import InputField from './InputField';

import {
  addRestaurant,
  changeField,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { fields } = useSelector((state) => ({
    fields: state.fields,
  }));

  function handleChangeField(event) {
    const { name, value } = event.target;

    dispatch(changeField({ name, value }));
  }

  function handleClickAddRestaurants() {
    dispatch(addRestaurant());
  }

  return (
    <InputField
      fields={fields}
      onChange={handleChangeField}
      onClick={handleClickAddRestaurants}
    />
  );
}
