import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';
import { useAuth0 } from '../react-auth0-spa';
import logo from '../assets/J&D_Logo_BG_K.png';

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
    <nav>
      <div className='nav-wrapper grey darken-4'>
        <a href='/' className='brand-logo'>
          <img
            style={{ width: '240', margin: '20px 20px' }}
            className='responsive-img'
            src={logo}
            alt='logo'
          />
        </a>
        <ul className='right'>
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
  );
};

export default NavBar;
