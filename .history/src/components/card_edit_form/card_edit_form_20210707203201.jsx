import React from 'react';
import styles from './card_edit_form.module.css';

const CardEdtiForm = ({card}) => {

  return (
    <li className={styles.card}>
      <div className={styles.first}>
        <input className={styles.name} type="text" placeholder={card.name} />
        <input className={styles.company} type="text" placeholder={card.company} />
        <select className={styles.theme} name="theme">
          <option value="dark">Dark</option>
          <option value="colorful">ColorFul</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div className={styles.second}>
        <input className={styles.title} type="text" />
        <input className={styles.email} type="text" />
      </div>
      <textarea className={styles.textarea} name="" id="" cols="20" rows="5"></textarea>
      <div className={styles.btns}>
        <button className={styles.button}>Ellie</button>
        <button className={styles.button}>Delete</button>
      </div>
    </li>
  )
}

export default CardEdtiForm;