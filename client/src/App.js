import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "materialize-css";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Game from "./views/Game";
import jobListing from "./views/jobListing";
import SavedJobs from "./views/SavedJobs";

// import { useUserContext } from './contexts/UserContext';
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import UserInfo from "./components/UserInfo";
import CoverPage from "./components/CoverPage";
import Resume from "./components/Resume";

// styles/
import "./App.css";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app">
        <NavBar />
        <div className="row">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/userinfo" component={UserInfo} />
            <Route exact path="/joblisting" component={jobListing} />
            <Route exact path="/joblisting/saved" component={SavedJobs} />
            <Route exact path="/coverpage" component={CoverPage} />
            <Route exact path="/resume" component={Resume} />

            <Route path="/game">
              {/* <PlayerProvider> */}
              <Game />
              {/* </PlayerProvider> */}
            </Route>
            <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
