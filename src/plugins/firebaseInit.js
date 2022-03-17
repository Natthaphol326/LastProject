import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBiW8r_C1mfgMYTJBysXc7QZBupBFLe39s",
  authDomain: "miniproject-49951.firebaseapp.com",
  projectId: "miniproject-49951",
  storageBucket: "miniproject-49951.appspot.com",
  messagingSenderId: "993848087617",
  appId: "1:993848087617:web:2b974f9d8ea1d7e370a2c0",
  measurementId: "G-YWM4SS9R9W",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
