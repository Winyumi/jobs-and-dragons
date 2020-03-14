import React, { useEffect } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { api } from '../utils/api';


import 'materialize-css';
import "./profileStyles.css";


import Highlight from '../components/Highlight';
import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    if (loading || !user) {
      return <Loading />;
    }

    api.getUserInfo(user.email).then(result => {
      if (result.success) {
        dispatch({ type: 'user', payload: result.data });
      } else {
        api.addUserInfo(user).then(result => {
          if (result.success) {
            dispatch({ type: 'user', payload: result.data });
          }
        });
      }
    });
  }, [loading, user, dispatch]);

  return (

  <div class="row">

    <div class="center col s12 m6">
      <img src={user.picture} alt='User Profile Picture' class="circle responsive-img" id="userImage"/>
      <h3>USERNAME</h3>
      <div class="card-panel grey">{ user.name }</div>
    </div>

    <div class="center col s12 m6">
      <h3>Begin Your QUEST</h3>
      <a class='btn-large' href='/game' type='submit' name='gameBtn'>GAME</a>
      <br></br>  
      <a class="btn-large" href='#' type='submit' name='gameBtn'>RESUME</a>
      <br></br>
      <a class="btn-large" href='#' type='submit' name='gameBtn'>Quest 3</a>
      <br></br>
      <a class="btn-large" href='#' type='submit' name='gameBtn'>Quest 4</a>
    </div>

  </div>

  );
};

export default Profile;
