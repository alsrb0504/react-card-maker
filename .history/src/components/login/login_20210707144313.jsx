import React, { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({auth}) => {

  const [loginState, setLoginState] = useState({});

  const onLogin = event => {
    auth. //
      login(event.currentTarget.textContent)
      .then(result => setLoginState(result))
      .then(() => console.log(loginState))
  }

  return (
    <section className={styles.login}>
      <Header />



      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}><button className={styles.button} onClick={onLogin}>Google</button></li>
          <li className={styles.item}><button className={styles.button}  onClick={onLogin}>Github</button></li>
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default Login;