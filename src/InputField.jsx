import React from 'react';

import Input from './Input';

export default function InputField({ fields, onChange, onClick }) {
  return (
    <>
      <Input
        value={fields.name}
        name="name"
        placeholder="이름"
        onChange={onChange}
      />
      <Input
        value={fields.category}
        name="category"
        placeholder="분류"
        onChange={onChange}
      />
      <Input
        value={fields.address}
        name="address"
        placeholder="주소"
        onChange={onChange}
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
