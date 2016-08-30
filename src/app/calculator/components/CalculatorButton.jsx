import React from "react";
import classnames from "classnames";

class CalculatorButton extends React.Component {
    render() {
        let btnProp = {
            name: this.props.name,
            click: this.props.click,
            classNames: classnames([
                "button",
                "calculator__button",
                "calculator__button--" + this.props.name
            ])
        };

        return (
            <button type="button" className={ btnProp.classNames } onClick={ btnProp.click }>
                { btnProp.name }
            </button>
        );
    }
}

export default CalculatorButton;
