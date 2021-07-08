import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({card}) => {
  const {name, company, theme, email, title, message, fileURL} = card;

  const url = fileURL || DEFAULT_IMAGE
  
  console.log(theme);

  const themeColor = (theme) => {     // 방법을 모르겠다.. post css 문제임.
    if(theme === 'Dark'){
      return 'styles.dark';
    } else if (theme === 'Light'){
      return styles.light;
    } else {
      return styles.colorful;
    }
  }

  const Color = themeColor(theme);

  return(
    <li className={`${styles.card} ${Color}` }>
      <img 
        className={styles.img}
        src={`${url}`} 
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