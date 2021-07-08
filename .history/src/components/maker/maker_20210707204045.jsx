import React, { useEffect } from 'react';
import { useState, useHistory } from 'react-router-dom';
import CardEditor from '../card_editor/card_editor';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

import cards from '../../services/cards';

const Maker = ({auth}) => {
  
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Ellie',
      company: 'Samsung',
      theme: 'Dark',
      title: 'Software engineer',
      email: 'dream8442@naver.com',
      message: "Don't forget to code your dream.",
      fileName: 'ellie',
      fileURL: 'ellie.png'
    },
    {
      id: 2,
      name: 'Bob',
      compony: 'naver',
      theme: 'Colorful',
      title: 'PM manager',
      email: 'bob24@naver.com',
      message: "I'm hungry...",
      fileName: 'ellie',
      fileURL: 'ellie.png'
    },
    {
      id: 3,
      name: 'Ho',
      compony: 'kakao',
      theme: 'Light',
      title: 'designer',
      email: 'bob24@naver.com',
      message: "I'm hungry...",
      fileName: 'ellie',
      fileURL: 'ellie.png'
    }
  ])
  
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      
      <section className={styles.container}>
        <CardEditor cards={cards}/>
        <CardPreview cards={cards}/>

      </section>
      <Footer />
    </section>
  )
}

export default Maker;