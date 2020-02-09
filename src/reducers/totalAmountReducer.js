export const initialState = {
  additionalPrice: 0,
  car: {
    features: []
  }
};

// NOTE: 'state = initialState' as opposed to just 'state' is a JavaScript trick that anticipates a non-matching action being passed in (as is the case when Redux launches) to set state equal to that initialState.

export const totalAmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      // Check if it's already added
      const search = what =>
        state.car.features.find(element => element.name === what);
      // And you can check whether the item was found or not.

      if (search(action.payload.name)) {
        return {
          ...state
        };
      } else {
        return {
          ...state,
          car: {
            price: (state.additionalPrice += action.payload.price),
            features: [...state.car.features, action.payload]
          }
        };
      }

    default:
      return state;
  }
};
