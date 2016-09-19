import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";

import store from "./calculator/store";
import CalculatorContainer from "./calculator/containers/CalculatorContainer.jsx";

// const userReducer = (state = {}, action) => {
//     switch(action.type) {
//         case "changeUser":
//             state = Object.assign({}, state, { name: action.payload });
//             break;

//         case "changeAge":
//             state = Object.assign({}, state, { age: action.payload });
//             break;
//     }

//     return state;
// };

// const tweetsReducer = (state = [], action) => {
//     return state;
// };

// const reducers = combineReducers({
//     user: userReducer,
//     tweets: tweetsReducer
// });

// store.dispatch({ type: "changeUser" , payload: "Person" });
// store.dispatch({ type: "changeAge" , payload: 35 });
// store.dispatch({ type: "changeAge" , payload: 36 });

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CalculatorContainer />
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
