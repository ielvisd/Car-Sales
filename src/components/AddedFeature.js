import React from "react";
import { connect } from "react-redux";

import { removeFeature } from "../actions/additionalFeaturesAction";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() =>
          props.removeFeature({
            id: props.feature.id,
            name: props.feature.name,
            price: props.feature.price
          })
        }
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
