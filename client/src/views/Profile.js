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
  console.log(state.user);
  useEffect(() => {
    if (loading || !user) {
      return <Loading />;
    }

    api.getUserInfo(user.email).then(result => {
      if (result.success) {
        dispatch({ type: 'user', payload: result.data });
      } else {
        let newUser = {
          name: user.name,
          email: user.email,
          picture: user.picture,
          gamestats: {}
        };
        window
          .fetch(`https://api.github.com/users/${user.nickname}`)
          .then(res => res.json())
          .then(res => {
            newUser.gamestats.publicRepos = res['public_repos'];
            newUser.gamestats.followers = res['followers'];
            return newUser;
          })
          .then(newUser => {
            window
              .fetch(`https://api.github.com/users/${user.nickname}/repos`)
              .then(res => res.json())
              .then(res => {
                const numOfStars = res.reduce((acc, repo) => {
                  return acc + repo['stargazers_count'];
                }, 0);
                newUser.gamestats.numOfStars = numOfStars;
                return newUser;
              })
              .then(newUser => {
                api.addUserInfo(newUser).then(result => {
                  if (result.success) {
                    dispatch({ type: 'user', payload: result.data });
                  }
                });
              });
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
        <Link className='btn-large' to='/game/quest/01' name='gameBtn'>
          Quest 1
        </Link>
        <br></br>
        <Link className='btn-large' to='/game/quest/02' name='gameBtn'>
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
