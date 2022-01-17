import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo0_Pv7YHwhvy3EpMEkRkHhdw4xI_-WKs",
  authDomain: "simple-form-e1c6b.firebaseapp.com",
  databaseURL:
    "https://simple-form-e1c6b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "simple-form-e1c6b",
  storageBucket: "simple-form-e1c6b.appspot.com",
  messagingSenderId: "386946663890",
  appId: "1:386946663890:web:d858789df40fdd9500740b",
};

// init firebase app
firebase.initializeApp(firebaseConfig);

// init firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };
