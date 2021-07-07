import './app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Button from './components/button/button';



import { useState } from 'react';
import Login from './components/login/login';



function App({auth}) {

  const [user, setUser] = useState({});

  async function google_login  () {
    const result = await auth.login() // 순서가 안 지켜져...
    console.log(result);
    setUser(result);
    return result;
  }

  const handleClick = async () => {
    const result = await google_login();
    console.log(result);
  }

  return (
    <Login />
  );
}

export default App;
