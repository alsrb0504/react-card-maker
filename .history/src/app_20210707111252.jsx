import './app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Button from './components/button/button';


import Auth from './services/auth';
import { useState } from 'react';

const auth = new Auth();

function App() {

  const [user, setUser] = useState(false);

  async function google_login  () {
    const result = await auth.login()
    console.log(result);
    setUser(result);
  }

  const handleClick = () => {
    google_login()
  }

  return (
    <>
      <Header />
      <div className="buttons">
        <span onClick={handleClick} >Login</span>
        <Button user={user} />
        <Button />
      </div>
      <Footer />
    </>
  );
}

export default App;
