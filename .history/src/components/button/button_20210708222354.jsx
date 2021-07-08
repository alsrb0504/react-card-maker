import React from 'react';
import styles from './button.module.css';

const Button = ({name, onClick}) => {

  // const handleClick = (event) =>{
  //   event.preventDefault();
  //   onClick();
  // }

  return(
    <button className={styles.button} onClick={onClick}>{name}</button>
  )
}

export default Button;