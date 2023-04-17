// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2c0xPgU8dFtGBObr4XB_JybTnuiJXpoc",
  authDomain: "nextjs-13-68baa.firebaseapp.com",
  projectId: "nextjs-13-68baa",
  storageBucket: "nextjs-13-68baa.appspot.com",
  messagingSenderId: "485628082819",
  appId: "1:485628082819:web:6982d6b729a7b571bfb9b6",
  measurementId: "G-J0M6SXSPJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const auth = getAuth(app);
