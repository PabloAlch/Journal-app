// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK8N7qRsckOlr_NKzGIpDTfrf96Vz5THI",
  authDomain: "react-cursos-udemy-palch.firebaseapp.com",
  projectId: "react-cursos-udemy-palch",
  storageBucket: "react-cursos-udemy-palch.appspot.com",
  messagingSenderId: "170009601677",
  appId: "1:170009601677:web:00583eb9151523babae4c4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )

