import React from 'react';
import styles from './card_editor.module.css';
import CardEdtiForm from '../card_edit_form/card_edit_form';

const CardEditor = ({cards}) => {

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.ul}>
        {cards.map(card => {
          <CardEdtiForm card={card}/>

        })}
      </ul>
    </section>
  )
}

export default CardEditor;