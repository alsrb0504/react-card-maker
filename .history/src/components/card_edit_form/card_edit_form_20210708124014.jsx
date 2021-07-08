import React from 'react';
import styles from './card_edit_form.module.css';

const CardEdtiForm = ({card}) => {
  const {name, company, theme, email, title, message, fileURL} = card;


  return (
    <form className={styles.card}>
      <div className={styles.first}>
        <input className={styles.name} type="text" value={name} />
        <input className={styles.company} type="text" value={company} />
        <select className={styles.theme} value={theme}>
          <option value="dark">Dark</option>
          <option value="colorful">ColorFul</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div className={styles.second}>
        <input className={styles.title} type="text" value={title} />
        <input className={styles.email} type="text" value={email} />
      </div>
      <textarea className={styles.textarea} name="" id="" cols="20" rows="5"></textarea>
      <div className={styles.btns}>
        <button className={styles.button}>Ellie</button>
        <button className={styles.button}>Delete</button>
      </div>
    </form>
  )
}

export default CardEdtiForm;