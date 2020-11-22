import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    fields: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [],
  }));

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });
});
