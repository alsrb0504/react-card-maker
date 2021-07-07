import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({auth}) => {

  // const [loginState, setloginState] = useState(null);

  const [onLogout, setonLogout] = useState(null);

  const [state, setState] = useState(false);

  const onLogin = event => {
    auth. //
      login(event.currentTarget.textContent)
      .then(result => console.log(result))
      .then(() => setState(true))
  }


  useEffect(() => {
    console.log('useEffect');
    setonLogout(ture)
  }, [state])

  return (
    <section className={styles.login}>
      <Header onLogout={onLogout} />


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