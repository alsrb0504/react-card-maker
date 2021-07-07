import './app.css';
import { useState } from 'react';
import Login from './components/login/login';

function App({auth}) {


  return (
    <div>
      <Login auth={auth} />
    </div>
  );
}

export default App;
