import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({auth}) => {
  const history = useHistory();

  const [state, setState] = useState({});

  const goToMaker = userId => {
    history.push({
      pathname: '/maker',
      state: {id: userId},
    })
  }

  const onLogin = event => {
    auth. //
      login(event.currentTarget.textContent)
      .then(data => {
        setState(data.user);
        goToMaker(data.user.uid);
      })
  }

  useEffect(()=> {
    auth.onAuthChange(user => {
      user && goToMaker(user.uid);
    })
  })

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