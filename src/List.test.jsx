import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const restaurants = [
    {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
  ];

  it('renders restaurants list', () => {
    const { container } = render((
      <List restaurants={restaurants} />
    ));

    expect(container).toHaveTextContent(/마녀주방/);
  });
});
