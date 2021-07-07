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
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      })
  }
}


export default Auth;