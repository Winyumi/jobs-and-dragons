import React from 'react';
import background from '../assets/dungeonBG.png'

function Home() {
  return (
    <React.Fragment>
      <img style={bgStyle} src={background} />
      <div style={topStyle}>
        <h1>Welcome!</h1>
        <p>Jobs & Dragons is a fun new way to quest for your next tech job.</p> <br/>
        <p>Sign in and get started finding your dream career!</p>
      </div>
    </React.Fragment>
  )
}

const topStyle = {
  position: 'absolute', 
  top: '200px', 
  width: '100%', 
  textAlign: 'center', 
  color: 'black',
  textShadow: '2px 2px white'
}

const bgStyle = { 
  height: '100vh',
  width: '100vw',
  opacity: '0.5',
  position: 'relative'

}

export default Home;