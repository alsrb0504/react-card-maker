import firebaseApp from './firebase';

class CardRepository {
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
}

export default CardRepository;

// '1':{
//   id: 1,
//   name: 'Ellie',
//   company: 'Samsung',
//   theme: 'dark',
//   title: 'Software engineer',
//   email: 'dream8442@naver.com',
//   message: "Don't forget to code your dream.",
//   fileName: '',
//   fileURL: null,
// },
// '2':{
//   id: 2,
//   name: 'Bob',
//   company: 'naver',
//   theme: 'colorful',
//   title: 'PM manager',
//   email: 'bob24@naver.com',
//   message: "I'm hungry...",
//   fileName: '',
//   fileURL: null,
// },
// '3':{
//   id: 3,
//   name: 'Ho',
//   company: 'kakao',
//   theme: 'light',
//   title: 'designer',
//   email: 'bob24@naver.com',
//   message: "I'm hungry...",
//   fileName: '',
//   fileURL: null,
// }