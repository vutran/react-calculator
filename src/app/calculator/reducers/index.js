// In reducers/index.js, all reducers are imported and combined.
// To that, the combineReducers() from the redux lib is used.


import { combineReducers } from "redux";


const allReducers = combineReducers({
    /* The reducers here */
});

export default allReducers;
