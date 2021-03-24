import { alertActionTypes } from "../types/";

//initialAlertState is the initial state for the alertReducer
const initialAlertState = [];

/**
 * alertReducer is a Reducer to modify alert state
 * @param  {state}  state state of the alertService, starts with initialAlertState
 * @param {action} action actions that gets caught by the reducer
 * @return {state} alertState containing list of alerts.
 */
export const alertReducer = (state = initialAlertState, action) => {
  const { type, payload } = action;
  switch (type) {
    case alertActionTypes.SetAlert:
      if (payload) {
        const { id, msg, type, options } = payload;
        return [...state, { id, msg, type, options }];
      }
      return state;
    case alertActionTypes.RemoveAlert:
      const tempData = state.filter(alert => alert.id !== payload);

      return Object.assign([], tempData);
    default:
      return state;
  }
};
