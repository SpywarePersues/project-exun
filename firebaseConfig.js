import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbiq9bS6jjgguW6RuwdgdOnb9PdRqRJBM",
  authDomain: "exun-6dd56.firebaseapp.com",
  projectId: "exun-6dd56",
  storageBucket: "exun-6dd56.appspot.com",
  messagingSenderId: "1032989169042",
  appId: "1:1032989169042:web:83eb8c493f4c4df2a51d4b",
  measurementId: "G-K94VB3J670"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
