import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDh8Y7m7dJ8TIaYEtxl9YWlibDyDTvAjFU",
  authDomain: "login-logout-validation.firebaseapp.com",
  projectId: "login-logout-validation",
  storageBucket: "login-logout-validation.appspot.com",
  messagingSenderId: "821863739651",
  appId: "1:821863739651:web:780cab66e08d8062233936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
