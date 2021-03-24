import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { alertReducer } from "../reducers/alertReducer";
export const rootReducer = combineReducers({
  auth: authReducer,
  alerts: alertReducer
});
