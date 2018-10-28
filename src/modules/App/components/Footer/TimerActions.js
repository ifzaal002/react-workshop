
export const TimerActionsTypes = {
  RESET:'RESET',
  UPDATE:'UPDATE',
};


export const resetTimerAction = () => {
  return {
    type: TimerActionsTypes.RESET
  };

};

export const updateTimerAction = (time) => {
  return {
    type: TimerActionsTypes.UPDATE,
    new_time: time
  };
};