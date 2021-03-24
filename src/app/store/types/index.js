// authActionTypes is a object containing action types used by authReducer and authSaga
export const authActionTypes = {
  LoginWithEmail: "auth/loginWithEmail",
  LoginWithGoogle: "auth/loginWithGoogle",
  LoginWithFacebook: "auth/loginWithFacebook",
  LoginWithMicrosoft: "auth/loginWithMicrosoft",
  LogoutUser: "auth/logoutUser",
  RegisterUser: "auth/registerUser",
  RequestUser: "auth/requestUser", // get profile from firestore
  SetUser: "auth/setUser", // set the fetched user
  ForgotPassword: "auth/forgotPassword",
  CreateUserWithEmail: "auth/createUserWithEmail",
  EnableLoading: "auth/enableLoading",
  DisableLoading: "auth/disableLoading",
  SetError: "auth/setError",
  RemoveError: "auth/removeError",
  CheckCurrentUser: "auth/checkCurrentUser"
};

export const alertActionTypes = {
  SetAlert: "alert/setAlert",
  RemoveAlert: "alert/removeAlert"
};
