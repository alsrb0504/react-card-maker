import React from 'react';
import styles from './card_add_form.module.css';


const CardAddForm = ({}) => {
  

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="name" />
      <input className={styles.input} type="text" placeholder="company" />
      <select className={styles.select} value={theme}>
        <option value="dark">Dark</option>
        <option value="colorful">ColorFul</option>
        <option value="light">Light</option>
      </select>
      <input className={styles.input} type="text" value={title} />
      <input className={styles.input} type="text" value={email} />
      <textarea className={styles.textarea} value={message}></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput  />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  )
}

export default CardAddForm;