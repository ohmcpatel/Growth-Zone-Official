import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDzQtgjq8e8hdVD8ZYBu--iWLu9SD4rTaM",
  authDomain: "growthzone-e2469.firebaseapp.com",
  projectId: "growthzone-e2469",
  storageBucket: "growthzone-e2469.appspot.com",
  messagingSenderId: "785144884147",
  appId: "1:785144884147:web:572a59c883eb66c415b9c6",
  measurementId: "G-LKEVJHP7Z6"
};

  initializeApp(firebaseConfig)
  const db = getDatabase();

  export default db;

