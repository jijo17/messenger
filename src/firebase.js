import firebase from"firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCOtChq9F4aiqCbBAFJbk9-eqDgch34WI4",
    authDomain: "messenger-76b6f.firebaseapp.com",
    projectId: "messenger-76b6f",
    storageBucket: "messenger-76b6f.appspot.com",
    messagingSenderId: "911949956837",
    appId: "1:911949956837:web:de3ac329e0d20560ab760c",
    measurementId: "G-T5MXPV245R"
});
const db= firebaseApp.firestore();
export default db;