import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'materialize-css';

import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './views/Home';
import Profile from './views/Profile';
import Game from './views/Game';
// import World from './components/World';
import { PlayerProvider } from './contexts/PlayerContext';
import { useAuth0 } from './react-auth0-spa';
import history from './utils/history';
import UserInfo from './components/UserInfo';
import resume from './components/Resume';

// styles/
import './App.css';

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id='app'>
        <NavBar />
        <div className='row'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/userinfo' component={UserInfo} />
            <Route exact path='/resume' component={resume} />
            <PlayerProvider>
              <Route exact path='/game' component={Game} />
            </PlayerProvider>
            <PrivateRoute path='/profile' component={Profile}></PrivateRoute>
          </Switch>
        </div>
      </div>

      {/* <Footer /> */}
    </Router>
  );
};

export default App;
