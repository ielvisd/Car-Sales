export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    features: []
  }
};

// NOTE: 'state = initialState' as opposed to just 'state' is a JavaScript trick that anticipates a non-matching action being passed in (as is the case when Redux launches) to set state equal to that initialState.

export const totalAmountReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    default:
      return state;
  }
};
