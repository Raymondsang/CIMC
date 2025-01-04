// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, updatePassword } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDdyA17YHl-ko-LM7F8wKQe5OOjlou7Ir4",
//     authDomain: "cimc-4b6b4.firebaseapp.com",
//     projectId: "cimc-4b6b4",
//     storageBucket: "cimc-4b6b4.appspot.com",
//     messagingSenderId: "963789662119",
//     appId: "1:963789662119:web:18b5d34b9dd42389b67882",
//     measurementId: "G-0JM9BD50CJ",
// };

// // Initialize Firebase App
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// export const auth = getAuth(app); // Authentication
// export const db = getFirestore(app); // Firestore

// // Authentication Functions
// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithEmailAndPassword = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(auth, provider);

//     return result.user;
// };

// export const doSignOut = () => {
//     return auth.signOut();
// };

// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordUpdate = (password) => {
//     return updatePassword(auth.currentUser, password);
// };

// // Export default app instance
// export default app;


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdyA17YHl-ko-LM7F8wKQe5OOjlou7Ir4",
    authDomain: "cimc-4b6b4.firebaseapp.com",
    projectId: "cimc-4b6b4",
    storageBucket: "cimc-4b6b4.appspot.com",
    messagingSenderId: "963789662119",
    appId: "1:963789662119:web:18b5d34b9dd42389b67882",
    measurementId: "G-0JM9BD50CJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);

export { auth, db }; 
export default app;
