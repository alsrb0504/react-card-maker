import React from 'react';
import styles from './card.module.css';

const Card = ({card}) => {
  const {name, company, theme, email, title, message, fileURL} = card;

  const image = fileURL === 'ellie.png' ? '/images/default_logo.png' : fileURL;
  const themeColor 

  return(
    <li className={styles.card}>
      <img 
        className={styles.img}
        src={`${image}`} 
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