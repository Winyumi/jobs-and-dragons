import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { api } from '../utils/api';

import 'materialize-css';
// import './profileStyles.css';

import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    if (loading || !user) {
      return <Loading />;
    }
    // console.log(user);
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

  function changeTo(e) {
    e.target.style.background = 'darkblue';
    e.target.style.translate = '5px'
  }

  function changeBack(e) {
    e.target.style.background = '#333';
  }

  return (
    <div className='row' style={profileStyle}>
      <div className='center col s12 m6'>
        <img
          src={user.picture}
          alt='User Profile'
          className='circle responsive-img'
          style = {userImageStyle}
          // id='userImage'
        />
        <h3>USERNAME</h3>
        <div className='card-panel grey' style={cardStyle}>{user.name}</div>
      </div>

      <div className='center col s12 m6'>
        <h3>Begin Your QUEST</h3>
        <Link 
        className='btn-large' 
        style= {BtnStyle} 
        onMouseOver={changeTo} 
        onMouseLeave={changeBack} 
        to='/game' 
        quest='1' 
        name='gameBtn'>
          Create Profile
        </Link>
        <br></br>
        <Link 
        className='btn-large' 
        style= {BtnStyle} 
        onMouseOver={changeTo} 
        onMouseLeave={changeBack} 
        to='/game' 
        quest='2' 
        name='gameBtn'>
          Job Listings
        </Link>
        <br></br>
        <Link 
        className='btn-large' 
        style= {BtnStyle} 
        onMouseOver={changeTo} 
        onMouseLeave={changeBack} 
        to='#' 
        name='gameBtn'>
          Quest 3
        </Link>
        <br></br>
        <Link 
        className='btn-large' 
        style= {BtnStyle} 
        onMouseOver={changeTo} 
        onMouseLeave={changeBack} 
        to='#' 
        name='gameBtn'>
          Quest 4
        </Link>
      </div>
    </div>
  );
};

const profileStyle = {
  height: '80vh'
}

const BtnStyle = { 
  background: '#333',
  borderRadius: '25%',
  fontFamily: 'Alagard',
  margin:'10px',
  font: 'Alagard',
  boxShadow: '0 8px #999',

}

const userImageStyle = { 
  width:'200px',
  height: '200px',
  marginTop: '50px'
}

const cardStyle = {
  fontFamily: 'Alagard',
  fontSize: 'xx-large',
  color: 'darkblue',
  margin:'20px',
}

export default Profile;
