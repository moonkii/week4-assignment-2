import React from 'react';

import { render } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const fields = {
    name: '',
    category: '',
    address: '',
  };

  it('renders inputs and buttons', () => {
    const { getByPlaceholderText, getByText } = render((
      <InputField
        fields={fields}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('주소')).not.toBeNull();
    expect(getByText('등록')).not.toBeNull();
  });
});
