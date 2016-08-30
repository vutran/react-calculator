import React from "react";
import CalculatorButton from "./CalculatorButton.jsx";

class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <div className="row">
                    <CalculatorButton name="7" />
                    <CalculatorButton name="8" />
                    <CalculatorButton name="9" />
                    <CalculatorButton name="4" />
                    <CalculatorButton name="5" />
                    <CalculatorButton name="6" />
                    <CalculatorButton name="1" />
                    <CalculatorButton name="2" />
                    <CalculatorButton name="3" />
                </div>
            </div>
        ); 
    }
}

export default Calculator;
