import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCBq7EyP9V4TYFmrXcq_psEpiN_pIxyQp4",
    authDomain: "cris-web-apps.firebaseapp.com",
    projectId: "cris-web-apps",
    storageBucket: "cris-web-apps.appspot.com",
    messagingSenderId: "358125981958",
    appId: "1:358125981958:web:7a2168ecefa45825e44e87",
    measurementId: "G-M00E1FCCQM"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, signOut}