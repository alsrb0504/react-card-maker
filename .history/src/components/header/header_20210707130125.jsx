import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
  return (
    <header>
      <div className="headers">
        <img src="/images/logo.png" alt="logo" />
        {onLogout && <button>Logout</button>}
      </div>
      <span className="title">Business Card Maker</span>
    </header>
  )
}

export default Header;