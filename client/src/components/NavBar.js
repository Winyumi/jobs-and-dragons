import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';

import { useAuth0 } from '../react-auth0-spa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  useEffect(() => {
    if (isAuthenticated) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isAuthenticated]);

  return (
    <div className='nav-container'>
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo right'>
            Logo
          </Link>
          <ul className='left'>
            <li to='/'>
              <Link to='/'>HOME</Link>
            </li>
            {!isOpen ? (
              <li
                to='/'
                id='qsLoginBtn'
                onClick={() => {
                  loginWithRedirect({});
                }}
              >
                <Link to='/'>LOGIN</Link>
              </li>
            ) : (
              <>
                <li to='/profile'>
                  <Link to='/profile'>PROFILE</Link>
                </li>
                <li
                  to='/logout'
                  id='qsLogoutBtn'
                  onClick={() => {
                    logoutWithRedirect();
                  }}
                >
                  <Link to='/'>LOGOUT</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
