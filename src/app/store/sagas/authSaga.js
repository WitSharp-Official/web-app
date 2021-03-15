import { put, takeLatest, call, delay } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import { authActions } from "../actions/authActions";
import { authActionTypes } from "../types";
import { myFirebase, googleAuth, firestoreDB } from "../../../firebase";

/**
 * loginWithGoogleSaga takes action LoginWithGoogle and tries to authenticate the user using GoogleAuth
 * @return {action} SetUser with action type SetUser and payload {User, AccessToken}.
 */
const usersRef = myFirebase.firestore().collection("Users");

function* loginWithGoogleSaga() {
  try {
    const auth = myFirebase.auth();
    const result = yield call([auth, auth.signInWithPopup], googleAuth);

    // console.log(JSON.stringify(result.user), "something ");
    yield put(
      authActions.setUser({ user: result.user, authToken: "kljalksdjf" })
    );
    yield put(authActions.requestUser(result.user.uid));
  } catch (error) {
    // const error_message = { code: error.code, message: error.message };
    console.log(error.message);
    // yield put({ type: AUTHENTICATION_FAILED, error: error_message });
  }
}

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

    // console.log(JSON.stringify(result.user), "something ");
    // yield put(
    //   authActions.setUser({ user: result.user, authToken: "kljalksdjf" })
    // );
    const { uid } = result.user;
    yield put(authActions.requestUser(uid));
    // yield put(authActions.disableLoading());
  } catch (error) {
    // const error_message = { code: error.code, message: error.message };
    const { message } = error;
    yield put(authActions.setError(message));
    yield put(authActions.disableLoading());
    const temp = yield delay(6000);
    console.log("I am here");
    yield put(authActions.removeError());
  }
}

export const getCollectionRef = (rsf, pathOrRef) => {
  if (!!rsf.app.firestore)
    console.log(
      "Firestore isn't installed. " +
        "Did you forget to `import '@firebase/firestore'`? " +
        "See https://redux-saga-firebase.js.org/ for more information."
    );

  return typeof pathOrRef === "string"
    ? rsf.app.firestore().collection(pathOrRef)
    : pathOrRef;
};

export const getDocumentRef = pathOrRef => {
  return typeof pathOrRef === "string"
    ? myFirebase.firestore().doc(pathOrRef)
    : pathOrRef;
};

function* getDocument(documentRef) {
  const doc = getDocumentRef(documentRef);
  return yield call([doc, doc.get]);
}

function* requestUserSaga(action) {
  try {
    const result = yield call(getDocument, `Users/${action.payload}`);
    const data = result.data();
    console.log(JSON.stringify(data));
    yield put(
      authActions.setUser({ user: data, authToken: "", isAuthorized: true })
    );
    yield put(authActions.disableLoading());
  } catch (error) {
    console.log("error in request user saga ", error.msg);
  }
}

function* forgotPasswordSaga(action) {
  try {
    const { email } = action.payload;
    const auth = myFirebase.auth();
    yield call([auth, auth.sendPasswordResetEmail], email);
    //email sent
  } catch (error) {}
}

function* createUserWithEmailSaga(action) {
  try {
    const { email, password } = action.payload;
    const auth = myFirebase.auth();
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    );
    // console.log(
    //   "user = ",
    //   JSON.stringify(result.user),
    //   " UID = ",
    //   result.user.uid
    // );
    const { uid } = result.user;

    // console.log(JSON.stringify(result.user), "something ");
    // yield put(
    //   authActions.setUser({ user: result.user, authToken: "kljalksdjf" })
    // );
    yield put(authActions.requestUser(uid));
  } catch (error) {
    console.log(error.msg);
  }
}

// Todo
// function* loginWithEmail() {}
function* loginWithFacebookSaga() {}
function* loginWithMicrosoftSaga() {}
function* registerUserSaga() {}

export function* authSaga() {
  yield takeLatest(authActionTypes.LoginWithGoogle, loginWithGoogleSaga);
  yield takeLatest(authActionTypes.LoginWithEmail, loginWithEmailSaga);
  yield takeLatest(authActionTypes.LoginWithFacebook, loginWithFacebookSaga);
  yield takeLatest(authActionTypes.LoginWithMicrosoft, loginWithMicrosoftSaga);
  yield takeLatest(authActionTypes.RegisterUser, registerUserSaga);
  yield takeLatest(authActionTypes.RequestUser, requestUserSaga);
  yield takeLatest(authActionTypes.ForgotPassword, forgotPasswordSaga);
  yield takeLatest(
    authActionTypes.CreateUserWithEmail,
    createUserWithEmailSaga
  );
}
