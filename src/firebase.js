// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkIqbnuzUysYh8tti2peW_YqCvKZouUI0",
  authDomain: "foodking-1d31b.firebaseapp.com",
  projectId: "foodking-1d31b",
  storageBucket: "foodking-1d31b.firebasestorage.app",
  messagingSenderId: "582157686373",
  appId: "1:582157686373:web:99bff6d66f9b632573588c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);