const initialState = {
  fields: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [
    {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
  ],
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
