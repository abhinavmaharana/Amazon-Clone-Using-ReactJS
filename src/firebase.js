import firebase from "firebase";

const firebasApp = firebase.initializeApp({
  apiKey: "AIzaSyBIxEdLvql11fhH0bdmwK1UFzD1Oyfcdgo",
  authDomain: "clone-e4318.firebaseapp.com",
  databaseURL: "https://clone-e4318.firebaseio.com",
  projectId: "clone-e4318",
  storageBucket: "clone-e4318.appspot.com",
  messagingSenderId: "1076057302435",
  appId: "1:1076057302435:web:df2e5536b05bd198e06616",
  measurementId: "G-EFVT7JFLVV",
});

const auth = firebase.auth();

export { auth };
