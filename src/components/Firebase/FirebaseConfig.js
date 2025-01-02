import { initializeApp } from "Firebase/app";
import { getAuth } from "Firebase/auth";
import { getFirestore } from "Firebase/Firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDdyA17YHl-ko-LM7F8wKQe5OOjlou7Ir4",
    authDomain: "cimc-4b6b4.firebaseapp.com",
    projectId: "cimc-4b6b4",
    storageBucket: "cimc-4b6b4.appspot.com",
    messagingSenderId: "963789662119",
    appId: "1:963789662119:web:18b5d34b9dd42389b67882",
    measurementId: "G-0JM9BD50CJ"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export { db };
