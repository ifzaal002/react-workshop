import {combineReducers} from "redux";

import {timerReducer as timer} from "./TimerReducers"

const rootReducer = combineReducers({
  timer,
});

export default rootReducer
