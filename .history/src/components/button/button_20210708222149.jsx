import React from 'react';
import styles from './button.module.css';

const Button = ({name, onClick}) => {

  const handleClick = (event) =>{
    event.preventDefault();
  }

  return(
    <button className={styles.button} onClick={handleClick}>{name}</button>
  )
}

export default Button;