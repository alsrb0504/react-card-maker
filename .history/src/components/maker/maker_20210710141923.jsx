import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardEditor from '../card_editor/card_editor';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({FileInput, auth}) => {
  const historyState = useHistory().state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [cards, setCards] = useState({})

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

  const createOrupdateCard = (card) => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  }

  const DeleteCard = (card) => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      
      <section className={styles.container}>
        <CardEditor 
          cards={cards} 
          DeleteCard={DeleteCard} 
          createOrupdateCard={createOrupdateCard}
          FileInput={FileInput}
        />
        <CardPreview cards={cards}/>

      </section>
      <Footer />
    </section>
  )
}

export default Maker;