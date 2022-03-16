import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCSufQlhi8OxC6FGmYwlWWNay4UJkZPPLg",
    authDomain: "marvel-quiz-e4dfc.firebaseapp.com",
    databaseURL: "https://marvel-quiz-e4dfc.firebaseio.com",
    projectId: "marvel-quiz-e4dfc",
    storageBucket: "marvel-quiz-e4dfc.appspot.com",
    messagingSenderId: "821450424591",
    appId: "1:821450424591:web:0a2b861ed9217352027e7a"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // Inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    // Deconnexion
    signoutUser = () =>
    this.auth.signOut();

    // Récupération mot de passe
    passwordReset = (email) => this.auth.sendPasswordResetEmail();

    // Base de données Firestore
    user = (uid) => this.db.doc(`user/${uid}`);

}

export default Firebase;