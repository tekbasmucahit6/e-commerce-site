// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQrzfW6f7CZWwp0D4tm3PNcG0Qy9tEWwo",
  authDomain: "buoyant-aileron-418117.firebaseapp.com",
  projectId: "buoyant-aileron-418117",
  storageBucket: "buoyant-aileron-418117.firebasestorage.app",
  messagingSenderId: "1005263076884",
  appId: "1:1005263076884:web:eaa30e329d49679abbf101",
  measurementId: "G-MZXQXHJRKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);