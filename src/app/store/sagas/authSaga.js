import { put, takeLatest, call, delay } from "redux-saga/effects";
import { authActions } from "../actions/authActions";
import { authActionTypes } from "../types";
import { myFirebase, googleAuth, facebookAuth } from "../../../firebase";
import { alertActions } from "../actions/alertActions";
import { v4 as uuidv4 } from "uuid";

/**
 * loginWithGoogleSaga takes action LoginWithGoogle and tries to authenticate the user using GoogleAuth
 * @return {void} RequestUser with UID with action type SetUser and payload {User, AccessToken}.
 */
function* loginWithGoogleSaga() {
  try {
    yield put(authActions.enableLoading());
    const auth = myFirebase.auth();
    const result = yield call([auth, auth.signInWithPopup], googleAuth);

    const { uid } = result.user;
    yield put(authActions.requestUser(uid));
  } catch (error) {
    const { message } = error;
    yield put(authActions.setError(message));
    yield put(authActions.disableLoading());
    yield delay(6000);
    yield put(authActions.removeError());
  }
}

/**
 * loginWithFacebookSaga takes action LoginWithFacebook and tries to authenticate the user using FacebookAuth
 * @return {void} RequestUser with UID with action type SetUser and payload {User, AccessToken}.
 */
function* loginWithFacebookSaga() {
  try {
    yield put(authActions.enableLoading());
    const auth = myFirebase.auth();
    const result = yield call([auth, auth.signInWithPopup], facebookAuth);

    const { uid } = result.user;
    yield put(authActions.requestUser(uid));
  } catch (error) {
    const { message } = error;
    yield put(authActions.setError(message));
    yield put(authActions.disableLoading());
    yield delay(6000);
    yield put(authActions.removeError());
  }
}

/**
 * loginWithEmailSaga takes action LoginWithEmail and tries to authenticate the user using {Email and Password}
 * @param {email, password} action.payload email and password of the user as payload
 * @return {void} RequestUser with UID with action type SetUser and payload {User, AccessToken}.
 */
function* loginWithEmailSaga(action) {
  try {
    yield put(authActions.enableLoading());
    const auth = myFirebase.auth();
    const { email, password } = action.payload;
    const result = yield call(
      [auth, auth.signInWithEmailAndPassword],
      email,
      password
    );

    const { uid } = result.user;
    yield put(authActions.requestUser(uid));
  } catch (error) {
    const { message } = error;
    yield put(authActions.setError(message));
    yield put(authActions.disableLoading());
    const temp = yield delay(6000);
    yield put(authActions.removeError());
  }
}

/**
 * createUserWithEmailSaga takes action createUserWithEmail and tries to creates a new user using {Email and Password}
 * @param {email, password} action.payload email and password of the new user as payload
 * @return {void} RequestUser with UID, requests the newly created user
 */
function* createUserWithEmailSaga(action) {
  try {
    yield put(authActions.enableLoading());
    const { email, password } = action.payload;
    const auth = myFirebase.auth();
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    );

    const { uid } = result.user;
    yield put(authActions.requestUser(uid));
    // yield put(authActions.disableLoading());
  } catch (error) {
    const { message } = error;
    yield put(authActions.setError(message));
    yield put(authActions.disableLoading());
    const temp = yield delay(6000);
    yield put(authActions.removeError());
  }
}

/**
 * forgotPasswordSaga takes action forgotPassword and sends a password recovery email to the user
 * @param {email} action.payload email user as payload
 * @return {void} sends an recovery email to the given email address
 */
function* forgotPasswordSaga(action) {
  try {
    const { email } = action.payload;
    const auth = myFirebase.auth();
    yield call([auth, auth.sendPasswordResetEmail], email);

    const id = uuidv4();
    yield put(
      alertActions.setAlert({
        id: id,
        msg: "Password Reset mail sent to your mailbox",
        type: "success"
      })
    );
    yield delay(5000);
    yield put(alertActions.removeAlert(id));
    //email sent
  } catch (error) {
    const id = uuidv4();
    yield put(
      alertActions.setAlert({ id: id, msg: error.message, type: "error" })
    );
    yield delay(5000);
    yield put(alertActions.removeAlert(id));
  }
}

/**
 * requestUserSaga takes action requestUser and gets the user profile from firestoreDB
 * @param {uid} action.payload uid of the user as payload
 * @return {void} stores the profile data into redux state
 */
function* requestUserSaga(action) {
  try {
    const snapshot = yield call(getDocument, `Users/${action.payload}`);
    const data = snapshot.data();
    console.log(JSON.stringify(data));
    yield put(
      authActions.setUser({ user: data, authToken: "", isAuthorized: true })
    );
    yield put(authActions.disableLoading());
  } catch (error) {
    // console.log("error in request user saga ", error.msg);
    const { message } = error;
    yield put(authActions.setError(message));
    yield put(authActions.disableLoading());
    const temp = yield delay(6000);
    yield put(authActions.removeError());
  }
}

function* checkCurrentUserSaga() {
  try {
    yield delay(2000);
    yield put(authActions.enableLoading());

    const currentUser = getCurrentUser();

    yield put(authActions.enableLoading());
    if (currentUser !== null) {
      const id = uuidv4();
      yield put(
        alertActions.setAlert({
          id: id,
          msg: "Loading saved user",
          type: "success"
        })
      );
      yield delay(5000);
      yield put(alertActions.removeAlert(id));

      console.log("user exist = ", currentUser.uid);
      const snapshot = yield call(getDocument, `Users/${currentUser.uid}`);
      const { uid } = snapshot.data();
      yield put(authActions.requestUser(uid));
    } else {
      yield put(authActions.disableLoading());
      const id = uuidv4();
      yield put(
        alertActions.setAlert({
          id: id,
          msg: "User does not exist please login",
          type: "error"
        })
      );
      yield delay(5000);
      yield put(alertActions.removeAlert(id));
    }
  } catch (error) {
    yield put(authActions.disableLoading());
    console.log(error);
  }
}

function getCurrentUser() {
  return myFirebase.auth().currentUser;
}

/**
 * gets Document from the database with the provided reference
 * @param {documentRef} action.payload reference to the document
 * @return {void} returns snapshot of the document
 */
function* getDocument(documentRef) {
  const doc = getDocumentRef(documentRef);
  return yield call([doc, doc.get]);
}
const getDocumentRef = pathOrRef => {
  return typeof pathOrRef === "string"
    ? myFirebase.firestore().doc(pathOrRef)
    : pathOrRef;
};

// const getCollectionRef = (rsf, pathOrRef) => {
//   if (!!rsf.app.firestore)
//     console.log(
//       "Firestore isn't installed. " +
//         "Did you forget to `import '@firebase/firestore'`? " +
//         "See https://redux-saga-firebase.js.org/ for more information."
//     );

//   return typeof pathOrRef === "string"
//     ? rsf.app.firestore().collection(pathOrRef)
//     : pathOrRef;
// };

export function* authSaga() {
  yield takeLatest(authActionTypes.LoginWithGoogle, loginWithGoogleSaga);
  yield takeLatest(authActionTypes.LoginWithEmail, loginWithEmailSaga);
  yield takeLatest(authActionTypes.LoginWithFacebook, loginWithFacebookSaga);
  yield takeLatest(authActionTypes.RequestUser, requestUserSaga);
  yield takeLatest(authActionTypes.ForgotPassword, forgotPasswordSaga);
  yield takeLatest(authActionTypes.CheckCurrentUser, checkCurrentUserSaga);
  yield takeLatest(
    authActionTypes.CreateUserWithEmail,
    createUserWithEmailSaga
  );
}
