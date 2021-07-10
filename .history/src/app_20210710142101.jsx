import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App({FileInput, auth, cardRepository}) {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' >
            <Login auth={auth} />
          </Route>
          <Route path='/maker'>
            <Maker 
              auth={auth} 
              FileInput={FileInput}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
