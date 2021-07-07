import React from 'react';

const Header = ({user}) => {

  const login_state = user;

  return (
    <header>
      <div className="headers">
        <img src="/images/logo.png" alt="logo" />
        {login_state && <button>X</button>}
      </div>
      <span className="title">Business Card Maker</span>
    </header>
  )
}

export default Header;