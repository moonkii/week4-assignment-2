const initialFields = {
  name: '',
  category: '',
  address: '',
};

const initialState = {
  fields: initialFields,
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
      fields: initialFields,
      restaurants: [
        ...state.restaurants,
        { name, category, address },
      ],
    };
  }

  return state;
}

export default reducer;
