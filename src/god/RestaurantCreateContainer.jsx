import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsForm from './RestaurantsForm';

import {
  addRestaurant,
  changeRestaurantField,
} from './actions';

export default function RestaurantsCreateContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleChange({ name, value }) {
    dispatch(changeRestaurantField({ name, value }));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantsForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
