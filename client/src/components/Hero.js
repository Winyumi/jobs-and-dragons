import React from 'react';

import 'materialize-css';

const Hero = () => (
  <div className='hero'>
    <h1>JOBS & DRAGONS</h1>
    <p>
      Job Hunt and Game using <a href='https://reactjs.org'>React.js and</a> and
      ..........
    </p>
    <a className='btn-large' href='/game' type='submit' name='action'>
      PLAY
    </a>
  </div>
);

export default Hero;
