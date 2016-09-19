import { add, subtract } from "./../actions/actionCreators";

function calculator(state = {}, action) {
    switch (action.type) {
        case "ADD":
            state = Object.assign({}, state, { num: action.num1 });   // Is this mutation?
            break;
    }

    console.log("Run calculator");
    console.log(state);

    return state;   // If it returns the new state, why isn't it updating in the component?
}

export default calculator;
