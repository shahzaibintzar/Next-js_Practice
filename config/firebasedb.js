import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "next-firebase-295f7.firebaseapp.com",
  projectId: "next-firebase-295f7",
  storageBucket: "next-firebase-295f7.appspot.com",
  messagingSenderId: "225700035866",
  appId: "1:225700035866:web:f62eab58883ed5a924c0a3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);