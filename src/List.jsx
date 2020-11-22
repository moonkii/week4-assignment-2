import React from 'react';

function getKey({ name, index }) {
  return `${name}-${index}`;
}

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant, index) => {
        const { name, category, address } = restaurant;
        return (
          <li key={getKey({ name, index })}>
            {name}
            {' | '}
            {category}
            {' | '}
            {address}
          </li>
        );
      })}
    </ul>
  );
}
