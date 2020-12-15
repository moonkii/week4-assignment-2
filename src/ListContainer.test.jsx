import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
    ],
  }));

  it('renders restaurant list', () => {
    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent(/마녀주방/);
  });
});
