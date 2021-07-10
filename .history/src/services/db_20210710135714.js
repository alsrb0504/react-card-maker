import firebaseApp from './firebase';
import firebase from 'firebase';

class firebaseDB {
  constructor() {
    this.db = firebaseApp.database();
  }

  store(card) {
    this.db.ref('cards/' + card.id).set(card);
  }
}

export default firebaseDB;