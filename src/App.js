import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

// NOTE: Step II - Connect the component
// Use the connect function to map our state from the Redux store to the component props
import { connect } from "react-redux";

const App = props => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: []
    },
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 }
    ]
  };

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dispatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// NOTE: Step IIa - Wrap the component in the second connect function call
// NOTE: Step IIb - First function call takes in a function and an object
// NOTE: Step IIbi - the function we pass is usually named mapStateToProps

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, {})(App);
