import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyCfwIxwxvLG6QcAAb4azBV1-qFw2ptvfGY",
    authDomain: "hive-9a8cd.firebaseapp.com",
    projectId: "hive-9a8cd",
    storageBucket: "hive-9a8cd.firebasestorage.app",
    messagingSenderId: "781864632474",
    appId: "1:781864632474:web:3eeae3b375604245fe5f23"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
