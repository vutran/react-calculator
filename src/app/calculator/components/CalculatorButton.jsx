import React from "react";

class CalculatorButton extends React.Component {
    render() {
        let btnProp = {
            num: this.props.num
        };

        return (
            <button type="button" className="button">{ btnProp.num }</button>
        );
    }
}

export default CalculatorButton;
