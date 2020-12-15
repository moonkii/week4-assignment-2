export function changeField({ name, value }) {
  return {
    type: 'changeField',
    payload: {
      name,
      value,
    },
  };
}

export function addRestaurant() {
  return { type: 'addRestaurant' };
}
