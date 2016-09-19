import { add, subtract } from "./../actions/actionCreators";

function calculator(state = 3, action) {
    switch (action.type) {
        case "ADD":
            state = Object.assign({}, state);
            break;
    }

    console.log("Run calculator");
    console.log(action);

    return state;
}

export default calculator;
