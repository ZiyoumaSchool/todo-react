import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyA5sOVc0_tKBoX--iepjc_SWuqRZ-6kxUA",
  authDomain: "todo-react-ziyoum.firebaseapp.com",
  projectId: "todo-react-ziyoum",
  storageBucket: "todo-react-ziyoum.appspot.com",
  messagingSenderId: "854852765903",
  appId: "1:854852765903:web:cc0a8810854aa8210d4fba",
  measurementId: "G-BJ6RVTRK39",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  //Inscription
  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //Connexion
  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //Deconnexion
  signOut = () => this.auth.signOut();

  //Recuperation
  ressetPassword = (email) => this.auth.sendPasswordResetEmail(email);

  //Database
  user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase;
