
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentify-4a092.firebaseapp.com",
  projectId: "rentify-4a092",
  storageBucket: "rentify-4a092.appspot.com",
  messagingSenderId: "194820884949",
  appId: "1:194820884949:web:0f62dc24038f18870c955c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);