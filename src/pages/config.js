// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6kYuYYV3eLAEsEB7DnAV5hh1kqrNazs0",
  authDomain: "scanpaygo-8fa82.firebaseapp.com",
  databaseURL:
    "https://scanpaygo-8fa82-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scanpaygo-8fa82",
  storageBucket: "scanpaygo-8fa82.appspot.com",
  messagingSenderId: "937679103874",
  appId: "1:937679103874:web:166c8eefd388042d6fd19b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export default db;
