// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATvGgxA0O8st0A_CsmfFE03l3S4CVM_yA",
  authDomain: "lms-interactive.firebaseapp.com",
  projectId: "lms-interactive",
  storageBucket: "lms-interactive.firebasestorage.app",
  messagingSenderId: "835834812112",
  appId: "1:835834812112:web:9f81146d7d33c0a1f870d5",
  measurementId: "G-MS3M53M8SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);