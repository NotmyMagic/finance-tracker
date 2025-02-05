// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwG6AfNe48k1vfR78MYHVIDO6HpP9nveg",
  authDomain: "finance-tracker-ac093.firebaseapp.com",
  projectId: "finance-tracker-ac093",
  storageBucket: "finance-tracker-ac093.firebasestorage.app",
  messagingSenderId: "260992398064",
  appId: "1:260992398064:web:42cf407654b2c327108835",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

// little comment
