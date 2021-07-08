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

  const onChange = (event) => {
    if(event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard( {
      ...card,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <form className={styles.form} >
      <input 
        ref={nameRef} 
        className={styles.input} 
        onKeyPress={handleKeypress} 
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input ref={companyRef} className={styles.input} type="text" name="company" value={company} onChange={onChange} />
      <select ref={themeRef} className={styles.select} value={theme} name="theme" onChange={onChange} >
        <option value="dark">Dark</option>
        <option value="colorful">ColorFul</option>
        <option value="light">Light</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange} />
      <input ref={emailRef} className={styles.input} type="text" name="email" value={email} onChange={onChange} />
      <textarea ref={messageRef} className={styles.textarea} name="message" value={message} onChange={onChange} ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput  />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  )
}

export default CardEdtiForm;