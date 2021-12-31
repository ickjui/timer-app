import { combineReducers } from "redux";

import timersReducer from "./timersReducer";
import selectedTimerReducer from "./selectedTimerReducer";

export default combineReducers({
    timers: timersReducer, //array
    selectedTimer: selectedTimerReducer, //int/number
});