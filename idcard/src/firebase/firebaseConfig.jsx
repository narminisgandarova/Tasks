import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyCB1OkNT79m93lXnYg8uxf5k31SWzpBbCI",
    authDomain: "site-11fc9.firebaseapp.com",
    databaseURL: "https://site-11fc9-default-rtdb.firebaseio.com",
    projectId: "site-11fc9",
    storageBucket: "site-11fc9.appspot.com",
    messagingSenderId: "860962187758",
    appId: "1:860962187758:web:6a11314cb49230f998c6ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}