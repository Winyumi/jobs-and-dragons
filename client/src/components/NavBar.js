import React, { useState } from 'react';
import 'materialize-css';
import { useAuth0 } from '../react-auth0-spa';
import logo from '../assets/J&D_Logo_BG_K.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  return (
    <div>
      <div style={{height: '4em'}} className='center grey darken-4'>
        <img style={{height: '100%', padding: '5px'}}src={logo} alt="logo" />
      </div>
        <nav className='nav-wrapper grey darken-4'>
            <ul className='center'>
              <li to='/' id='qsLoginBtn' onClick={() => loginWithRedirect({})}>
                <a href='/'>HOME</a>
              </li>
              <li to='/profile'>
                <a href='/profile'>PROFILE</a>
              </li>
              <li
                to='/logout'
                id='qsLogoutBtn'
                onClick={() => logoutWithRedirect()}
              >
                <a href='/'>LOGOUT</a>
              </li>
            </ul>
          </nav>
      </div>
  );
};

export default NavBar;
