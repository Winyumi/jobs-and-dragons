import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
        JOBS & DRAGONS © 2020
    </footer>
  )
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0px',
  height: '5px',
  width: '100%'
}

export default Footer;
