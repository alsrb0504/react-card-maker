import React from 'react';
import styles from './card_editor.module.css';
import CardEdtiForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const CardEditor = ({FileInput, cards, DeleteCard, createOrupdateCard}) => {

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.ul}>
        {Object.keys(cards).map(key => (
          <CardEdtiForm 
            key={key} 
            card={cards[key]} 
            DeleteCard={DeleteCard} 
            createOrupdateCard={createOrupdateCard}
            imageUploader={imageUploader}
          />
        ))}
        <CardAddForm createOrupdateCard={createOrupdateCard}/>
      </ul>
    </section>
  )
}

export default CardEditor;