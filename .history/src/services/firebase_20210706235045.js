import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDOcGRwjmkVwWVQE9Wui7W0OKse397-_K8",
  authDomain: "card-maker-33aba.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "card-maker-33aba",
  storageBucket: "card-maker-33aba.appspot.com",
  messagingSenderId: "759611322044",
  appId: "1:759611322044:web:ab8348d4f0e5f75ebd2ab9",
  measurementId: "G-GTM4BMLMPN",
}

firebase.initializeApp(firebaseConfig);

export default firebase;