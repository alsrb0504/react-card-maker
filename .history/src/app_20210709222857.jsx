import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App({auth, imageUploader}) {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' >
            <Login auth={auth} />
          </Route>
          <Route path='/maker'>
            <Maker auth={auth} imageUploader={imageUploader}/>
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
