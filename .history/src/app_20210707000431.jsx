import './app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Button from './components/button/button';


import Auth from './services/auth';

const auth = new Auth();

function App() {

  handleClick = () => {
    auth.login();
  }

  return (
    <>
      <Header />
      <div className="buttons">
        <span>Login</span>
        <Button onClick={handleClick}/>
        <Button />
      </div>
      <Footer />
    </>
  );
}

export default App;
