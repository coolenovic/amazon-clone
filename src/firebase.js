import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDsTWkNNmtxcvirbWWxrulDCaId5QXtIlA",
    authDomain: "clone-511c6.firebaseapp.com",
    databaseURL: "https://clone-511c6.firebaseio.com",
    projectId: "clone-511c6",
    storageBucket: "clone-511c6.appspot.com",
    messagingSenderId: "690015288015",
    appId: "1:690015288015:web:2a77b8549077e8fd0715ba"
  };

//initial the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize the databse
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};