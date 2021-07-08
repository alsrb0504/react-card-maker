import React from 'react';
import styles from './card.module.css';

const Card = ({card}) => {
  const {name, company, theme, email, title, message, fileURL} = card;

  return(
    <li>
      <img src="/images/default_logo.png" alt="profile" />
      <section>
        <h1>{name}</h1>
        <span>{company}</span>
        <span>{title}</span>
        <span>{email}</span>
        <span>{message}</span>
      </section>
    </li>
  )
}

export default Card;