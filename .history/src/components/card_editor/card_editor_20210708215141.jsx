import React from 'react';
import styles from './card_editor.module.css';
import CardEdtiForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const CardEditor = ({cards, AddCard}) => {

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.ul}>
        {cards.map(card => (
          <CardEdtiForm key={card.id} card={card}/>
        ))}
        <CardAddForm AddCard={AddCard}/>
      </ul>
    </section>
  )
}

export default CardEditor;