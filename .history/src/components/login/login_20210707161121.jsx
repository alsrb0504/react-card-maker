import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({auth}) => {


  const history = useHistory();

  const [onLogout, setonLogout] = useState(false);

  const [state, setState] = useState(false);

  const onLogin = event => {
    auth. //
      login(event.currentTarget.textContent)
      .then(result => console.log(result))
      .then(() => setState(true))
      .then(() => console.log('hi'));
  }


  useEffect(() => {
    console.log('useEffect');
    if(state) {
      setonLogout(true);
    }
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