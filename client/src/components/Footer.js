import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle} copyrights='copy 2015 Copyright Text'>
      <h5>JOBS & DRAGONS © 2020</h5>
    </footer>
  );
}

const footerStyle = {
  position: 'relative',
  width: '100%',
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  textShadow: '2px 2px black',
  padding: '12px',
  minHeight: 65,
};

export default Footer;
