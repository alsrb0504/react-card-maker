import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEdtiForm = ({card}) => {
  const {name, company, theme, email, title, message, fileURL} = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <div className={styles.first}>
        <input className={styles.input} type="text" value={name} />
        <input className={styles.input} type="text" value={company} />
        <select className={styles.select} value={theme}>
          <option value="dark">Dark</option>
          <option value="colorful">ColorFul</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div className={styles.second}>
        <input className={styles.input} type="text" value={title} />
        <input className={styles.input} type="text" value={email} />
      </div>
      <textarea className={styles.textarea} value={message}></textarea>
      <div className={styles.btns}>
        <ImageFileInput  />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  )
}

export default CardEdtiForm;