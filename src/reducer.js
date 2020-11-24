const initialState = {
  fields: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

function reducer(state = initialState, action = {}) {
  if (action.type === 'changeField') {
    const { name, value } = action.payload;

    return {
      ...state,
      fields: {
        ...state.fields,
        [name]: value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { name, category, address } = state.fields;

    const valid = name && category && address;

    if (!valid) {
      return state;
    }

    return {
      ...state,
      fields: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [
        ...state.restaurants,
        {
          name,
          category,
          address,
        },
      ],
    };
  }

  return state;
}

export default reducer;
