// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0kZzI0GaJkHRoDiqG5vbtQ9rrGO2G9Tk",
  authDomain: "login-1-58a74.firebaseapp.com",
  projectId: "login-1-58a74",
  storageBucket: "login-1-58a74.appspot.com",
  messagingSenderId: "526014664451",
  appId: "1:526014664451:web:f5471741b39dc949062336",
  measurementId: "G-JF6X3S2D7L"
};

// Initialize Firebase
 export const appfirebase = initializeApp(firebaseConfig);
 export const auth = getAuth();