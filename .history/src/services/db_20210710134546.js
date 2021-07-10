import firebaseApp from './firebase';
import firebase from 'firebase';

class firebaseDB {
  constructor() {
    this.db = firebaseApp.firestore();
  }

  store(card) {
    this.db.collection('cards').add({card})
      .then(response => console.log(response));
  }
}