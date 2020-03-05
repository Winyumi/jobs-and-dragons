import React from 'react';

import logo from '../assets/logo.svg';

const Hero = () => (
  <div className='text-center hero my-5'>
    <img className='mb-3 app-logo' src={logo} alt='React logo' width='120' />
    <h1 className='mb-4'>JOBS & DRAGONS</h1>
    <p className='mb-5'>
      Job Hunt and Game using <a href='https://reactjs.org'>React.js</a>
    </p>
    <button className='btn btn-danger btn-lg'>Play</button>
  </div>
);

export default Hero;
