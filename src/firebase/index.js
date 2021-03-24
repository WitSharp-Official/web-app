import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
// import ReduxSagaFirebase from 'redux-saga-firebase';
import "firebase/firestore";
import "firebase/auth";
// require('firebase/auth');
// require('firebase/firestore');

const myFirebase = firebase.initializeApp(firebaseConfig);
const firestoreDB = firebase.firestore();

const googleAuth = new firebase.auth.GoogleAuthProvider();
const facebookAuth = new firebase.auth.FacebookAuthProvider();

googleAuth.addScope("profile");
googleAuth.addScope("email");
// const twitterAuth = new firebase.auth.TwitterAuthProvider();

// myFirebase.firestore().settings({
//   host: 'localhost:8080',
//   ssl: false,
// });
// const rsf = new ReduxSagaFirebase(myFirebase);

//Enabling persistance
myFirebase
  .firestore()
  .enablePersistence()
  .catch(function(err) {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
//database
// rsf.firestore.
export { googleAuth, myFirebase, firestoreDB, facebookAuth };
