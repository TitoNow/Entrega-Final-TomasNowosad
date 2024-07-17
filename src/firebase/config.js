import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDA4tpEbVQLr3zrzYdyHosSBYWMi6-Z9Oo",
    authDomain: "tomasnowosad-21056.firebaseapp.com",
    projectId: "tomasnowosad-21056",
    storageBucket: "tomasnowosad-21056.appspot.com",
    messagingSenderId: "835639142010",
    appId: "1:835639142010:web:d25bbf99ce46d93322bdc3",
    measurementId: "G-Z72PXSK34Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);