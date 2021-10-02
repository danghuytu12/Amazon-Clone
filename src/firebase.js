import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGRM4SXkDQQG6PHgXvdz4GtXnT6TaW6NQ",
    authDomain: "clone-df7c0.firebaseapp.com",
    projectId: "clone-df7c0",
    storageBucket: "clone-df7c0.appspot.com",
    messagingSenderId: "806203753933",
    appId: "1:806203753933:web:d7c43e145e16030e47b084",
    measurementId: "G-9T1YWJH15D"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };