import firebase from 'firebase'
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgzSfQKtzNGtj4mEYhMzLQM6Nn8nrjJFc",
    authDomain: "sohealthy-aa605.firebaseapp.com",
    projectId: "sohealthy-aa605",
    storageBucket: "sohealthy-aa605.appspot.com",
    messagingSenderId: "380291830718",
    appId: "1:380291830718:web:be94219866996dec5a9fef",
    measurementId: "G-CRL7P2BHDX"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;