
import firebase from "firebase"
import "firebase/auth"

const firebaseApp = firebase.initializeApp(
    {
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        apiKey: "AIzaSyBzaG8uyfAyoUBrt0Q9F3XAPkjy7-LjyE0",
        authDomain: "linkedinclone-665a9.firebaseapp.com",
        projectId: "linkedinclone-665a9",
        storageBucket: "linkedinclone-665a9.appspot.com",
        messagingSenderId: "674665629337",
        appId: "1:674665629337:web:3e6468dc4b64f374f75a08",
        measurementId: "G-EF79Y1RJ4F"

    }


)
// Initialize Firebase
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

const db = firebaseApp.firestore();
const storage = firebase.storage();

// //initiating references to the databases
// const usersRef = db.collection('users')

// // for privileges purposes
// const functions = firebase.functions();

// //google provider sign-in
// const googleProvider = new firebase.auth.GoogleAuthProvider();


export { provider, auth, storage };
export default db;