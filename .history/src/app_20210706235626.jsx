import './app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Button from './components/button/button';

import firebaseApp from './services/firebase.js';

console.log(firebaseApp);

function App() {
  return (
    <>
      <Header />
      <div className="buttons">
        <span>Login</span>
        <Button />
        <Button />
      </div>
      <Footer />
    </>
  );
}

export default App;
