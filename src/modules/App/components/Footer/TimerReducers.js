import {TimerActionsTypes} from "./TimerActions";


export const timerReducer = (state = {time: new Date().getTime()}, action) => {
  switch (action.type) {
    case TimerActionsTypes.RESET:
      return {...state, time: action.new_time};
    case TimerActionsTypes.UPDATE:
      return {...state, time: action.new_time};
  }
  return state;
};

