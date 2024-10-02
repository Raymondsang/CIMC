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
    measurementId: "G-0JM9BD50CJ"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export { db };
