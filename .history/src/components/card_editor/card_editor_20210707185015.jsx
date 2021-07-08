import React from 'react';
import styles from './card_editor.module.css';
import CardEdtiForm from '../card_edti_form/card_edti_form';

const CardEditor = (props) => {

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>
        <CardEdtiForm />
      </ul>
    </section>
  )
}

export default CardEditor;