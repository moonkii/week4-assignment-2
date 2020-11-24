import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantsForm from './RestaurantsForm';

test('RestaurantsForm', () => {
  const restaurant = {
    name: '마법사주방',
    category: '양식',
    address: '서울',
  };

  const handleChange = jest.fn();

  const handleClick = jest.fn();

  const { getByText, getByDisplayValue } = render((
    <RestaurantsForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue(/마법사주방/)).not.toBeNull();
  expect(getByDisplayValue(/양식/)).not.toBeNull();
  expect(getByDisplayValue(/서울/)).not.toBeNull();
  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.change(getByDisplayValue(/서울/), {
    target: { value: '서울시 강남구' },
  });

  expect(handleChange).toBeCalledWith({
    name: 'address',
    value: '서울시 강남구',
  });

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});
