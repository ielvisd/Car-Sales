import React from "react";
import { connect } from "react-redux";

import { addFeature } from "../actions/additionalFeaturesAction";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {/* NOTE: Arrow function to use the return value */}
      <button
        onClick={() =>
          props.addFeature({
            id: props.feature.id,
            name: props.feature.name,
            price: props.feature.price
          })
        }
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
