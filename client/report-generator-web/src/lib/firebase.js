// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "report-generator-99b01.firebaseapp.com",
  projectId: "report-generator-99b01",
  storageBucket: "report-generator-99b01.appspot.com",
  messagingSenderId: "1055740824103",
  appId: "1:1055740824103:web:0306974bbec99c7a4f5c02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)