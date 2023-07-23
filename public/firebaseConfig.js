//setting up of firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCvLdyCWo0t_vuxYY4Lt8whmPIx-Qu0qp4",
    authDomain: "mmmq-5467c.firebaseapp.com",
    databaseURL: "https://mmmq-5467c-default-rtdb.firebaseio.com",
    projectId: "mmmq-5467c",
    storageBucket: "mmmq-5467c.appspot.com",
    messagingSenderId: "594970541031",
    appId: "1:594970541031:web:501ada9a55034a55309b42",
    measurementId: "G-TFWKHMGT3E"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
var database = firebase.database();