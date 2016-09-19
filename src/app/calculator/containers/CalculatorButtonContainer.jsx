import React from "react";

import { add, subtract } from "./../actions/actionCreators";

class CalculatorButton extends React.Component {
    render() {
        let btnProp = {
            num: this.props.num,
            click: this.props.click || null
        };

        return (
            <button type="button" className="button" onClick={ btnProp.click }>{ btnProp.num }</button>
        );
    }
}

// const mapStateToProps = function (state) {
//   return {state};
// }

// const CalculatorApp = connect(mapStateToProps)(Calculator);

// inject onClick *and* dispatch
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//     onClick: () => dispatch(add())
//   };
// }

export default CalculatorButton;
