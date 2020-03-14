import React from 'react';
import background from '../assets/dungeonBG.png'

function Home() {
  return (
    <React.Fragment>
      <img style={{width: '100%', height: '100%', opacity: '0.8', position: 'relative'}} src={background} />
      <h1 style={headerStyle}>Welcome!</h1>
    </React.Fragment>
  )
}

const headerStyle = {
  position: 'absolute', 
  top: '200px', 
  width: '100%', 
  textAlign: 'center', 
  color: 'black',
  textShadow: '2px 2px white'
}

export default Home;