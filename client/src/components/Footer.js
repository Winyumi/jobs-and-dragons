import React from 'react';

function Footer() {
  return (
    <div style={footerStyle}>
      <h6>JOBS & DRAGONS © 2020</h6>
    </div>
  )
}

const footerStyle = {
  height: '40px',
  width: '100%',
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  bottom: '0px',
  textShadow: '2px 2px black',
  position: 'fixed',
}

export default Footer;
