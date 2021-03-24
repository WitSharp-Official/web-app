import { authActionTypes } from "../types";

/**
 * Auth Action to login user with email and password, action is caught by authSaga
 * @param  {EmailAndPassword}  payload payload contains email and password.
 * @param {string} email user email.
 * @param {string} password user Password.
 * @return {action} LoginWithEmail action.
 */
const loginWithEmail = payload => ({
  type: authActionTypes.LoginWithEmail,
  payload: payload
});

/**
 * Auth Action to login user with (google sign in), payload is not required, action is caught by authSaga
 * @return {action} LoginWithGoogle action.
 */
const loginWithGoogle = () => ({
  type: authActionTypes.LoginWithGoogle
});

/**
 * Auth Action to login user with (facebook sign in), payload is not required, action is caught by authSaga
 * @return {action} LoginWithFacebook action.
 */
const loginWithFacebook = () => ({
  type: authActionTypes.LoginWithFacebook
});

/**
 * Auth Action to set user after authentication completes, action is caught by authReducer
 * @param  {UserAndAuthToken}  payload payload contains {user and Auth Token}
 * @return {action} SetUser action.
 */
const setUser = payload => ({
  type: authActionTypes.SetUser,
  payload: payload
});

/**
 * Auth Action to Logout user from the app, payload is not required, action is caught by authReducer
 * @return {action} Logout action.
 */
const logoutUser = () => ({
  type: authActionTypes.LogoutUser
});

/**
 * Auth Action to request authenticated user profile and info from firestore, action is caught by authSaga
 * @param  {uid}  payload payload contains user id (uid) of the authenticated user
 * @return {action} RequestUser action.
 */
const requestUser = payload => ({
  type: authActionTypes.RequestUser,
  payload: payload
});

/**
 * Auth Action to request authenticated user profile and info from firestore, action is caught by authSaga
 * @param  {email}  payload payload contains user id (uid) of the authenticated user
 * @return {action} ForgotPassword action.
 */
const forgotPassword = payload => ({
  type: authActionTypes.ForgotPassword,
  payload: payload
});

/**
 * Auth Action to request authenticated user profile and info from firestore, action is caught by authSaga
 * @param  {email}  payload payload contains user id (uid) of the authenticated user
 * @return {action} ForgotPassword action.
 */
const createUserWithEmail = payload => ({
  type: authActionTypes.CreateUserWithEmail,
  payload: payload
});

/**
 * Auth Action to request authenticated user profile and info from firestore, action is caught by authSaga
 * @param  {email}  payload payload contains user id (uid) of the authenticated user
 * @return {action} ForgotPassword action.
 */
const enableLoading = () => ({
  type: authActionTypes.EnableLoading
});

/**
 * Auth Action to request authenticated user profile and info from firestore, action is caught by authSaga
 * @param  {email}  payload payload contains user id (uid) of the authenticated user
 * @return {action} ForgotPassword action.
 */
const disableLoading = () => ({
  type: authActionTypes.DisableLoading
});

/**
 * Auth Action to request authenticated user profile and info from firestore, action is caught by authSaga
 * @param  {email}  payload payload contains user id (uid) of the authenticated user
 * @return {action} ForgotPassword action.
 */
const setError = payload => ({
  type: authActionTypes.SetError,
  payload: payload
});

/**
 * Auth Action to request authenticated user profile and info from firestore, action is caught by authSaga
 * @param  {email}  payload payload contains user id (uid) of the authenticated user
 * @return {action} ForgotPassword action.
 */
const removeError = () => ({
  type: authActionTypes.RemoveError
});

/**
 * Auth Action to request authenticated user profile and info from firestore, action is caught by authSaga
 * @param  {email}  payload payload contains user id (uid) of the authenticated user
 * @return {action} ForgotPassword action.
 */
const checkCurrentUser = () => ({
  type: authActionTypes.CheckCurrentUser
});

//authActions is the main export that combines all the authActions together, action is caught by authSaga
export const authActions = {
  loginWithFacebook,
  loginWithEmail,
  loginWithGoogle,
  setUser,
  logoutUser,
  requestUser,
  forgotPassword,
  createUserWithEmail,
  enableLoading,
  disableLoading,
  setError,
  removeError,
  checkCurrentUser
};
