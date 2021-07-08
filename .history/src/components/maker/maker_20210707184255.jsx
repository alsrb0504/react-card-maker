import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardEditor from '../card_editor/card_editor';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({auth}) => {
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
        <CardEditor/>
        <CardPreview />

      </section>
      <Footer />
    </section>
  )
}

export default Maker;