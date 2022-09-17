import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-nQdoa8Ti8kvRxb7L8C6SBYUrLsKESmQ",
  authDomain: "fir-cms-94108.firebaseapp.com",
  projectId: "fir-cms-94108",
  storageBucket: "fir-cms-94108.appspot.com",
  messagingSenderId: "1058165393830",
  appId: "1:1058165393830:web:a6708bd75240ac940b2767"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)