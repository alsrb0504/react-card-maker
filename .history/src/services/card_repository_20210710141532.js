import firebaseApp from './firebase';

class CardRepository {
  store(card) {
    console.log('firebase db');
    this.db.ref('cards/' + card.id).set(card);

  }
}

export default CardRepository;