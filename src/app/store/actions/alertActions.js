import { alertActionTypes } from "../types";

/**
 * Auth Action to login user with email and password, action is caught by authSaga
 * @param  {EmailAndPassword}  payload payload contains email and password.
 * @param {string} email user email.
 * @param {string} password user Password.
 * @return {action} LoginWithEmail action.
 */
const setAlert = payload => ({
  type: alertActionTypes.SetAlert,
  payload: payload
}); //payload: {id, msg, type, options}

const removeAlert = payload => ({
  type: alertActionTypes.RemoveAlert,
  payload: payload
}); //payload: {id}

//authActions is the main export that combines all the authActions together, action is caught by authSaga
export const alertActions = {
  setAlert,
  removeAlert
};
