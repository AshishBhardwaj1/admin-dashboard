// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpF_gftrN9N3eWg7SU1mgEHciJx48eY-I",
  authDomain: "reactjs-login-sign.firebaseapp.com",
  projectId: "reactjs-login-sign",
  storageBucket: "reactjs-login-sign.appspot.com",
  messagingSenderId: "134468544402",
  appId: "1:134468544402:web:7543d4ea68a5ce7610c34b",
  measurementId: "G-J27V42G2GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 export const auth = getAuth(app);