import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-fYTng8QgcyV1FyufnFmN6jy7eGcJqnw",
  authDomain: "clone-e610c.firebaseapp.com",
  projectId: "clone-e610c",
  storageBucket: "clone-e610c.appspot.com",
  messagingSenderId: "565270182005",
  appId: "1:565270182005:web:c8352a056311d18a6e603c",
  measurementId: "G-84HTPM6QKL"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };