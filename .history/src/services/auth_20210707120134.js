import firebaseApp from './firebase.js';
import firebase from 'firebase';

class Auth {
  constructor() {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }
  
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }

  login = () => {
    firebaseApp.auth()
      .signInWithPopup(this.provider)
      .then(result => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.error(error);
      })
  }
}


export default Auth;