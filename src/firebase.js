import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDmOqXfUa2pO53zJs7dy25ZYbfszD3dWPQ",
    authDomain: "slack-clone-b892b.firebaseapp.com",
    projectId: "slack-clone-b892b",
    storageBucket: "slack-clone-b892b.appspot.com",
    messagingSenderId: "702343697027",
    appId: "1:702343697027:web:d421adaf4e690b569981b6",
    measurementId: "G-MV69C0GEET"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider;


  export {auth,provider};
  export default db;