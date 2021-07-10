import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({FileInput, createOrupdateCard}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  // const fileRef = useRef();

  const onFileChange = file => {

  }

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    }
    formRef.current.reset();
    createOrupdateCard(card);
  }

  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" placeholder="name" />
      <input ref={companyRef} className={styles.input} type="text" placeholder="company" />
      <select ref={themeRef} className={styles.select} placeholder="Dark">
        <option value="dark">Dark</option>
        <option value="colorful">ColorFul</option>
        <option value="light">Light</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" placeholder="title" />
      <input ref={emailRef} className={styles.input} type="text" placeholder="email" />
      <textarea ref={messageRef} className={styles.textarea} placeholder="message..."></textarea>
      <div className={styles.fileInput}>
        <FileInput  onFileChange={onFileChange}/>
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  )
}

export default CardAddForm;