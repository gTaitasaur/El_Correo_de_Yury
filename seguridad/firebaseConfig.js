// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHUKq_Kd4seLMNhzMfdbegWgKFDH2OcII",
  authDomain: "el-correo-de-yury.firebaseapp.com",
  projectId: "el-correo-de-yury",
  storageBucket: "el-correo-de-yury.appspot.com",
  messagingSenderId: "1026595379119",
  appId: "1:1026595379119:web:09d43d32d13d76f341c15a",
  measurementId: "G-SLXGXTVY0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
