import React, { useRef } from 'react';
import ImageFileInput from '../image_file_input/image_file_input';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({AddCard}) => {
  
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  // const fileRef = useRef();

  

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: new Date().now(),
      name: nameRef.current.value,
      compony: companyRef,
      theme: themeRef,
      title: titleRef,
      email: emailRef,
      message: messageRef,
      fileName: "temp",
      fileURL: null,
    }
    console.log(card);


    AddCard();
  }

  return (
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" placeholder="name" />
      <input ref={companyRef} className={styles.input} type="text" placeholder="company" />
      <select ref={themeRef} className={styles.select} value="Dark">
        <option value="dark">Dark</option>
        <option value="colorful">ColorFul</option>
        <option value="light">Light</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" placeholder="title" />
      <input ref={emailRef} className={styles.input} type="text" placeholder="email" />
      <textarea ref={messageRef} className={styles.textarea} placeholder="message..."></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput  />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  )
}

export default CardAddForm;