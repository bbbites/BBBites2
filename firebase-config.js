
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZKO2zJZdAGIhUoDKkgnVd14wMxdPt8G8",
  authDomain: "bb-bites-f7750.firebaseapp.com",
  projectId: "bb-bites-f7750",
  storageBucket: "bb-bites-f7750.firebasestorage.app",
  messagingSenderId: "486468134312",
  appId: "1:486468134312:web:4048f23decde108b1b699d",
  measurementId: "G-2E0MW9X62K"
};
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export { auth };