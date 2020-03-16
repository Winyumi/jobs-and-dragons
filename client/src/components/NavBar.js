import React, { useState } from 'react';
import 'materialize-css';

import { useAuth0 } from '../react-auth0-spa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  return (
    <div className='nav-container'>
      <nav>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo right'>
            Logo
          </a>
          <ul className='left'>
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
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
