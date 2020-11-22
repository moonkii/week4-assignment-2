import React from 'react';

export default function Input({
  name, value, onChange, placeholder,
}) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
