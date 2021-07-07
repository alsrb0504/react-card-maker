import styles from './app.module.css';
import Login from './components/login/login';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App({auth}) {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' >
          <Login auth={auth} />

          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
