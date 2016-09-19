import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Calculator from "./../components/Calculator.jsx";
import * as actionCreators from "./../actions/actionCreators";

function mapStateToProps(state) {
    return {
        num: state.num
    };
}

function mapDispatchToProps(dispatch) {
    // Bind all action creators to dispatch
    return bindActionCreators(actionCreators, dispatch);
}

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

export default CalculatorContainer;
