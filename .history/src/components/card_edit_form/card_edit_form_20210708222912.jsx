import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEdtiForm = ({card, DeleteCard}) => {
  const {name, company, theme, email, title, message, fileURL} = card;

  const nameRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    DeleteCard(card.id);
  };

  const handleKeypress = (event) => {
    console.log(event.key);
    console.log(nameRef.current.value);
  }

  return (
    <form className={styles.form}>
      <input className={styles.input} onKeyPress={handleKeypress} type="text" value={name} />
      <input className={styles.input} type="text" value={company} />
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

export default CardEdtiForm;