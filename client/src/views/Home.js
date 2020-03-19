import React from 'react';
import background from '../assets/J&D_Dungeon_dark.jpg';
import brandLogo from '../assets/J&D_newLogo.png';

import 'materialize-css';

function Home() {

  return (
    <React.Fragment>
      <img style={bgStyle} src={background} />
      <div style={topStyle}>
        <div className='container'>
          <img style={brandLogoStyle} className='responsive-img' src={brandLogo} />
        </div>

        <div className='container' style={descStyle}>
          <h3>Let the JOB HUNT begin</h3>
        </div>
      </div>
    </React.Fragment>
  )
}

const topStyle = {
  position: 'absolute', 
  top: '100px', 
  width: '100%', 
  textAlign: 'center', 
  // color: 'black',
  // textShadow: '2px 2px white'
}

const bgStyle = { 
  height: '80vh',
  width: '100vw',
  position: 'relative'
}

const brandLogoStyle = {
  width:'100%',
  paddingTop: '100px'
}

const descStyle = {
  color:'white',
  marginTop:'30px',
  background: 'rgb(0,0,0)',
  background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,0.1310129915730337) 87%)',
  width:'90vw',
  textShadow: '2px 2px black'

}

export default Home;