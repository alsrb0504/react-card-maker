import React from 'react';
import styles from './card_add_form.module.css';


const CardAddForm = ({}) => {
  
  const onSubmit = () => {}

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="name" />
      <input className={styles.input} type="text" placeholder="company" />
      <select className={styles.select} value="Dark">
        <option value="dark">Dark</option>
        <option value="colorful">ColorFul</option>
        <option value="light">Light</option>
      </select>
      <input className={styles.input} type="text" placeholder="title" />
      <input className={styles.input} type="text" placeholder="email" />
      <textarea className={styles.textarea} placeholder="message..."></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput  />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  )
}

export default CardAddForm;