import firebaseApp from './firebase.js';
import firebase from 'firebase';

class Auth { 
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(user) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if(user){
        console.log("login");
        return true;
      } else {
        console.log('logout');
        return false;
      }
    })
  }
}

export default Auth;