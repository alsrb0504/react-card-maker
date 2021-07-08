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

  const Color = getStyles(theme);

  return(
    <li className={`${styles.card} ${Color}` }>
      <img 
        className={styles.avatar}
        src={url} 
        alt="profile" 
      />
      <div className={styles.info} >
        <h1 className={styles.name} >{name}</h1>
        <p className={styles.company} >{company}</p>
        <p className={styles.title} >{title}</p>
        <p className={styles.email} >{email}</p>
        <p className={styles.message} >{message}</p>
      </div>
    </li>
  )
}

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'dark':
      return styles.dark;
    case 'dark':
      return styles.dark;
    default:
      throw new Error(`unknown theme ${theme}`);
  }
}

export default Card;