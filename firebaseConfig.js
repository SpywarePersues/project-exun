import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2Ul0YoOauUm0R_fI7ZLyCuz-8svDmv00",
  authDomain: "dummy-exun.firebaseapp.com",
  projectId: "dummy-exun",
  storageBucket: "dummy-exun.appspot.com",
  messagingSenderId: "111123256030",
  appId: "1:111123256030:web:2868d14eb433133cf4e84f",
  measurementId: "G-V2MNY4Z4KF"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);