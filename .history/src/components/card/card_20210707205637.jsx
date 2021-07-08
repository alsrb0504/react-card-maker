import React from 'react';
import styles from './card.module.css';

const Card = ({card}) => {
  const {name, company, theme, email, title, message, fileURL} = card;

  return(
    <li className={styles.card}>
      <img 
        className={styles.img}
        src="/images/default_logo.png" 
        alt="profile" 
      />
      <section className={styles.text_part} >
        <h1 className={styles.name} >{name}</h1>
        <span className={styles.company} >{company}</span>
        <span className={styles.title} >{title}</span>
        <span className={styles.email} >{email}</span>
        <span className={styles.message} >{message}</span>
      </section>
    </li>
  )
}

export default Card;