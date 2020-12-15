import React from 'react';

import { render, fireEvent } from '@testing-library/react';

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

  it('listens change event', () => {
    const { getByPlaceholderText } = render((
      <InputField
        fields={fields}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { name: '이름', value: '새식당' },
    });

    expect(handleChange).toBeCalled();
  });

  it('listens click event', () => {
    const { getByText } = render((
      <InputField
        fields={fields}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
