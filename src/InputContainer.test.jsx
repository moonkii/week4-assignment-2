import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    fields: {
      name: '',
      category: '',
      address: '',
    },
  }));

  it('listens change event', () => {
    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '마녀주방' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeField',
      payload: {
        name: 'name',
        value: '마녀주방',
      },
    });
  });

  it('listens click event', () => {
    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
  });
});
