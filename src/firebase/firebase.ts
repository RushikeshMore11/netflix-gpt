import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWgSmCKUZn4wEorkWn7HRe_JJoxpdLk_8",
  authDomain: "netflixgpt-rushikesh.firebaseapp.com",
  projectId: "netflixgpt-rushikesh",
  storageBucket: "netflixgpt-rushikesh.appspot.com",
  messagingSenderId: "1086946728340",
  appId: "1:1086946728340:web:a9097cd239fdb3cdbfd781",
  measurementId: "G-9Z9RY4NNPD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
