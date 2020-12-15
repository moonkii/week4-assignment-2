import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();

  const { getByPlaceholderText } = render((
    <Input
      name="이름"
      value=""
      onChange={handleChange}
      placeholder="이름"
    />
  ));

  fireEvent.change(getByPlaceholderText('이름'), {
    target: { name: '이름', value: '마녀주방' },
  });

  expect(handleChange).toBeCalled();
});
