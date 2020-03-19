import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { api } from '../utils/api';

import 'materialize-css';
import './profileStyles.css';

import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    if (loading || !user) {
      return <Loading />;
    }
    console.log(user);
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
    <div className='row'>
      <div className='center col s12 m6'>
        <img
          src={user.picture}
          alt='User Profile'
          className='circle responsive-img'
          id='userImage'
        />
        <h3>USERNAME</h3>
        <div className='card-panel grey'>{user.name}</div>
      </div>

      <div className='center col s12 m6'>
        <h3>Begin Your QUEST</h3>
        <Link className='btn-large' to='/game' quest='1' name='gameBtn'>
          Quest 1
        </Link>
        <br></br>
        <Link className='btn-large' to='/game' quest='2' name='gameBtn'>
          Quest 2
        </Link>
        <br></br>
        <Link className='btn-large' to='#' name='gameBtn'>
          Quest 3
        </Link>
        <br></br>
        <Link className='btn-large' to='#' name='gameBtn'>
          Quest 4
        </Link>
      </div>
    </div>
  );
};

export default Profile;
