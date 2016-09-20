import { add, subtract } from "./../actions/actionCreators";

function calculator(state = {}, action) {
    console.log("Inside reducer");
    console.log(action);
    switch (action.type) {
        case "ADD":
            return Object.assign({}, state, { num: action.num1 + action.num2 });
        default:
            return state;
    }
    // If it returns the new state, why isn't it updating in the component?
}

export default calculator;
