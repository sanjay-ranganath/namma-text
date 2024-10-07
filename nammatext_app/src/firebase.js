import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBn2v-E00Y6ztZATshunVKDOd5xWWesJLI",
    authDomain: "nammatext.firebaseapp.com",
    projectId: "nammatext",
    storageBucket: "nammatext.appspot.com",
    messagingSenderId: "693567375485",
    appId: "1:693567375485:web:eed8fbee5f85163df28914",
    measurementId: "G-808J7Q11ZZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;