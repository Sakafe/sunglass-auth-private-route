// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const all = import.meta.env;
// console.log(6,all);

const firebaseConfig = {
  apiKey: "AIzaSyDvjZM17PqkPOItH2nFLxZK5_A7oFgQjzk",
  authDomain: "sunglass-auth-2a062.firebaseapp.com",
  projectId: "sunglass-auth-2a062",
  storageBucket: "sunglass-auth-2a062.appspot.com",
  messagingSenderId: "913529915201",
  appId: "1:913529915201:web:d7a4aac0b492e60be243c0"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);