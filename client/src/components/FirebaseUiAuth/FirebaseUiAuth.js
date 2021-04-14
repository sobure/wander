//imports
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../config";

const firebaseConfig = {
  apiKey: "AIzaSyCum9PoI1cn9eYhELZGwcSQozh8B1cFzXw",
  authDomain: "wander-b02e1.firebaseapp.com",
  databaseURL: "https://wander-b02e1.firebaseio.com",
  projectId: "wander-b02e1",
  storageBucket: "wander-b02e1.appspot.com",
  messagingSenderId: "610485274414",
  appId: "1:610485274414:web:ebd67baf84c7a5ccd11cbf",
  measurementId: "G-QGJ58S4EZZ",
};

firebase.initializeApp(firebaseConfig);

// configure FirebaseUI.
const uiConfig = {
  // popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // redirect to /register after a succesful authentication
  signInSuccessUrl: "/register",
  //  display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

export default function Auth() {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}