import firebaseApp from './firebase.js';
import firebase from 'firebase';

class Auth { 
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }
}

// 1. Auth class 생성 후, 멤버 함수들 생성.
// 2. login Component를 생성하며 mount 될 때 auth.onAuthChange 실행
// 3. user가 있다면...?
// 4. 이 인자인 user가 어디서 저장되어 있다가 나오는 거지?


export default Auth;