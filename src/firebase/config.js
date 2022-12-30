import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCkABJRMv5nG3IyUwreIcvP8tDkY4Tsm0o",
  authDomain: "react-journal-b7cf1.firebaseapp.com",
  projectId: "react-journal-b7cf1",
  storageBucket: "react-journal-b7cf1.appspot.com",
  messagingSenderId: "165470804244",
  appId: "1:165470804244:web:e41f59cccb5dfe1c0e0a01",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
