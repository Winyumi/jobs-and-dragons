import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'materialize-css';

import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './views/Home';
import Profile from './views/Profile';
import World from './components/World';
import { PlayerProvider } from './contexts/PlayerContext';
import { UserProvider } from './contexts/UserContext';
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

        <div class='row'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/userinfo' component={UserInfo} />
            <Route exact path='/resume' component={resume} />
            <Route exact path='/game'>
              <PlayerProvider>
                <World />
              </PlayerProvider>
            </Route>
            <PrivateRoute path='/profile' component={Profile} />
          </Switch>
        </div>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
