import { authActionTypes } from "../types";

//initialAuthState is the initial state for the authReducer
const initialAuthState = {
  authToken: undefined,
  user: undefined,
  isAuthorized: false,
  loading: false,
  error: undefined
};

/**
 * authReducer is a Reducer to modify auth state
 * @param  {state}  state state of the authService, starts with initialAuthState
 * @param {action} action action that gets caught by the reducer
 * @return {state} authState contains user and authToken.
 */
export const authReducer = (state = initialAuthState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authActionTypes.SetUser:
      // console.log(
      //   "payload in auth reducer SetUser = ",
      //   JSON.stringify(payload)
      // );
      if (payload) {
        const { user, authToken, isAuthorized } = payload;
        return {
          ...state,
          user: user,
          authToken: authToken,
          isAuthorized: isAuthorized
        };
      }
      return state;
    case authActionTypes.Logout:
      return {
        ...state,
        user: undefined,
        authToken: undefined,
        isAuthorized: false
      };
    case authActionTypes.EnableLoading:
      return { ...state, loading: true };
    case authActionTypes.DisableLoading:
      return { ...state, loading: false };
    case authActionTypes.SetError:
      return { ...state, error: payload };
    case authActionTypes.RemoveError:
      return { ...state, error: null };
    default:
      return state;
  }
};
