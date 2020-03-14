import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

function Home() {
  return (
    <React.Fragment>
      <h1 style={headerStyle}>Jobs & Dragons</h1>
      <p> 
        I am determined, capable, and hard-working and I love to rise to a challenge. <br/> 
        I thoroughly enjoy working with people and am happy to find any place in the team. <br/> 
        I've worked in a variety of positions in a large range of fields and I know I can always find a great way to contribute to a project. <br/>
      </p>
    </React.Fragment>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    position: 'fixed',
    top: '0px',
    width: '100%',
    padding: '5px'
  }

export default Home;