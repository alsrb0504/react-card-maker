import firebaseApp from './firebase.js';
import firebase from 'firebase';

class Auth {
  constructor() {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }
  
  login = () => {
    firebaseApp.auth()
      .signInWithPopup(this.provider)
      .then(result => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      })
  }
}


export default Auth;