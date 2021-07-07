import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDOcGRwjmkVwWVQE9Wui7W0OKse397-_K8",
  authDomain: "card-maker-33aba.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "card-maker-33aba",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);



export default firebaseApp;