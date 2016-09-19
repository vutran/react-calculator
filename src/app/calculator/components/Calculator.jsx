import React, { PropTypes } from "react";
import CalculatorButton from "./CalculatorButton.jsx";

class Calculator extends React.Component {
    render() {
        return (
            <div className="row expanded">
                <span>{ this.state.num1 }</span>
                {/*<CalculatorButton num="7" />
                <CalculatorButton num="8" />
                <CalculatorButton num="9" />
                <CalculatorButton num="4" />
                <CalculatorButton num="5" />
                <CalculatorButton num="6" />
                <CalculatorButton num="1" />
                <CalculatorButton num="2" />
                <CalculatorButton num="3" />
                <CalculatorButton num="+" />*/}
                <button type="button" className="button" onClick={ this.props.add }>Add</button>
            </div>
        ); 
    }
}

export default Calculator;
