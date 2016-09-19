import React from "react";
import { connect } from "react-redux";
import Calculator from "./../components/Calculator.jsx";
import { add, subtract } from "./../actions/actionCreators";

const mapStateToProps = (state) => {
    return {
        num1: "Hello"
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add:() => {
            console.log("Execute");
            dispatch(add(1, 2));
        }
    };
};

const CalculatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);

export default CalculatorContainer;
