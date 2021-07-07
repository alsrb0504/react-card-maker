import firebaseApp from './firebase.js';
import firebase from 'firebase';

class Auth {
  constructor() {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }
  
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}


export default Auth;