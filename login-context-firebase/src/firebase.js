// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "login-9ab7a.firebaseapp.com",
  projectId: "login-9ab7a",
  storageBucket: "login-9ab7a.appspot.com",
  messagingSenderId: "1072524970926",
  appId: "1:1072524970926:web:bac33d607d2d5f5f39d63f"
};

// Initialize Firebase
//console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
