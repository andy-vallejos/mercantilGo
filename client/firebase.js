import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfa2HTSWTYPbZ0OZ07TL_CVZcL3N-rO1s",
  authDomain: "mercantilgo-data.firebaseapp.com",
  projectId: "mercantilgo-data",
  storageBucket: "mercantilgo-data.firebasestorage.app",
  messagingSenderId: "462602010436",
  appId: "1:462602010436:android:a288ec0c0db43b98442111",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);