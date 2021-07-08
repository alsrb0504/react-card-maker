import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardEditor from '../card_editor/card_editor';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

import cards from '../../services/cards';

const Maker = ({auth}) => {
  
  const [cards, setCards] = useState({
    '1':{
      id: 1,
      name: 'Ellie',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software engineer',
      email: 'dream8442@naver.com',
      message: "Don't forget to code your dream.",
      fileName: 'ellie',
      fileURL: null,
    },
    '2':{
      id: 2,
      name: 'Bob',
      company: 'naver',
      theme: 'colorful',
      title: 'PM manager',
      email: 'bob24@naver.com',
      message: "I'm hungry...",
      fileName: 'ellie',
      fileURL: null,
    },
    '3':{
      id: 3,
      name: 'Ho',
      company: 'kakao',
      theme: 'light',
      title: 'designer',
      email: 'bob24@naver.com',
      message: "I'm hungry...",
      fileName: 'ellie',
      fileURL: null,
    }
  })

  const history = useHistory();
  const onLogout = () => {
    auth.logout();
  }

  useEffect(()=> {
    auth.onAuthChange((user) => {
      if(!user) {
        history.push('/');
      }
    })
  })

  // cards
  const AddCard = (card) => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  }

  const updateCard = (card) => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  }

  const DeleteCard = (id) => {
    console.log(id);
    const updated = cards.filter(card => {
      if(card.id !== id){
        return card;
      }
    })
    setCards(updated);
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      
      <section className={styles.container}>
        <CardEditor 
          cards={cards} 
          AddCard={AddCard} 
          DeleteCard={DeleteCard} 
          updateCard={updateCard}
        />
        <CardPreview cards={cards}/>

      </section>
      <Footer />
    </section>
  )
}

export default Maker;