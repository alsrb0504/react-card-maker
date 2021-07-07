import './app.css';
import { useState } from 'react';
import styles from './app.module.css';
import Login from './components/login/login';

function App({auth}) {


  return (
    <div>
      <Login auth={auth} />
    </div>
  );
}

export default App;
