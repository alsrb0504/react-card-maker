import firebaseApp from './firebase.js';

class Auth {
  provider()

  
  login = () => {
    firebaseApp.auth()
      .signInWithPopup(provider)
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
