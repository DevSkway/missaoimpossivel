import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0bD721mrYBoioCA9NKxJPWcJ0VdNqar4",
    authDomain: "missao-impossivel-62aaa.firebaseapp.com",
    projectId: "missao-impossivel-62aaa",
    storageBucket: "missao-impossivel-62aaa.firebasestorage.app",
    messagingSenderId: "268896227387",
    appId: "1:268896227387:web:b58dab9e51f7217e35cc1e",
    measurementId: "G-NXQ6DCMF12"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const users = collection(db, "users");

export { users, addDoc, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail };