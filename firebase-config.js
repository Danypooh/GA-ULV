import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh0JUb4IkyV7lQuwPp0Lh2VAxwgDdO6JU",
  authDomain: "ga-ulv.firebaseapp.com",
  databaseURL: "https://ga-ulv-default-rtdb.firebaseio.com",
  projectId: "ga-ulv",
  storageBucket: "ga-ulv.appspot.com",
  messagingSenderId: "51223959286",
  appId: "1:51223959286:web:7caaddcde56f48448abed7"
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db, firebaseConfig };