import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest, call } from "redux-saga/effects";
import { getUserByToken } from "./authCrud";
import { myFirebase, googleAuth } from "../../../../firebase";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  SetUser: "[Set User] Action",
};

const initialAuthState = {
  user: {
    id: 1,
    username: "admin",
    password: "demo",
    email: "admin@demo.com",
    accessToken: "access-token-8f3ae836da744329a6f93bf20594b5cc",
    refreshToken: "access-token-f8c137a2c98743f48b643e71161d90aa",
    roles: [1], // Administrator
    pic: toAbsoluteUrl("/media/users/300_21.jpg"),
    fullname: "Sean S",
    firstname: "Sean",
    lastname: "Stark",
    occupation: "CEO",
    companyName: "Keenthemes",
    phone: "456669067890",
    language: "en",
    timeZone: "International Date Line West",
    website: "https://keenthemes.com",
    emailSettings: {
      emailNotification: true,
      sendCopyToPersonalEmail: false,
      activityRelatesEmail: {
        youHaveNewNotifications: false,
        youAreSentADirectMessage: false,
        someoneAddsYouAsAsAConnection: true,
        uponNewOrder: false,
        newMembershipApproval: false,
        memberRegistration: true,
      },
      updatesFromKeenthemes: {
        newsAboutKeenthemesProductsAndFeatureUpdates: false,
        tipsOnGettingMoreOutOfKeen: false,
        thingsYouMissedSindeYouLastLoggedIntoKeen: true,
        newsAboutMetronicOnPartnerProductsAndOtherServices: true,
        tipsOnMetronicBusinessProducts: true,
      },
    },
    communication: {
      email: true,
      sms: true,
      phone: false,
    },
    address: {
      addressLine: "L-12-20 Vertex, Cybersquare",
      city: "San Francisco",
      state: "California",
      postCode: "45000",
    },
    socialNetworks: {
      linkedIn: "https://linkedin.com/admin",
      facebook: "https://facebook.com/admin",
      twitter: "https://twitter.com/admin",
      instagram: "https://instagram.com/admin",
    },
  },
  authToken: undefined,
};

export const reducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.Login: {
      const { authToken } = action.payload;

      return { authToken, user: undefined };
    }

    case actionTypes.Register: {
      const { user } = action.payload;

      return { authToken: undefined, user: user };
    }

    case actionTypes.Logout: {
      // TODO: Change this code. Actions in reducer aren't allowed.
      return initialAuthState;
    }

    case actionTypes.UserLoaded: {
      const { user } = action.payload;
      return { ...state, user };
    }

    case actionTypes.SetUser: {
      const { user } = action.payload;
      return { ...state, user };
    }

    default:
      return state;
  }
};

export const actions = {
  login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  register: (authToken, user) => ({
    type: actionTypes.Register,
    payload: { authToken, user },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: (user) => ({
    type: actionTypes.UserRequested,
    payload: { user },
  }),
  fulfillUser: (user) => ({ type: actionTypes.UserLoaded, payload: { user } }),
  setUser: (user) => ({ type: actionTypes.SetUser, payload: { user } }),
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    // try {
    //   const auth = myFirebase.auth();
    //   const result = yield call([auth, auth.signInWithPopup], googleAuth);

    //   console.log(
    //     JSON.stringify(result.user),
    //     "something ",
    //     JSON.stringify(result.user.credentials.oauthIdToken)
    //   );
    // } catch (error) {
    //   // const error_message = { code: error.code, message: error.message };
    //   console.log(error.message);
    //   // yield put({ type: AUTHENTICATION_FAILED, error: error_message });
    // }
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    try {
      const auth = myFirebase.auth();
      const result = yield call([auth, auth.signInWithPopup], googleAuth);

      console.log(
        JSON.stringify(result.user),
        "something ",
        JSON.stringify(result.user.credentials.oauthIdToken)
      );
      yield put(actions.requestUser(result.user));
    } catch (error) {
      // const error_message = { code: error.code, message: error.message };
      console.log(error.message);
      // yield put({ type: AUTHENTICATION_FAILED, error: error_message });
    }
  });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    const { data: user } = yield getUserByToken();

    yield put(actions.fulfillUser(user));
  });
}
