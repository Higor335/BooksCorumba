import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUO8krTmpCeOjbJEw8_k3AsrUxG3Guxzg",
  authDomain: "bookscorumba.firebaseapp.com",
  projectId: "bookscorumba",
  storageBucket: "bookscorumba.appspot.com",
  messagingSenderId: "408657891717",
  appId: "1:408657891717:web:0a7a0175c72a0e966474ec",
  measurementId: "G-CK071K2216"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);