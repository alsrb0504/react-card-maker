import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEdtiForm = ({card, DeleteCard, updateCard}) => {
  const {name, company, theme, email, title, message, fileURL} = card;

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    DeleteCard(card.id);
  };

  const handleKeypress = (event) => {
    console.log(event.key);
    nameRef.current.value += event.key;
    console.log(nameRef.current.value);

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: "temp",
      fileURL: null,
    }

    updateCard(card);
  }

  const handleClick = () => {
    console.log('ch');
  }

  return (
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} onChange={handleChange} onKeyPress={handleKeypress} type="text" value={name} />
      <input ref={companyRef} className={styles.input} type="text" value={company} />
      <select ref={themeRef} className={styles.select} value={theme}>
        <option value="dark">Dark</option>
        <option value="colorful">ColorFul</option>
        <option value="light">Light</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" value={title} />
      <input ref={emailRef} className={styles.input} type="text" value={email} />
      <textarea ref={messageRef} className={styles.textarea} value={message}></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput  />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  )
}

export default CardEdtiForm;