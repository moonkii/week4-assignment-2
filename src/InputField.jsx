import React from 'react';

import Input from './Input';

export default function InputField({ fields, onChange, onClick }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <>
      <Input
        value={fields.name}
        name="name"
        placeholder="이름"
        onChange={handleChange}
      />
      <Input
        value={fields.category}
        name="category"
        placeholder="분류"
        onChange={handleChange}
      />
      <Input
        value={fields.address}
        name="address"
        placeholder="주소"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        등록
      </button>
    </>
  );
}
