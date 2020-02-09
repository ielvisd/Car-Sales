export const initialState = {
  additionalPrice: 0,
  car: {
    features: []
  }
};

// NOTE: 'state = initialState' as opposed to just 'state' is a JavaScript trick that anticipates a non-matching action being passed in (as is the case when Redux launches) to set state equal to that initialState.

export const totalAmountReducer = (state = initialState, action) => {
  const search = what =>
    state.car.features.find(element => element.name === what);
  switch (action.type) {
    case "ADD_FEATURE":
      // And you can check whether the item was found or not.
      // Check if it's already added

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
    case "REMOVE_FEATURE":
      // Check if it's already added
      // const search = what =>
      //   state.car.features.find(element => element.name === what);
      // And you can check whether the item was found or not.

      console.log("state.car.features: ", state.car.features);

      console.log("action.payload", action.payload);

      if (search(action.payload.name)) {
        let index = state.car.features.indexOf(search(action.payload.name));

        console.log("index is: ", index);

        state.car.features.splice(index, 1);

        console.log("state is: ", state);

        return {
          ...state,
          car: {
            price: (state.additionalPrice -= action.payload.price),
            features: [...state.car.features]
          }
        };
      } else {
        return {
          ...state
        };
      }
    default:
      return state;
  }
};
