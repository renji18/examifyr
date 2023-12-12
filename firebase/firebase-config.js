// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvPLxQgC1-t-tOOMHXhDgo2TcOiNwAceU",
  authDomain: "examifyr.firebaseapp.com",
  projectId: "examifyr",
  storageBucket: "examifyr.appspot.com",
  messagingSenderId: "956673292838",
  appId: "1:956673292838:web:d50dc91d7a563ae51d84e7",
  measurementId: "G-GSTPGYQHGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)