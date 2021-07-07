import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
  return (
    <header>
      <div className="headers">
        {onLogout && <button onClick={onLogout}>Logout</button>}
        <img src="/images/logo.png" alt="logo" />
      </div>
      <span className="title">Business Card Maker</span>
    </header>
  )
}

export default Header;