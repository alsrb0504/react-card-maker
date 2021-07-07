import './app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Button from './components/button/button';

function App() {
  return (
    <>
      <Header />
      <div className="buttons">
        <Button />
        <Button />
      </div>
      <Footer />
    </>
  );
}

export default App;
