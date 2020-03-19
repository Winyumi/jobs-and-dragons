import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <h6>JOBS & DRAGONS © 2020</h6>
    </footer>
  )
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  bottom: '0px',
  textShadow: '2px 2px black'
}

export default Footer;
