// NOTE: Step III - Build action creator functions to create and dispatch actions (dispatching happens under the hood).

// NOTE: 1 - Actions objects - have a type property to tell the reducer how to update sate. Sometimes have a payload property to pass data to the reducer.

// NOTE: 2 - Action creators - Functions that return action objects.

// NOTE: 3 - Action types - A variable to save us from horrible misspelling errors that are really hard to find and debug.

// NOTE: Action Creator
export const addFeature = name => {
  console.log("featureName is: ", name);
  // NOTE: Action object
  return {
    type: "ADD_FEATURE",
    payload: name
  };
};

// Step IIIa - import the action into your component
// Step IIIb - pass the AC into the object in the connect function call
