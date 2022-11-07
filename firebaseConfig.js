import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBz4HKLGx92URmryYziBUZcOAY5cesOjn8",
  authDomain: "test-f44e0.firebaseapp.com",
  projectId: "test-f44e0",
  storageBucket: "test-f44e0.appspot.com",
  messagingSenderId: "881274645506",
  appId: "1:881274645506:web:151f4a7bec2e2a62fe8b1b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)