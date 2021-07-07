import './app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Button from './components/button/button';


import Auth from './services/auth';

const auth = new Auth();

function App() {

  const handleClick = () => {
    // auth.login();
    console.log('hi');
  }

  return (
    <>
      <Header />
      <div className="buttons">
        <span onClick={handleClick} >Login</span>
        <Button />
        <Button />
      </div>
      <Footer />
    </>
  );
}

export default App;
