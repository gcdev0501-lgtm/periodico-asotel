// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN4kbL4Vze-oOProeoVSPX1ul9zBDJJwE",
  authDomain: "periodico-asotel.firebaseapp.com",
  projectId: "periodico-asotel",
  storageBucket: "periodico-asotel.firebasestorage.app",
  messagingSenderId: "775702516412",
  appId: "1:775702516412:web:da23c5e4273a86e630f6b9",
  measurementId: "G-QBVBWPKMRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);