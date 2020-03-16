import React, { useEffect } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { api } from '../utils/api';

import 'materialize-css';

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
    <div className='my-5'>
      <h2 className='my-5'>Welcome {user.name}</h2>
      <p>{user.email}</p>
      <img src={user.picture} alt='Profile' />

      <div className='row'>
        <div className='col'>
          <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
        </div>
      </div>
    </div>
  );
};

export default Profile;
