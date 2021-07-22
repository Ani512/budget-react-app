import firebase from "firebase/app";
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDP0K0KFyyYWUImTsHRd0TJ8Psvx0gH4Qo",
    authDomain: "manage-budget-app.firebaseapp.com",
    databaseURL: "https://manage-budget-app-default-rtdb.firebaseio.com",
    projectId: "manage-budget-app",
    storageBucket: "manage-budget-app.appspot.com",
    messagingSenderId: "154568111605",
    appId: "1:154568111605:web:014ecf906472e537c5dcbc",
    measurementId: "G-G0LQ3S2ZKP"
};
// Initialize Firebase
firebase.initializeApp( firebaseConfig );

const database = firebase.database();

export { firebase, database as default };
