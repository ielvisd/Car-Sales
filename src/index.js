import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { testReducer } from "./reducers/testReducer";
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import "./styles.scss";

// NOTE: Step 1 - create a store and connect it to our app
// Use createStore function

function reducer() {
  return {
    title: "Hello world! I'm in the Redux store!"
  };
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // NOTE: Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware()
  // NOTE: other store enhancers if any
);
const store = createStore(reducer, enhancer);
console.log(store.getState());

// NOTE: Step 1a - Provide the store to your app
// Use teh <Provider > component and pass in your store.

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
