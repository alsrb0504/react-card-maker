import React from 'react';

const Header = (props) => {

  const login_state = null;

  return (
    <header>
      <div className="headers">
        <img src="/images/logo.png" alt="logo" />
        {  <button>X</button>}
      </div>
      <span className="title">Business Card Maker</span>
    </header>
  )
}

export default Header;