// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZbPRofPFuGSzVfRtSzw7ry7N3mSTWC-0",
  authDomain: "traffic---watch.firebaseapp.com",
  projectId: "traffic---watch",
  storageBucket: "traffic---watch.appspot.com",
  messagingSenderId: "500364259721",
  appId: "1:500364259721:web:a85cde342966c93c9a7158",
  measurementId: "G-EWQ9SY297F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);