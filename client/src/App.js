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
import jobListing from './views/jobListing';
import SavedJobs from './views/SavedJobs';

// import { useUserContext } from './contexts/UserContext';
import { useAuth0 } from './react-auth0-spa';
import history from './utils/history';
import UserInfo from './components/UserInfo';
import CoverPage from './components/CoverPage';
import Resume from './components/Resume';

// styles/
import './App.css';

const App = () => {
  const { loading, isAuthenticated } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id='app'>
        {isAuthenticated ? <NavBar /> : null}
        <div className='row'>
          <Switch>
            {isAuthenticated ? (
              <Route exact path='/' component={Home} />
            ) : (
              <Route>
                <NavBar />
                <Home />
                <Footer />
              </Route>
            )}

            <PrivateRoute
              exact
              path='/userinfo'
              component={UserInfo}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/joblisting'
              component={jobListing}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/joblisting/saved'
              component={SavedJobs}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/coverpage'
              component={CoverPage}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/resume'
              component={Resume}
            ></PrivateRoute>

            <PrivateRoute path='/game' component={Game}></PrivateRoute>
            <PrivateRoute path='/profile' component={Profile}></PrivateRoute>
          </Switch>
        </div>
        {isAuthenticated ? <Footer /> : null}
      </div>
    </Router>
  );
};

export default App;
