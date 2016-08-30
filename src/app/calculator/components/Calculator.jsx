import React from "react";
import CalculatorButton from "./CalculatorButton.jsx";

class Calculator extends React.Component {
    render() {
        return (
            <div className="row expanded">
                <CalculatorButton num="7" />
                <CalculatorButton num="8" />
                <CalculatorButton num="9" />
                <CalculatorButton num="4" />
                <CalculatorButton num="5" />
                <CalculatorButton num="6" />
                <CalculatorButton num="1" />
                <CalculatorButton num="2" />
                <CalculatorButton num="3" />
            </div>
        ); 
    }
}

export default Calculator;
