export const initialState = {
  test: true
};

// NOTE: 'state = initialState' as opposed to just 'state' is a JavaScript trick that anticipates a non-matching action being passed in (as is the case when Redux launches) to set state equal to that initialState.

export const testReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    default:
      return state;
  }
};
