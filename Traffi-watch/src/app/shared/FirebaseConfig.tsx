// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBONiHHTdPot1Jx1m5Vmz65Z6MjSFt9Hao",
  authDomain: "traffic-watch-cfb31.firebaseapp.com",
  projectId: "traffic-watch-cfb31",
  storageBucket: "traffic-watch-cfb31.appspot.com",
  messagingSenderId: "140193469367",
  appId: "1:140193469367:web:0d2549f814fcabe0ad4e32",
  measurementId: "G-C2MLDK9HYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;