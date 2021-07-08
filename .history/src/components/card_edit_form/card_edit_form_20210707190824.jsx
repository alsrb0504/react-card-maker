import React from 'react';
import styles from './card_edit_form.module.css';

const CardEdtiForm = (props) => {

  return (
    <li className={styles.card}>
      <div className={styles.first}>
        <input className={styles. className={styles.}} type="text" />
        <input className={styles.} type="text" />
        <select className={styles.} name="theme">
          <option value="dark">Dark</option>
          <option value="colorful">ColorFul</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div className={styles.second}>
        <input className={styles.} type="text" />
        <input className={styles.} type="text" />
      </div>
      <textarea className={styles.} name="" id="" cols="20" rows="5"></textarea>
      <div className={styles.}>
        <button className={styles.}>Ellie</button>
        <button className={styles.}>Delete</button>
      </div>
    </li>
  )
}

export default CardEdtiForm;