import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLq7tob4zX07sVOwT3yUauygYLWY3GmTU",
  authDomain: "pokemon-app-7142b.firebaseapp.com",
  projectId: "pokemon-app-7142b",
  storageBucket: "pokemon-app-7142b.appspot.com",
  messagingSenderId: "400790856179",
  appId: "1:400790856179:web:1c8282cfd5a472e6857286",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
