import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsCreateContainer from './RestaurantCreateContainer';

jest.mock('react-redux');

describe('RestaurantsCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '주방',
      category: '양식',
      address: '서울',
    },
  }));

  it('renders restaurant list', () => {
    const { getByText, getByDisplayValue } = render((
      <RestaurantsCreateContainer />
    ));

    expect(getByDisplayValue(/주방/)).not.toBeNull();
    expect(getByDisplayValue(/양식/)).not.toBeNull();
    expect(getByDisplayValue(/서울/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();

    fireEvent.change(getByDisplayValue(/서울/), {
      target: { value: '서울시 강남구' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeRestaurantField',
      payload: {
        name: 'address',
        value: '서울시 강남구',
      },
    });

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });
});
