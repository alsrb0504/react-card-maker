import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({auth}) => {

  const onLogin = event => {
    auth. //
      login(event.currentTarget.textContent)
      .then(console.log);
  }

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li><button onClick={onLogin}>Google</button></li>
          <li><button onClick={onLogin}>Github</button></li>
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default Login;