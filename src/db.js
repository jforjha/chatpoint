import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyA_uyRWKeU_aepgybPq_J7iKxBKqUahwEw",
    authDomain: "chatpoint1-16505.firebaseapp.com",
    projectId: "chatpoint1-16505",
    storageBucket: "chatpoint1-16505.appspot.com",
    messagingSenderId: "615660352657",
    appId: "1:615660352657:web:d302ff04bf1300f2a33b30"

}

const db = firebase.initializeApp(config);
export default db;