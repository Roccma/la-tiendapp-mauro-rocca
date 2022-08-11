// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRtZGgr_6i_OJnb_6fvkO080LQ43jLMu8",
  authDomain: "la-tiendapp-3de9f.firebaseapp.com",
  projectId: "la-tiendapp-3de9f",
  storageBucket: "la-tiendapp-3de9f.appspot.com",
  messagingSenderId: "959359738447",
  appId: "1:959359738447:web:de5a83d88fc8d38ea9c03a",
  measurementId: "G-L3YGMLX0L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnections = () => app;